import type { API, FileInfo } from "jscodeshift";

const transform = (file: FileInfo, api: API) => {
	const j = api.jscodeshift;
	const root = j(file.source);

	// b.hasOwnProperty(key) to Object.prototype.hasOwnProperty.call(b, key)
	root
		.find(j.CallExpression, {
			callee: {
				property: {
					type: "Identifier",
					name: "hasOwnProperty",
				},
			},
		})
		.replaceWith((p) => {
			if (p.value.callee.type === "MemberExpression") {
				const [arg] = p.value.arguments;
				const obj = p.value.callee.object;

				return j.callExpression(
					j.memberExpression(
						j.memberExpression(
							j.memberExpression(
								j.identifier("Object"),
								j.identifier("prototype"),
							),
							j.identifier("hasOwnProperty"),
						),
						j.identifier("call"),
					),
					[obj, arg],
				);
			}

			return p.value;
		});

	return root.toSource();
};

export default transform;
