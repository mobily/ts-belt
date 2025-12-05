import { expectType } from "ts-expect";

import { F, N } from "../..";

const fn = (n: number) => {
	return `called ${n} times`;
};

const fn2 = (n: number, x: string) => {
	return `called ${n} times with ${x}`;
};

describe("before", () => {
	it("provides correct types", () => {
		expectType<(n: number) => string>(F.before(2, fn));
		expectType<(n: number, x: string) => string>(F.before(2, fn2));
		expectType<(n: number) => number>(F.before(2, N.add(2)));
	});

	it("handles multiple parameters", () => {
		let calls = 0;

		const addTwoNumbers = (x: number, y: number) => {
			calls = calls + 1;
			return x + y;
		};
		const add = F.before(2, addTwoNumbers);

		expect(add(2, 2)).toEqual(4);
		expect(add(4, 4)).toEqual(8);
		expect(add(8, 8)).toEqual(8);
		expect(calls).toEqual(2);
	});

	it("*", () => {
		const addOne = F.before(2, N.add(1));

		expect(
			/*
      const addOne = F.before(2, N.add(1))
      */
			addOne(3),
		).toEqual(4);
		expect(addOne(6)).toEqual(7);
		expect(addOne(12)).toEqual(7);
	});
});
