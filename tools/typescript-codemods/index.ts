import type { API, Collection, FileInfo } from "jscodeshift";

import * as fs from "fs";
import * as path from "path";

import option from "./make-option";
import readonlyArray from "./make-readonly-array";
import tuples from "./make-readonly-tuples";
import types from "./make-types";
import rescript from "./remove-rescript-types";
import generics from "./rename-generics";

const transform = (file: FileInfo, api: API) => {
	const j = api.jscodeshift;
	const dirname = path.dirname(file.path);
	const basename = path.basename(file.path, ".gen.tsx");
	const ctx = {
		file,
		currentExports: [],
	};
	const source = [
		rescript,
		tuples,
		readonlyArray,
		generics,
		option,
		types,
	].reduce((acc, fn) => {
		return fn(acc, j, ctx);
	}, file.source);

	const currentExports = j(source)
		.find(j.Program)
		.replaceWith((_p) => {
			return j.program(ctx.currentExports.filter(Boolean));
		})
		.toSource();

	const root = j(currentExports);

	const imports = (collection: Collection<any>, xs: [string, string?][]) => {
		return xs.reduce((collection, value) => {
			const [name, path] = value;
			let hasType = false;
			let isAlreadyDefined = false;

			const root = j(collection.toSource());

			root
				.find(j.TSTypeAliasDeclaration, {
					id: {
						name,
					},
				})
				.forEach((_p) => {
					isAlreadyDefined = true;
				});

			root
				.find(j.TSTypeReference, {
					typeName: {
						name,
					},
				})
				.forEach((_p) => {
					hasType = true;
				});

			if (hasType && !isAlreadyDefined) {
				let isAlreadyImported = false;

				const importDeclarations = j(root.toSource()).find(
					j.ImportDeclaration,
					{
						source: {
							value: path,
						},
					},
				);

				importDeclarations.forEach((_p) => {
					isAlreadyImported = true;
				});

				if (isAlreadyImported) {
					root
						.find(j.ImportDeclaration, {
							source: {
								value: path,
							},
						})
						.forEach((p) => {
							p.value.specifiers = [
								...p.value.specifiers,
								j.importSpecifier(j.identifier(name)),
							];
						});

					return root;
				}

				root.find(j.Program).forEach((p) => {
					p.value.body = [
						j.importDeclaration(
							[j.importSpecifier(j.identifier(name))],
							j.literal(path ?? `../${name}`),
						),
						...p.value.body,
					];
				});
			}

			return root;
		}, collection);
	};

	const body = imports(root, [
		["Option"],
		["Result"],
		["AsyncOption"],
		["AsyncResult"],
		["Ok", "../Result"],
		["Error", "../Result"],
		["Some", "../Option"],
		["None", "../Option"],
		["AsyncData", "../AsyncData"],
		["Complete", "../AsyncData"],
		["Reloading", "../AsyncData"],
		["ExtractValue", "../types"],
		["StringKeyOf", "../types"],
		["UnpackArray", "../types"],
		["Array", "../types"],
		["Mutable", "../types"],
	]);

	fs.writeFileSync(path.resolve(dirname, "index.ts"), body.toSource(), {
		encoding: "utf-8",
	});

	return root.toSource();
};

export default transform;
