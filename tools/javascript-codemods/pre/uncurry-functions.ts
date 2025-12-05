import type { API } from "jscodeshift";

const transform = (source: string, j: API["jscodeshift"]): string => {
	const root = j(source);

	root
		.find(j.CallExpression)
		.filter((p) => {
			if (
				p.value.callee.type === "MemberExpression" &&
				p.value.callee.property.type === "Identifier"
			) {
				return /^_[0-9]$/.test(p.value.callee.property.name);
			}

			return false;
		})
		.replaceWith((p) => {
			const fn = p.value.arguments[0];
			const args = p.value.arguments.slice(1);

			if (fn && fn.type === "Identifier") {
				return j.callExpression(fn, args);
			}

			return p.value;
		})
		.toSource();

	root
		.find(j.CallExpression)
		.filter((p) => {
			if (
				p.value.callee.type === "MemberExpression" &&
				p.value.callee.property.type === "Identifier"
			) {
				return /^__[0-9]$/.test(p.value.callee.property.name);
			}

			return false;
		})
		.replaceWith((p) => {
			const fn = p.value.arguments[0];

			if (fn && fn.type === "Identifier") {
				return fn;
			}

			return p.value;
		})
		.toSource();

	return root.toSource();
};

export default transform;
