import type { API, FunctionDeclaration } from "jscodeshift";

import * as fs from "fs";
import * as path from "path";

const transform = (source: string, j: API["jscodeshift"]): string => {
	const root = j(source);
	const exportedFunctions = [] as string[];

	const readExternalFunction = (
		module: string,
		functionName: string,
	): FunctionDeclaration | undefined => {
		let beltModule = undefined as string | undefined;
		let beltFunction = undefined as FunctionDeclaration | undefined;

		root
			.find(j.ImportDeclaration)
			.filter((p) => {
				const importValue = p.value.source.value;

				if (typeof importValue === "string") {
					return importValue.toLowerCase().includes(module.toLowerCase());
				}

				return false;
			})
			.forEach((p) => {
				beltModule = p.value.source.value as string;
			});

		if (beltModule) {
			const belt = j(
				fs.readFileSync(
					path.resolve(__dirname, "..", "..", "..", "node_modules", beltModule),
					{
						encoding: "utf-8",
					},
				),
			);

			belt
				.find(j.FunctionDeclaration, {
					id: {
						name: functionName,
					},
				})
				.forEach((p) => {
					beltFunction = p.value;
				});

			return beltFunction;
		}
	};

	const makeDataFirst = (
		functionDeclaration: FunctionDeclaration,
		name?: string,
	) => {
		const n = name ?? functionDeclaration.id?.name;
		const id = `_${n}`;

		if (!n) {
			throw new Error(`Cannot find the identifier: ${n}`);
		}

		const dataFirst = j.functionDeclaration(
			j.identifier(n),
			[],
			j.blockStatement([
				j.ifStatement(
					j.binaryExpression(
						"===",
						j.memberExpression(
							j.identifier("arguments"),
							j.identifier("length"),
						),
						j.numericLiteral(functionDeclaration.params.length - 1),
					),
					j.blockStatement([
						j.variableDeclaration("const", [
							j.variableDeclarator(
								j.identifier("args"),
								j.identifier("arguments"),
							),
						]),
						j.returnStatement(
							j.functionExpression(
								j.identifier("fn"),
								[j.identifier("data")],
								j.blockStatement([
									j.returnStatement(
										j.callExpression(j.identifier(id), [
											j.identifier("data"),
											...functionDeclaration.params.slice(1).map((_, index) => {
												const argument = j.memberExpression(
													j.identifier("args"),
													j.numericLiteral(index),
												);
												argument.computed = true;
												return argument;
											}),
										]),
									),
								]),
							),
						),
					]),
				),
				j.returnStatement(
					j.callExpression(
						j.identifier(id),
						functionDeclaration.params.map((_, index) => {
							const argument = j.memberExpression(
								j.identifier("arguments"),
								j.numericLiteral(index),
							);
							argument.computed = true;
							return argument;
						}),
					),
				),
			]),
		);

		return [id, dataFirst] as const;
	};

	root.find(j.ExportNamedDeclaration).forEach((p) => {
		p.value.specifiers?.forEach((exportSpecifier) => {
			if (exportSpecifier.local?.type === "Identifier") {
				exportedFunctions.push(exportSpecifier.local.name);
			}
		});
	});

	root
		.find(j.FunctionDeclaration)
		.filter((p) => {
			return exportedFunctions.includes(p.value.id?.name ?? "");
		})
		.replaceWith((p) => {
			if (p.value.params.length > 1) {
				const [id, dataFirst] = makeDataFirst(p.value);

				if (p.value.id) {
					p.value.id.name = id;
					return [p.value, dataFirst];
				}

				throw new Error(`Cannot find the identifier: ${p.value}`);
			}

			return p.value;
		});

	root
		.find(j.VariableDeclaration)
		.filter((p) => {
			const declarator = p.value.declarations[0];

			if (
				declarator.type === "VariableDeclarator" &&
				declarator.id.type === "Identifier"
			) {
				return exportedFunctions.includes(declarator.id?.name ?? "");
			}

			return false;
		})
		.replaceWith((p) => {
			const declarator = p.value.declarations[0];

			const memberExpression =
				declarator.type === "VariableDeclarator" &&
				declarator.id.type === "Identifier" &&
				declarator.init;

			if (
				declarator.type === "VariableDeclarator" &&
				declarator.id.type === "Identifier" &&
				// @ts-expect-error
				memberExpression.type === "MemberExpression" &&
				memberExpression.object.type === "Identifier" &&
				memberExpression.property.type === "Identifier"
			) {
				const beltFunction = readExternalFunction(
					memberExpression.object.name,
					memberExpression.property.name,
				);

				if (beltFunction && beltFunction?.params.length > 1) {
					const [id, dataFirst] = makeDataFirst(
						beltFunction,
						declarator.id.name,
					);

					declarator.id.name = id;

					return [p.value, dataFirst];
				}
			}

			return p.value;
		});

	return root.toSource();
};

export default transform;
