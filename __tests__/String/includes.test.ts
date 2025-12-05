import { expectType } from "ts-expect";

import { A, S, pipe } from "../..";

describe("includes", () => {
	it("provides correct types", () => {
		expectType<boolean>(S.includes("hello", "ll"));
		expectType<ReadonlyArray<string>>(
			A.filter(["hello", "world"], S.includes("o")),
		);
	});

	it("returns true if searchValue appears anywhere in the given string", () => {
		expect(S.includes("hello", "o")).toEqual(true);
	});

	it("*", () => {
		expect(S.includes("hello", "ll")).toEqual(true);
	});
});

describe("includes (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe("hello", S.includes("o")));
		expectType<ReadonlyArray<string>>(
			pipe(["hello", "world"], A.filter(S.includes("o"))),
		);
	});

	it("returns true if searchValue appears anywhere in the given string", () => {
		expect(pipe("ts-belt", S.includes("*"))).toEqual(false);
	});

	it("*", () => {
		expect(pipe("world", S.includes("ll"))).toEqual(false);
	});
});
