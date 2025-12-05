import type { API, Identifier } from "jscodeshift";

const transform = (source: string, j: API["jscodeshift"]): string => {
	const root = j(source);
	const literals: [string, string][] = [
		["when_", "when"],
		["not_", "not"],
		["or_", "or"],
		["and_", "and"],
	];
	const equalName =
		(p: Identifier) =>
		([search]: [string, string]) => {
			return p.name === search;
		};

	root
		.find(j.Identifier)
		.filter((p) => {
			return literals.some(equalName(p.value));
		})
		.replaceWith((p) => {
			// @ts-expect-error
			const [, value] = literals.find(equalName(p.value));
			return j.identifier(value);
		});

	return root.toSource();
};

export default transform;
