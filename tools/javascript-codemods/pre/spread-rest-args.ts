import type { API } from "jscodeshift";

const transform = (source: string, j: API["jscodeshift"]): string => {
	const root = j(source);

	root
		.find(j.Identifier, {
			name: "restArgs",
		})
		.filter((p) => {
			return p.parent.value.type === "FunctionExpression";
		})
		.replaceWith((p) => {
			return j.restElement(p.value);
		})
		.toSource();

	root
		.find(j.Identifier, {
			name: "restArgs",
		})
		.filter((p) => {
			return p.parent.value.type === "CallExpression";
		})
		.replaceWith((p) => {
			return j.spreadElement(p.value);
		})
		.toSource();

	return root.toSource();
};

export default transform;
