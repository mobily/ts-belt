import { expectType } from "ts-expect";

import { B, F, pipe } from "../..";

describe("eq", () => {
	it("provides correct types", () => {
		expectType<string>(
			B.ifElse(
				true,
				() => "ok",
				() => "nok",
			),
		);
	});

	it("folds a boolean value into a value of a different type", () => {
		expect(
			B.ifElse(
				true,
				() => "ok",
				() => "nok",
			),
		).toEqual("ok");
		expect(
			B.ifElse(
				false,
				() => "ok",
				() => "nok",
			),
		).toEqual("nok");
	});

	it("*", () => {
		expect(B.ifElse(true, F.always("ts"), F.always("belt"))).toEqual("ts");
	});
});

describe("eq (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(
			pipe(
				true,
				B.ifElse(
					() => 0,
					() => 1,
				),
			),
		);
	});

	it("folds a boolean value into a value of a different type", () => {
		expect(
			pipe(
				true,
				B.ifElse(
					() => 1,
					() => 0,
				),
			),
		).toEqual(1);
		expect(
			pipe(
				false,
				B.ifElse(
					() => 1,
					() => 0,
				),
			),
		).toEqual(0);
	});

	it("*", () => {
		expect(pipe(false, B.ifElse(F.always("ts"), F.always("belt")))).toEqual(
			"belt",
		);
	});
});
