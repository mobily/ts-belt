import type { API } from "jscodeshift";

const transform = (source: string, j: API["jscodeshift"]): string => {
	// T | null | undefined to Option<T>
	return j(source)
		.find(j.TSUnionType)
		.filter((p) => {
			return (
				p.value.types.some((value) => value.type === "TSNullKeyword") &&
				p.value.types.some((value) => value.type === "TSUndefinedKeyword")
			);
		})
		.replaceWith((p) => {
			const typeReference = p.value.types.find(
				(value) =>
					value.type !== "TSUndefinedKeyword" && value.type !== "TSNullKeyword",
			);

			if (typeReference) {
				return j.tsTypeReference(
					j.identifier("Option"),
					j.tsTypeParameterInstantiation([typeReference]),
				);
			}

			return p.value;
		})
		.toSource();
};

export default transform;
