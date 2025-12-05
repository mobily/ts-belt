import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("all", () => {
	it("provides correct types", () => {
		expectType<boolean>(A.all(["hello", "world"], (value) => value.length > 0));
	});

	it("*", () => {
		expect(A.all(["hello", "world"], (value) => value.length > 0)).toEqual(
			true,
		);
	});
});

describe("all (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(
			pipe(
				[1, 2, 3, 4, 5],
				A.all((value) => value > 0),
			),
		);
	});

	it("*", () => {
		expect(
			pipe(
				[1, 2, 3, 4, 5],
				A.all((value) => value > 3),
			),
		).toEqual(false);
	});
});
