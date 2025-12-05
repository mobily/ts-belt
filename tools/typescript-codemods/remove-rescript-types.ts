import type { API } from "jscodeshift";

const transform = (source: string, j: API["jscodeshift"]): string => {
	const root = j(source);

	// Js_re_t to RegExp
	root
		.find(j.Identifier, {
			name: "exn",
		})
		.replaceWith((_p) => {
			return j.tsUnknownKeyword();
		});

	// Js_re_t to RegExp
	root
		.find(j.Identifier, {
			name: "Js_re_t",
		})
		.replaceWith((_p) => {
			return j.identifier("RegExp");
		});

	// Promise_t to Propmise
	root
		.find(j.Identifier, {
			name: "Promise_t",
		})
		.replaceWith((_p) => {
			return j.identifier("Promise");
		});

	// Js_re_t to RegExp
	root
		.find(j.Identifier, {
			name: "Belt_Map_String_key",
		})
		.replaceWith((_p) => {
			return j.identifier("string");
		});

	// Belt_Array_t to Array
	root
		.find(j.Identifier, {
			name: "Belt_Array_t",
		})
		.replaceWith((_p) => {
			return j.identifier("Array");
		});

	root
		.find(j.Identifier, {
			name: "Js_Promise_error",
		})
		.replaceWith((_p) => {
			return j.identifier("Error");
		});

	// Js_undefined<T> to T | undefined
	root
		.find(j.TSFunctionType, {
			typeAnnotation: {
				typeAnnotation: {
					typeName: {
						name: "Js_undefined",
					},
				},
			},
		})
		.replaceWith((p) => {
			if (p.value.typeAnnotation?.typeAnnotation?.type === "TSTypeReference") {
				const params =
					p.value.typeAnnotation?.typeAnnotation?.typeParameters?.params ?? [];
				const [type] = params;

				if (type) {
					const fn = j.tsFunctionType(p.value.parameters);
					fn.typeParameters = p.value.typeParameters;
					fn.typeAnnotation = j.tsTypeAnnotation(
						j.tsUnionType([type, j.tsUndefinedKeyword()]),
					);
					return fn;
				}
			}

			return p.value;
		});

	root
		.find(j.TSTypeReference, {
			typeName: {
				type: "Identifier",
				name: "Js_undefined",
			},
		})
		.replaceWith((p) => {
			const params = p.value.typeParameters?.params ?? [];

			const [type] = params;

			if (type) {
				return j.tsUnionType([type, j.tsUndefinedKeyword()]);
			}

			return p.value;
		});

	return root.toSource();
};

export default transform;
