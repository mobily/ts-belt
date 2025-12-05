import type { API } from "jscodeshift";

const transform = (source: string, j: API["jscodeshift"]): string => {
	const root = j(source);

	root
		.find(j.TSFunctionType, {
			typeAnnotation: {
				typeAnnotation: {
					type: "TSArrayType",
				},
			},
		})
		.replaceWith((p) => {
			if (p.value.typeAnnotation?.typeAnnotation?.type === "TSArrayType") {
				const fn = j.tsFunctionType(p.value.parameters);
				fn.typeParameters = p.value.typeParameters;
				fn.typeAnnotation = j.tsTypeAnnotation(
					p.value.typeAnnotation.typeAnnotation,
				);
				return fn;
			}

			return p.value;
		});

	// T[] to Array<T>
	root.find(j.TSArrayType).replaceWith((p) => {
		const elementType = p.value.elementType;

		if (elementType) {
			return j.tsTypeReference(
				j.identifier("Array"),
				j.tsTypeParameterInstantiation([elementType]),
			);
		}

		return p.value;
	});

	return root.toSource();
};

export default transform;
