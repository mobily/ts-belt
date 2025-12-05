import { expectType } from "ts-expect";

import { F, pipe } from "../..";

describe("throttle", () => {
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
		expectType<(arg0: number, arg1: string) => void>(F.throttle(listener, 500));
	});

	it("calls a function once", () => {
		const spy = jest.fn();
		const fn = F.throttle(spy, 1000);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

		expect(spy).toBeCalledTimes(1);
	});

	it("calls a function twice", () => {
		const spy = jest.fn();
		const fn = F.throttle(spy, 500);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

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
		const fn = F.throttle(listener, 500);

		fn(1, "2");
		expect(a).toEqual(1);
		expect(b).toEqual("2");
		jest.advanceTimersByTime(400);

		fn(2, "3");
		expect(a).toEqual(1);
		expect(b).toEqual("2");

		jest.advanceTimersByTime(300);

		fn(3, "4");
		expect(a).toEqual(3);
		expect(b).toEqual("4");
		expect(spy).toBeCalledTimes(2);
	});
});

describe("throttle (pipe)", () => {
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
			pipe(listener, F.throttle(500)),
		);
	});

	it("calls a function once", () => {
		const spy = jest.fn();
		const fn = F.throttle(spy, 1000);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

		fn();
		jest.advanceTimersByTime(200);

		expect(spy).toBeCalledTimes(1);
	});
});
