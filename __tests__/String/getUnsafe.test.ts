import { expectType } from "ts-expect";

import { A, S, pipe } from "../..";

describe("getUnsafe", () => {
	it("provides correct types", () => {
		expectType<string>(S.getUnsafe("hello", 0));
		expectType<ReadonlyArray<string>>(
			A.map(["hello", "world"], S.getUnsafe(1)),
		);
	});

	it("returns the nth element of the given string", () => {
		expect(S.getUnsafe("hello", 1)).toEqual("e");
	});

	it("*", () => {
		expect(S.getUnsafe("hello", 1)).toEqual("e");
	});
});

describe("getUnsafe (pipe)", () => {
	it("provides correct types", () => {
		expectType<string>(pipe("hello", S.getUnsafe(1)));
		expectType<ReadonlyArray<string>>(
			pipe(["hello", "world"], A.map(S.getUnsafe(1))),
		);
	});

	it("returns the nth element of the given string", () => {
		expect(pipe("ts-belt", S.getUnsafe(1))).toEqual("s");
	});

	it("*", () => {
		expect(pipe("world", S.getUnsafe(1))).toEqual("o");
	});
});
