import { expectType } from "ts-expect";

import { A, S, pipe } from "../..";

describe("remove", () => {
	it("provides correct types", () => {
		expectType<string>(S.remove("hello", "h"));
		expectType<ReadonlyArray<string>>(A.map(["hello", "world"], S.remove("o")));
	});

	it("returns true if the given string starts with substr", () => {
		expect(S.remove("hello", "o")).toEqual("hell");
	});

	it("*", () => {
		expect(S.remove("hello", "l")).toEqual("helo");
	});
});

describe("remove (pipe)", () => {
	it("provides correct types", () => {
		expectType<string>(pipe("hello", S.remove("h")));
		expectType<ReadonlyArray<string>>(
			pipe(["hello", "world"], A.map(S.remove("h"))),
		);
	});

	it("returns true if the given string ends with substr", () => {
		expect(pipe("ts-belt", S.remove("ts"))).toEqual("-belt");
	});

	it("*", () => {
		expect(pipe("ts-belt", S.remove("ts-"))).toEqual("belt");
	});
});
