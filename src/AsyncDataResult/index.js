export * from "./AsyncDataResult.bs.js";

export const Init = 0;
export const Loading = 1;

export const ReloadingOk = (value) => {
	return {
		TAG: 0,
		_0: {
			TAG: 0,
			_0: value,
		},
	};
};

export const ReloadingError = (value) => {
	return {
		TAG: 0,
		_0: {
			TAG: 1,
			_0: value,
		},
	};
};

export const CompleteOk = (value) => {
	return {
		TAG: 1,
		_0: {
			TAG: 0,
			_0: value,
		},
	};
};

export const CompleteError = (value) => {
	return {
		TAG: 1,
		_0: {
			TAG: 1,
			_0: value,
		},
	};
};
