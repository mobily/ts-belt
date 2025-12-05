module.exports = {
	pipe:
		(...fns) =>
		(arg) =>
			fns.reduce((arg, fn) => fn(arg), arg),
	find: (closure) => (array) => array.find(closure),
	map: (closure) => (array) => array.map(closure),
	filter: (closure) => (array) => array.filter(closure),
	flat: (array) => array.flat(),
	deepFlat: (array) => array.flat(Number.POSITIVE_INFINITY),
	forEach: (closure) => (array) => array.forEach(closure),
	fromEntries: (entries) => Object.fromEntries(entries),
	entries: (object) => Object.entries(object),
	reduce: (closure, init) => (array) => array.reduce(closure, init),
	safeSort: (closure) => (array) => [...array].sort(closure),
};
