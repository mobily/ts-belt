import { expectType } from "ts-expect";

import { S, pipe } from "../..";

describe("length", () => {
	it("provides correct types", () => {
		expectType<number>(S.length("ts-belt"));
	});

	it("returns the correct size of the given string", () => {
		expect(S.length("hello")).toEqual(5);
		expect(S.length("")).toEqual(0);
	});

	it("*", () => {
		expect(S.length("hello")).toEqual(5);
	});
});

describe("length (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe("hello", S.length));
	});

	it("returns the correct size of the given string", () => {
		expect(pipe("hello", S.length)).toEqual(5);
		expect(pipe("", S.length)).toEqual(0);
	});

	it("*", () => {
		expect(pipe("ts-belt", S.length)).toEqual(7);
	});
});
