import { expectType } from "ts-expect";

import { F, pipe } from "../..";

describe("makeControlledDebounce", () => {
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
		expectType<F.Controlled<[number, string]>>(
			F.makeControlledDebounce(listener, {
				delay: 500,
				leading: false,
			}),
		);
	});

	it("calls a function once (if leading is set to false)", () => {
		const spy = jest.fn();
		const fn = F.makeControlledDebounce(spy, {
			delay: 500,
			leading: false,
		});

		fn.schedule();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);
		fn.schedule();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);

		fn.schedule();
		jest.advanceTimersByTime(500);

		expect(spy).toBeCalledTimes(1);
	});

	it("calls a function twice (if leading is set to true)", () => {
		const spy = jest.fn();
		const fn = F.makeControlledDebounce(spy, {
			delay: 500,
			leading: true,
		});

		fn.schedule();
		expect(spy).toBeCalledTimes(1);
		jest.advanceTimersByTime(200);

		fn.schedule();
		expect(spy).toBeCalledTimes(1);
		jest.advanceTimersByTime(200);

		fn.schedule();
		jest.advanceTimersByTime(500);

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
		const fn = F.makeControlledDebounce(listener, {
			delay: 500,
			leading: false,
		});

		fn.schedule(1, "2");
		expect(a).toEqual(undefined);
		expect(b).toEqual(undefined);
		jest.advanceTimersByTime(200);

		fn.schedule(2, "3");
		expect(a).toEqual(undefined);
		expect(b).toEqual(undefined);

		jest.advanceTimersByTime(200);

		fn.schedule(3, "4");
		jest.advanceTimersByTime(500);

		expect(a).toEqual(3);
		expect(b).toEqual("4");

		fn.invoke(4, "5");

		expect(a).toEqual(4);
		expect(b).toEqual("5");

		expect(spy).toBeCalledTimes(2);
	});

	it("invokes on demand", () => {
		const spy = jest.fn();
		const fn = F.makeControlledDebounce(spy, {
			delay: 500,
			leading: false,
		});

		fn.invoke();
		fn.schedule();
		jest.advanceTimersByTime(300);
		fn.invoke();
		fn.schedule();
		jest.advanceTimersByTime(500);

		expect(spy).toBeCalledTimes(3);
	});

	it("cancels the schedule function", () => {
		const spy = jest.fn();
		const fn = F.makeControlledDebounce(spy, {
			delay: 500,
			leading: false,
		});

		fn.schedule();
		fn.cancel();
		jest.advanceTimersByTime(500);

		expect(spy).not.toBeCalled();
	});

	it("determines if the function is scheduled", () => {
		const spy = jest.fn();
		const fn = F.makeControlledDebounce(spy, {
			delay: 500,
			leading: false,
		});

		fn.schedule();
		expect(fn.isScheduled()).toEqual(true);
		fn.cancel();
		expect(fn.isScheduled()).toEqual(false);
		jest.advanceTimersByTime(500);

		expect(spy).not.toBeCalled();
	});
});

describe("makeControlledDebounce (pipe)", () => {
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
		expectType<F.Controlled<[number, string]>>(
			pipe(listener, F.makeControlledDebounce({ delay: 500, leading: false })),
		);
	});

	it("calls a function once", () => {
		const spy = jest.fn();
		const fn = pipe(
			spy,
			F.makeControlledDebounce({ delay: 500, leading: false }),
		);

		fn.schedule();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);

		fn.schedule();
		expect(spy).not.toBeCalled();
		jest.advanceTimersByTime(200);

		fn.schedule();
		jest.advanceTimersByTime(500);

		expect(spy).toBeCalledTimes(1);
	});
});
