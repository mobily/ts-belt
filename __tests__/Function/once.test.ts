import { expectType } from "ts-expect";

import { F, N } from "../..";

const fn = (n: number) => {
	return `called ${n} times`;
};

const fn2 = (n: number, x: string) => {
	return `called ${n} times with ${x}`;
};

describe("once", () => {
	it("provides correct types", () => {
		expectType<(n: number) => string>(F.once(fn));
		expectType<(n: number, x: string) => string>(F.once(fn2));
		expectType<(n: number) => number>(F.once(N.add(2)));
	});

	it("handles multiple parameters", () => {
		let calls = 0;
		const addTwoNumbers = (x: number, y: number) => {
			calls = calls + 1;
			return x + y;
		};
		const add = F.once(addTwoNumbers);

		expect(add(2, 2)).toEqual(4);
		expect(add(4, 4)).toEqual(4);
		expect(add(8, 8)).toEqual(4);
		expect(calls).toEqual(1);
	});

	it("*", () => {
		const addTwoOnce = F.once(N.add(2));

		expect(
			/*
      const addTwoOnce = F.once(N.add(2))
      */
			addTwoOnce(4),
		).toEqual(6);
		expect(addTwoOnce(8)).toEqual(6);
		expect(addTwoOnce(16)).toEqual(6);
	});
});
