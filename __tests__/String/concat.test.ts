import { expectType } from "ts-expect";

import { A, S, pipe } from "../..";

describe("concat", () => {
	it("provides correct types", () => {
		expectType<string>(S.concat("hello", "world"));
		expectType<string>(A.reduce(["hello", "world"], "", S.concat));
	});

	it("returns a new string with append added after str", () => {
		expect(S.concat("hello", "world")).toEqual("helloworld");
	});

	it("*", () => {
		expect(S.concat("hello", "world")).toEqual("helloworld");
	});
});

describe("concat (pipe)", () => {
	it("provides correct types", () => {
		expectType<string>(pipe("hello", S.concat("world")));
		expectType<string>(pipe(["hello", "world"], A.reduce("", S.concat)));
	});

	it("returns a new string with append added after str", () => {
		expect(pipe("hello", S.concat("world"))).toEqual("helloworld");
	});

	it("*", () => {
		expect(pipe("ts", S.concat("belt"))).toEqual("tsbelt");
	});
});
