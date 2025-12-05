import {
	type API,
	type ASTPath,
	type Collection,
	CommentBlock,
	CommentLine,
	type ExportNamedDeclaration,
	type Identifier,
	type TSDeclareFunction,
	type TSFunctionType,
	type TSTypeAnnotation,
	TSTypeParameterDeclaration,
	type VariableDeclarator,
} from "jscodeshift";

import type * as AST from "ast-types/gen/kinds";

import * as fs from "fs";
import * as path from "path";

const defaultEncoding = { encoding: "utf-8" } as const;
const coerce = <A>(a: any) => a as A;
const getIdentifier = (p: ASTPath<ExportNamedDeclaration>): Identifier => {
	const { declaration } = p.value;

	if (
		declaration?.type === "TSDeclareFunction" ||
		declaration?.type === "ClassDeclaration" ||
		declaration?.type === "TSTypeAliasDeclaration"
	) {
		return declaration.id as Identifier;
	}

	if (declaration?.type === "VariableDeclaration") {
		const declarator = declaration.declarations[0] as VariableDeclarator;
		return declarator.id as Identifier;
	}

	throw new Error("Unexpected identifier");
};
const fixIdentifierName = (id: Identifier) => {
	id.name = id.name.replace("_", "");
	return id;
};
const getTSFunctionOptions = (p: TSFunctionType | TSDeclareFunction) => {
	if (p.type === "TSDeclareFunction") {
		return {
			parameters: coerce<Identifier[]>(p.params) || [],
			typeAnnotation: coerce<TSTypeAnnotation>(p.returnType),
			typeParameters: p.typeParameters,
		};
	}

	const { typeParameters, parameters = [], typeAnnotation } = p;

	return {
		parameters,
		typeParameters,
		typeAnnotation,
	};
};

const transform = (
	source: string,
	j: API["jscodeshift"],
	ctx: Record<string, any>,
): string => {
	const root = j(source);
	const dirname = path.dirname(ctx.file.path);
	const basename = path.basename(ctx.file.path, ".gen.tsx");
	const customTSFile = path.resolve(dirname, `${basename}.ts`);
	const rescriptJSFile = path.resolve(dirname, `${basename}.bs.js`);
	const tsFunctionDeclarations: TSDeclareFunction[] = [];
	const empty = j("");
	const alreadyAddedExports = [] as string[];

	const customTS: Collection<any> = fs.existsSync(customTSFile)
		? j(fs.readFileSync(customTSFile, defaultEncoding))
		: empty;
	const rescriptJS: Collection<any> = fs.existsSync(rescriptJSFile)
		? j(fs.readFileSync(rescriptJSFile, defaultEncoding))
		: empty;

	const makeTSDeclareFunction = (
		name: string,
		parameters: any[],
		typeParameters: any,
		returnType: any,
	) => {
		const tsDeclareFunction = j.tsDeclareFunction(
			j.identifier(name),
			parameters,
		);

		tsDeclareFunction.declare = true;
		tsDeclareFunction.typeParameters = typeParameters;
		tsDeclareFunction.returnType = j.tsTypeAnnotation(returnType);

		return tsDeclareFunction;
	};
	const findComments = (id: string) => {
		let comments = undefined as AST.CommentKind[] | undefined | null;

		rescriptJS
			.find(j.FunctionDeclaration)
			.filter((p) => {
				return (
					p.parent.value.type === "Program" &&
					(p.value.id?.name === id ||
						p.value.id?.name === `${id}_` ||
						p.value.id?.name === `_${id}` ||
						p.value.id?.name === `_${id}_`) &&
					(p.value.comments?.length ?? 0) > 0
				);
			})
			.forEach((p) => {
				comments = p.value.comments;
			});

		if (!comments) {
			rescriptJS
				.find(j.VariableDeclaration)
				.filter((p) => {
					const [declarator] = p.value.declarations;
					return (
						p.parent.value.type === "Program" &&
						declarator.type === "VariableDeclarator" &&
						declarator.id.type === "Identifier" &&
						(declarator.id.name === id || declarator.id.name === `_${id}`) &&
						(p.value.comments?.length ?? 0) > 0
					);
				})
				.forEach((p) => {
					comments = p.value.comments;
				});
		}

		return comments;
	};
	const makeFunctionSignatures = (
		identifier: Identifier,
		tsFunctionType: TSFunctionType | TSDeclareFunction,
	) => {
		const signatures = [] as ExportNamedDeclaration[];
		const {
			typeParameters,
			parameters = [],
			typeAnnotation,
		} = getTSFunctionOptions(tsFunctionType);

		const comments = findComments(identifier.name);

		let hasSameParamsType = false;

		const original = j.exportNamedDeclaration(
			makeTSDeclareFunction(
				identifier.name,
				parameters,
				typeParameters,
				typeAnnotation?.typeAnnotation,
			),
		);

		signatures.push(original);

		if (parameters.length > 1) {
			const firstParam = parameters.slice(0, 1);
			const otherParams = parameters.slice(1);
			const returnFunction = j.tsFunctionType(firstParam);

			returnFunction.typeAnnotation = typeAnnotation;

			const dataLastAnnotation = j.exportNamedDeclaration(
				makeTSDeclareFunction(
					identifier.name,
					otherParams,
					typeParameters,
					returnFunction,
				),
			);

			hasSameParamsType = parameters.every((parameter) => {
				const fstTypeAnnotation = coerce<Identifier>(parameters[0])
					?.typeAnnotation?.typeAnnotation;
				const sndAnnotationType =
					coerce<Identifier>(parameter)?.typeAnnotation?.typeAnnotation;

				if (
					fstTypeAnnotation?.type === "TSTypeReference" &&
					sndAnnotationType?.type === "TSTypeReference"
				) {
					return (
						coerce<Identifier>(fstTypeAnnotation.typeName).name ===
						coerce<Identifier>(sndAnnotationType.typeName).name
					);
				}

				return fstTypeAnnotation?.type === sndAnnotationType?.type;
			});

			signatures.push(dataLastAnnotation);
		}

		if (hasSameParamsType) {
			const [fst, snd] = signatures;
			signatures.length = 0;
			signatures.push(snd, fst);
		}

		if (comments) {
			signatures[0].comments = comments;
		}

		return signatures;
	};

	customTS.find(j.TSDeclareFunction).forEach((p) => {
		tsFunctionDeclarations.push(p.value);
	});

	root
		.find(j.ExportNamedDeclaration, {
			declaration: {
				type: "VariableDeclaration",
			},
		})
		.replaceWith((p) => {
			const identifier = getIdentifier(p);

			fixIdentifierName(identifier);
			alreadyAddedExports.push(identifier.name);

			const currentTSFunctionDeclaration = tsFunctionDeclarations.filter(
				(tsFunctionDeclaration) => {
					return tsFunctionDeclaration.id?.name === identifier.name;
				},
			);

			if (currentTSFunctionDeclaration.length) {
				return currentTSFunctionDeclaration.reduce((acc, p) => {
					return acc.concat(makeFunctionSignatures(identifier, p));
				}, [] as ExportNamedDeclaration[]);
			}

			const tsFunctionType = identifier.typeAnnotation?.typeAnnotation as
				| TSFunctionType
				| undefined;

			if (tsFunctionType) {
				return makeFunctionSignatures(identifier, tsFunctionType);
			}

			throw new Error("Something went wrong…");
		});

	const recreatedRoot = j(root.toSource());

	customTS
		.find(j.ExportNamedDeclaration)
		.filter((p) => {
			const identifier = getIdentifier(p);
			return !alreadyAddedExports.includes(identifier.name);
		})
		.forEach((p) => {
			ctx.currentExports.push(p.value);
		});

	recreatedRoot
		.find(j.ExportNamedDeclaration, {
			declaration: {
				type: "TSDeclareFunction",
			},
		})
		.forEach((p) => {
			ctx.currentExports.push(p.value);
		});

	return recreatedRoot.toSource();
};

export default transform;
