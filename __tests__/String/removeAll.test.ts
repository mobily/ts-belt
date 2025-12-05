import { expectType } from "ts-expect";

import { A, S, pipe } from "../..";

describe("removeAll", () => {
	it("provides correct types", () => {
		expectType<string>(S.removeAll("hello", "h"));
		expectType<ReadonlyArray<string>>(
			A.map(["hello", "world"], S.removeAll("o")),
		);
	});

	it("returns true if the given string starts with substr", () => {
		expect(S.removeAll("hello", "o")).toEqual("hell");
	});

	it("*", () => {
		expect(S.removeAll("hello", "l")).toEqual("heo");
	});
});

describe("removeAll (pipe)", () => {
	it("provides correct types", () => {
		expectType<string>(pipe("hello", S.removeAll("h")));
		expectType<ReadonlyArray<string>>(
			pipe(["hello", "world"], A.map(S.removeAll("h"))),
		);
	});

	it("returns true if the given string ends with substr", () => {
		expect(pipe("hello world", S.removeAll("o"))).toEqual("hell wrld");
	});

	it("*", () => {
		expect(pipe("hXellXo wXXorXXld", S.removeAll("X"))).toEqual("hello world");
	});
});
