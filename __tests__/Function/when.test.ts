import { expectType } from "ts-expect";

import { F, pipe } from "../..";

describe("when", () => {
	it("provides correct types", () => {
		expectType<string | number>(
			F.when(
				1,
				(value) => value > 1,
				(_) => "oops",
			),
		);
		expectType<string>(
			F.when(
				"ts",
				(value) => value.length > 1,
				(value) => `${value}-belt`,
			),
		);
	});

	it("returns a correct value when the predicate function isn't satisfied", () => {
		expect(
			F.when(
				1,
				(value) => value > 1,
				(_) => "oops",
			),
		).toEqual(1);
	});

	it("returns a correct value when the predicate function is satisfied", () => {
		expect(
			F.when(
				"ts",
				(value) => value.length > 1,
				(value) => `${value}-belt`,
			),
		).toEqual("ts-belt");
	});

	it("*", () => {
		expect(
			F.when(
				"ts",
				(value) => value.length > 1,
				(value) => `${value}-belt`,
			),
		).toEqual("ts-belt");
	});
});

describe("when (pipe)", () => {
	it("provides correct types", () => {
		expectType<string | number>(
			pipe(
				1,
				F.when(
					(value) => value > 1,
					(_) => "oops",
				),
			),
		);
		expectType<string>(
			pipe(
				"ts",
				F.when(
					(value) => value.length > 1,
					(value) => `${value}-belt`,
				),
			),
		);
	});

	it("returns a default value", () => {
		expect(
			pipe(
				"ts",
				F.when(
					(value) => value.length > 1,
					(value) => `${value}-belt`,
				),
			),
		).toEqual("ts-belt");
	});

	it("*", () => {
		expect(
			pipe(
				"ts",
				F.when(
					(value) => value.length > 2,
					(value) => `${value}-belt`,
				),
			),
		).toEqual("ts");
	});
});
