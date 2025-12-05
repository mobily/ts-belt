import type { API, FileInfo } from "jscodeshift";

import * as fs from "fs";
import * as path from "path";

import { html } from "common-tags";

type Example = {
	fn: string;
	result: string;
};

type Helper = {
	name: string;
	description: string;
	types: string[];
	examples: Example[];
};

const transformer = (file: FileInfo, api: API) => {
	const j = api.jscodeshift;
	const root = j(file.source);
	const helpers = [] as Helper[];
	const alreadyAdded = [] as string[];
	const dirname = path.basename(path.dirname(file.path));

	root
		.find(j.ExportNamedDeclaration)
		.filter((p) => {
			return (
				p.parent.value.type === "Program" &&
				p.value.declaration?.type === "TSDeclareFunction"
			);
		})
		.forEach((p) => {
			if (
				p.value.declaration?.type === "TSDeclareFunction" &&
				!helpers.some(
					(value) =>
						// @ts-expect-error
						value.name === p.value.declaration.id.name,
				)
			) {
				const comments = (p.value.comments ?? []).map((comment) => {
					return comment.value.trim();
				});
				const name = p.value.declaration.id?.name ?? "";
				const [description] = comments;

				helpers.push({
					name,
					description,
					types: [],
					examples: [],
				});
			}
		});

	root
		.find(j.ExportNamedDeclaration)
		.filter((p) => {
			return (
				p.parent.value.type === "Program" &&
				p.value.declaration?.type === "TSDeclareFunction"
			);
		})
		.forEach((p) => {
			const helperIndex = helpers.findIndex(
				(value) =>
					// @ts-expect-error
					value.name === p.value.declaration.id.name,
			);

			if (
				p.value.declaration?.type === "TSDeclareFunction" &&
				helperIndex > -1
			) {
				helpers[helperIndex].types.push(
					j(p.value.declaration).toSource().replace("declare ", ""),
				);
			}
		});

	root
		.find(j.ExportNamedDeclaration)
		.filter((p) => {
			return (
				p.parent.value.type === "Program" &&
				p.value.declaration?.type === "TSDeclareFunction"
			);
		})
		.forEach((p) => {
			const helperIndex = helpers.findIndex(
				(value) =>
					// @ts-expect-error
					value.name === p.value.declaration.id.name,
			);

			if (
				p.value.declaration?.type === "TSDeclareFunction" &&
				helperIndex > -1 &&
				!alreadyAdded.some(
					(value) =>
						// @ts-expect-error
						value === p.value.declaration.id.name,
				)
			) {
				const name = p.value.declaration.id?.name ?? "";

				alreadyAdded.push(name);

				const testFilePath = path.resolve(
					__dirname,
					"..",
					"..",
					"__tests__",
					dirname,
					`${name}.test.ts`,
				);

				if (fs.existsSync(testFilePath)) {
					const testRoot = j(
						fs.readFileSync(testFilePath, { encoding: "utf-8" }),
					);

					testRoot
						.find(j.CallExpression)
						.filter((p) => {
							return (
								p.value.callee.type === "Identifier" &&
								p.value.callee.name === "it" &&
								p.value.arguments[0]?.type === "StringLiteral" &&
								p.value.arguments[0]?.value === "*"
							);
						})
						.forEach((p) => {
							j(p.value)
								.find(j.CallExpression, {
									callee: {
										type: "MemberExpression",
										object: {
											callee: {
												name: "expect",
											},
										},
									},
								})
								.forEach((p) => {
									// @ts-expect-error
									const fn = j(p.value.callee.object.arguments[0]).toSource();
									const result = j(p.value.arguments[0]).toSource();

									helpers[helperIndex].examples.push({
										fn,
										result,
									});
								});
						});
				}
			}
		});

	const removePrettierIgnore = (str: string) => {
		return str.replace("// prettier-ignore\n", "");
	};
	const content = helpers
		.slice(0)
		.sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
		.map((value) => {
			const types = value.types.join("\n");
			const examples = value.examples
				.map((example, index) => {
					const lines = example.fn.split(/\r\n|\r|\n/).length;
					return `${removePrettierIgnore(
						example.fn.replace("/*\n", "").replace("*/", ""),
					)} // → ${removePrettierIgnore(example.result)}${
						lines > 1 && index !== value.examples.length - 1 ? "\n" : ""
					}`;
				})
				.join("\n");
			const description = value.description
				? `\n${value.description.replace(/^\*\s/, "")}\n`
				: "";

			// prettier-ignore
			const main = html`
        ### ${value.name}
        ${description}

        \`\`\`ts
        ${types}
        \`\`\`
      `;

			// prettier-ignore
			const mainWithExample = html`
        ${main}

        \`\`\`ts
        ${examples}
        \`\`\`
      `;

			return value.examples.length ? mainWithExample : main;
		});

	fs.writeFileSync(
		path.resolve(
			__dirname,
			"..",
			"..",
			"docs",
			"api",
			"generated",
			`_${dirname.toLowerCase()}.mdx`,
		),
		content.join("\n\n"),
		{ encoding: "utf-8" },
	);

	return root.toSource();
};

export default transformer;
