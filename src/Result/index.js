export * from "./Result.bs.js";

export const Ok = (value) => {
	return {
		TAG: 0,
		_0: value,
	};
};

export const Error = (value) => {
	return {
		TAG: 1,
		_0: value,
	};
};
