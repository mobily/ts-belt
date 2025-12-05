import { expectType } from "ts-expect";

import { A, S, pipe } from "../..";

describe("prepend", () => {
	it("provides correct types", () => {
		expectType<string>(S.prepend("hello", "world"));
		expectType<string>(A.reduce(["hello", "world"], "", S.prepend));
	});

	it("returns a new string with append added after str", () => {
		expect(S.prepend("hello", "world")).toEqual("worldhello");
	});

	it("*", () => {
		expect(S.prepend("hello", "world")).toEqual("worldhello");
	});
});

describe("prepend (pipe)", () => {
	it("provides correct types", () => {
		expectType<string>(pipe("hello", S.prepend("world")));
		expectType<string>(pipe(["hello", "world"], A.reduce("", S.prepend)));
	});

	it("returns a new string with append added after str", () => {
		expect(pipe("hello", S.prepend("world"))).toEqual("worldhello");
	});

	it("*", () => {
		expect(pipe("ts", S.prepend("belt"))).toEqual("beltts");
	});
});
