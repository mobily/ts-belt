import type { API } from "jscodeshift";

const transform = (source: string, j: API["jscodeshift"]): string => {
	const root = j(source);

	// [A, B] to readonly [A, B]
	root
		.find(j.TSFunctionType, {
			typeAnnotation: {
				typeAnnotation: {
					type: "TSTupleType",
				},
			},
		})
		.replaceWith((p) => {
			if (p.value.typeAnnotation?.typeAnnotation?.type === "TSTupleType") {
				const fn = j.tsFunctionType(p.value.parameters);
				fn.typeParameters = p.value.typeParameters;
				fn.typeAnnotation = j.tsTypeAnnotation(
					p.value.typeAnnotation.typeAnnotation,
				);
				return fn;
			}

			return p.value;
		});

	root.find(j.TSTupleType).replaceWith((p) => {
		if (p.parent && p.parent.value.operator !== "readonly") {
			const operator = {
				typeAnnotation: p.value,
				type: "TSTypeOperator",
				operator: "readonly",
			};

			return operator;
		}

		return p.value;
	});

	return root.toSource();
};

export default transform;
