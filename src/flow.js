export function flow() {
	const fns = arguments;

	return () => {
		let x = fns[0].apply(null, arguments);

		for (let i = 1, l = fns.length; i < l; i++) {
			x = fns[i](x);
		}

		return x;
	};
}
