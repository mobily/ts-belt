import { expectType } from "ts-expect";

import { F, pipe } from "../..";

describe("makeControlledThrottle", () => {
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
			F.makeControlledThrottle(listener, {
				delay: 500,
				leading: false,
			}),
		);
	});

	it("calls a function once (if leading is set to false)", () => {
		const spy = jest.fn();
		const fn = F.makeControlledThrottle(spy, {
			delay: 1000,
			leading: false,
		});

		fn.schedule();
		jest.advanceTimersByTime(200);

		fn.schedule();
		jest.advanceTimersByTime(200);

		fn.schedule();
		jest.advanceTimersByTime(200);

		expect(spy).toBeCalledTimes(1);
	});

	it("calls a function twice (if leading is set to true)", () => {
		const spy = jest.fn();
		const fn = F.makeControlledThrottle(spy, {
			delay: 500,
			leading: true,
		});

		fn.schedule();
		expect(spy).toBeCalledTimes(1);

		fn.schedule();
		expect(spy).toBeCalledTimes(2);
		jest.advanceTimersByTime(200);

		fn.schedule();
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
		const fn = F.makeControlledThrottle(listener, {
			delay: 500,
			leading: false,
		});

		fn.schedule(1, "2");
		expect(a).toEqual(1);
		expect(b).toEqual("2");
		jest.advanceTimersByTime(400);

		fn.schedule(2, "3");
		expect(a).toEqual(1);
		expect(b).toEqual("2");

		jest.advanceTimersByTime(300);

		fn.schedule(3, "4");
		expect(a).toEqual(3);
		expect(b).toEqual("4");

		fn.invoke(4, "5");
		expect(a).toEqual(4);
		expect(b).toEqual("5");

		expect(spy).toBeCalledTimes(3);
	});

	it("invokes on demand", () => {
		const spy = jest.fn();
		const fn = F.makeControlledThrottle(spy, {
			delay: 500,
			leading: false,
		});

		fn.schedule();
		fn.invoke();
		jest.advanceTimersByTime(300);
		fn.invoke();
		jest.advanceTimersByTime(500);

		expect(spy).toBeCalledTimes(3);
	});

	it("cancels the schedule function", () => {
		const spy = jest.fn();
		const fn = F.makeControlledThrottle(spy, {
			delay: 500,
			leading: false,
		});

		fn.schedule();
		fn.schedule();
		fn.cancel();
		jest.advanceTimersByTime(600);

		expect(spy).toBeCalledTimes(1);
	});

	it("determines if the function is scheduled", () => {
		const spy = jest.fn();
		const fn = F.makeControlledThrottle(spy, {
			delay: 500,
			leading: false,
		});

		fn.schedule();
		expect(fn.isScheduled()).toEqual(true);
		jest.advanceTimersByTime(600);
		fn.cancel();

		expect(fn.isScheduled()).toEqual(false);
		expect(spy).toBeCalledTimes(1);
	});
});

describe("makeControlledThrottle (pipe)", () => {
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
			pipe(listener, F.makeControlledThrottle({ delay: 500, leading: false })),
		);
	});

	it("calls a function once", () => {
		const spy = jest.fn();
		const fn = pipe(
			spy,
			F.makeControlledThrottle({ delay: 1000, leading: false }),
		);

		fn.schedule();
		jest.advanceTimersByTime(200);

		fn.schedule();
		jest.advanceTimersByTime(200);

		fn.schedule();
		jest.advanceTimersByTime(200);

		expect(spy).toBeCalledTimes(1);
	});
});
