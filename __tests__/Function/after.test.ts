import { expectType } from "ts-expect";

import { F, N, O } from "../..";

const fn = (n: number) => {
	return `called ${n} times`;
};

const fn2 = (n: number, x: string) => {
	return `called ${n} times with ${x}`;
};

describe("after", () => {
	it("provides correct types", () => {
		expectType<(n: number) => O.Option<string>>(F.after(2, fn));
		expectType<(n: number, x: string) => string>(F.after(2, fn2));
		expectType<(n: number) => O.Option<number>>(F.after(2, N.add(2)));
	});

	it("handles multiple parameters", () => {
		let calls = 0;

		const addTwoNumbers = (x: number, y: number) => {
			calls = calls + 1;
			return x + y;
		};
		const add = F.after(2, addTwoNumbers);

		expect(add(2, 2)).toEqual(O.None);
		expect(add(4, 4)).toEqual(O.None);
		expect(add(8, 8)).toEqual(O.Some(16));
		expect(add(8, 16)).toEqual(O.Some(24));
		expect(calls).toEqual(2);
	});

	it("*", () => {
		const { Some, None } = O;
		const addTwo = F.after(2, N.add(2));

		expect(
			/*
      const addTwo = F.after(2, N.add(2))
      */
			addTwo(4),
		).toEqual(None);
		expect(addTwo(8)).toEqual(None);
		expect(addTwo(16)).toEqual(Some(18));
	});
});
