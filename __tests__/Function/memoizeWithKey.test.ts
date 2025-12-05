import { expectType } from "ts-expect";

import { A, F, N, S } from "../..";

const fn = (n: number) => {
	return `called ${n} times`;
};

describe("memoizeWithKey", () => {
	it("provides correct types", () => {
		expectType<(n: number) => string>(F.memoizeWithKey(S.make, fn));
		expectType<(n: number) => number>(F.memoizeWithKey(S.make, N.add(2)));
	});

	it("*", () => {
		let calls = 0;
		const makeArray = F.memoizeWithKey(S.make, (value: number) => {
			calls = calls + 1;
			return A.makeWithIndex(value, (index) => index * 2);
		});

		expect(
			/*
      let calls = 0
      const makeArray = F.memoizeWithKey(S.make, (value: number) => {
        calls = calls + 1
        return A.makeWithIndex(value, index => index * 2)
      })
      */
			makeArray(4),
		).toEqual([0, 2, 4, 6]);
		expect(makeArray(4)).toEqual([0, 2, 4, 6]);
		expect(makeArray(4)).toEqual([0, 2, 4, 6]);
		expect(calls).toEqual(1);
	});
});
