import { expectType } from "ts-expect";

import { A, pipe } from "../..";

describe("any", () => {
	it("provides correct types", () => {
		expectType<boolean>(
			A.any(["", "hello", "world"], (value) => value.length > 0),
		);
	});

	it("*", () => {
		expect(A.any(["", "hello", "world"], (value) => value.length > 0)).toEqual(
			true,
		);
	});
});

describe("any (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(
			pipe(
				[1, 2, 3, 4, 5],
				A.any((value) => value > 3),
			),
		);
	});

	it("*", () => {
		expect(
			pipe(
				[1, 2, 3, 4, 5],
				A.any((value) => value > 5),
			),
		).toEqual(false);
	});
});
