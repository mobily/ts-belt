import { expectType } from "ts-expect";

import { F, pipe } from "../..";

describe("debounce", () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it("provides correct types", () => {
		const listener = (_a: number, _b: string) => {
			//
		};
		expectType<(arg0: number, arg1: string) => void>(F.debounce(listener, 500));
	});

	it("calls a function once", () => {
		const spy = jest.fn();
		const fn = F.debounce(spy, 500);

		fn();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);
		fn();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(500);

		expect(spy).toBeCalledTimes(1);
	});

	it("calls a function twice", () => {
		const spy = jest.fn();
		const fn = F.debounce(spy, 500);

		fn();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(100);

		fn();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(500);
		fn();
		jest.advanceTimersByTime(1000);

		expect(spy).toBeCalledTimes(2);
	});

	it("passes arguments correctly", () => {
		let a: number | undefined = undefined;
		let b: string | undefined = undefined;

		const spy = jest.fn();

		const listener = (arg0: number, arg1: string) => {
			spy();
			a = arg0;
			b = arg1;
		};
		const fn = F.debounce(listener, 500);

		fn(1, "2");
		expect(a).toEqual(undefined);
		expect(b).toEqual(undefined);
		jest.advanceTimersByTime(200);

		fn(2, "3");
		expect(a).toEqual(undefined);
		expect(b).toEqual(undefined);

		jest.advanceTimersByTime(200);

		fn(3, "4");
		jest.advanceTimersByTime(500);

		expect(a).toEqual(3);
		expect(b).toEqual("4");
		expect(spy).toBeCalledTimes(1);
	});
});

describe("debounce (pipe)", () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	it("provides correct types", () => {
		const listener = (_a: number, _b: string) => {
			//
		};
		expectType<(arg0: number, arg1: string) => void>(
			pipe(listener, F.debounce(500)),
		);
	});

	it("calls a function once", () => {
		const spy = jest.fn();
		const fn = pipe(spy, F.debounce(500));

		fn();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);

		fn();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(500);

		expect(spy).toBeCalledTimes(1);
	});
});
