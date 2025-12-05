import { expectType } from "ts-expect";

import { A, S, pipe } from "../..";

const xs = [1, 2, 3, 4, 5, 6, 7]
const ys = [1, 2, 3, 4, 3, 2, 1]

// TODO: expectType
describe("dropWhile", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string>>(
			A.dropWhile(["hello", "world"], S.endsWith("o")),
		);
	});

	it("drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate", () => {
		expect(A.dropWhile(xs, (x) => x < 4)).toEqual([4, 5, 6, 7]);
		expect(A.dropWhile([1, 3, 5, 7, 9], (x) => x < 5)).toEqual([5, 7, 9]);
	});

	it("returns correct array elements if either true or false", () => {
		expect(A.dropWhile(xs, (_x) => true)).toEqual([]);
		expect(A.dropWhile(xs, (_x) => false)).toEqual([1, 2, 3, 4, 5, 6, 7]);
	});
});

describe('dropWhile (pipe)', () => {
  it('drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate', () => {
    const result = pipe(
      xs,
      A.dropWhile(x => x < 4),
    )
    expect(result).toEqual([4, 5, 6, 7])
    expect(A.dropWhile(ys,x=>x<=3)).toEqual([4, 3, 2, 1])
  })
})
