import { expectType } from "ts-expect";

import { S, pipe } from "../..";

describe("isEmpty", () => {
	it("provides correct types", () => {
		expectType<boolean>(S.isEmpty("hello"));
	});

	it("returns `true` if the given string is empty", () => {
		expect(S.isEmpty("")).toEqual(true);
	});

	it("returns `false` if the given string is not empty", () => {
		expect(S.isEmpty("hello")).toEqual(false);
	});

	it("*", () => {
		expect(S.isEmpty("hello world")).toEqual(false);
		expect(S.isEmpty("")).toEqual(true);
	});
});

describe("isEmpty (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe("hello", S.isEmpty));
	});

	it("returns `true` if the given string is empty", () => {
		expect(pipe("", S.isEmpty)).toEqual(true);
	});

	it("returns `false` if the given string is not empty", () => {
		expect(pipe("ts-belt", S.isEmpty)).toEqual(false);
	});

	it("*", () => {
		expect(pipe("ts-belt", S.isEmpty)).toEqual(false);
	});
});
