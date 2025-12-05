import { expectType } from "ts-expect";

import { A, D, pipe } from "../..";

describe("flip", () => {
	it("provides correct types", () => {
		expectType<readonly [number, number]>(A.flip([1, 2]));
	});

	it("returns a new tuple with the reverse order of the elements", () => {
		expect(A.flip([1, 2])).toEqual([2, 1]);
	});

	it("*", () => {
		expect(A.flip([1, 2])).toEqual([2, 1]);
	});
});

describe("flip (pipe)", () => {
	it("provides correct types", () => {
		expectType<readonly [number, number]>(pipe(A.toTuple([1, 2]), A.flip));

		expectType<Record<string, string>>(
			pipe(
				{ name: "Joe", location: "Warsaw" },
				D.toPairs,
				A.map(A.flip),
				D.fromPairs,
			),
		);
	});

	it("returns a new tuple with the reverse order of the elements", () => {
		const result = pipe(A.toTuple([1, 2]), A.flip);
		expect(result).toEqual([2, 1]);
	});

	it("*", () => {
		expect(
			pipe(
				{ name: "Joe", location: "Warsaw" },
				D.toPairs,
				A.map(A.flip),
				D.fromPairs,
			),
		).toEqual({ Joe: "name", Warsaw: "location" });
	});
});
