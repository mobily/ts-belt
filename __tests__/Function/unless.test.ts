import { expectType } from "ts-expect";

import { F, pipe } from "../..";

describe("unless", () => {
	it("provides correct types", () => {
		expectType<string | number>(
			F.unless(
				1,
				(value) => value > 0,
				(_) => "oops",
			),
		);
		expectType<string>(
			F.unless(
				"ts",
				(value) => value.length > 2,
				(value) => `${value}-belt`,
			),
		);
	});

	it("returns a correct value when the predicate function isn't satisfied", () => {
		expect(
			F.unless(
				1,
				(value) => value > 0,
				(_) => "oops",
			),
		).toEqual(1);
	});

	it("returns a correct value when the predicate function is satisfied", () => {
		expect(
			F.unless(
				"ts",
				(value) => value.length > 2,
				(value) => `${value}-belt`,
			),
		).toEqual("ts-belt");
	});

	it("*", () => {
		expect(
			F.unless(
				"ts",
				(value) => value.length > 2,
				(value) => `${value}-belt`,
			),
		).toEqual("ts-belt");
	});
});

describe("unless (pipe)", () => {
	it("provides correct types", () => {
		expectType<string | number>(
			pipe(
				1,
				F.unless(
					(value) => value > 0,
					(_) => "oops",
				),
			),
		);
		expectType<string>(
			pipe(
				"ts",
				F.unless(
					(value) => value.length > 2,
					(value) => `${value}-belt`,
				),
			),
		);
	});

	it("returns a correct value when the predicate function is satisfied", () => {
		expect(
			pipe(
				"ts",
				F.unless(
					(value) => value.length > 2,
					(value) => `${value}-belt`,
				),
			),
		).toEqual("ts-belt");
	});

	it("*", () => {
		expect(
			pipe(
				"ts",
				F.unless(
					(value) => value.length > 0,
					(value) => `${value}-belt`,
				),
			),
		).toEqual("ts");
	});
});
