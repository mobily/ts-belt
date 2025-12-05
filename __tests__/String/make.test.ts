import { expectType } from "ts-expect";

import { S, pipe } from "../..";

describe("make", () => {
	it("provides correct types", () => {
		expectType<string>(S.make("ts-belt"));
		expectType<string>(S.make([]));
		expectType<string>(S.make({}));
		expectType<string>(S.make(true));
	});

	it("converts the given value to a string", () => {
		expect(S.make([])).toEqual("");
		expect(S.make(["hello", "world"])).toEqual("hello,world");
		expect(S.make(1)).toEqual("1");
		expect(S.make({})).toEqual("[object Object]");
		expect(S.make(true)).toEqual("true");
		expect(S.make("ts-belt")).toEqual("ts-belt");
	});

	it("*", () => {
		expect(S.make(["hello", "world"])).toEqual("hello,world");
		expect(S.make(true)).toEqual("true");
	});
});

describe("make (pipe)", () => {
	it("provides correct types", () => {
		expectType<string>(pipe("ts-belt", S.make));
		expectType<string>(pipe([], S.make));
		expectType<string>(pipe({}, S.make));
		expectType<string>(pipe(true, S.make));
	});

	it("returns the correct size of the given string", () => {
		expect(pipe([], S.make)).toEqual("");
		expect(pipe(["hello", "world"], S.make)).toEqual("hello,world");
		expect(pipe(1, S.make)).toEqual("1");
		expect(pipe({}, S.make)).toEqual("[object Object]");
		expect(pipe(false, S.make)).toEqual("false");
		expect(pipe("ts-belt", S.make)).toEqual("ts-belt");
	});

	it("*", () => {
		expect(pipe({}, S.make)).toEqual("[object Object]");
		expect(pipe(100, S.make)).toEqual("100");
	});
});
