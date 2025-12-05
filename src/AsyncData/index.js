export * from "./AsyncData.bs.js";

export const Init = 0;
export const Loading = 1;

export const Reloading = (value) => {
	return {
		TAG: 0,
		_0: value,
	};
};

export const Complete = (value) => {
	return {
		TAG: 1,
		_0: value,
	};
};
