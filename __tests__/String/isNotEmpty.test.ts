import { expectType } from "ts-expect";

import { S, pipe } from "../..";

describe("isNotEmpty", () => {
	it("provides correct types", () => {
		expectType<boolean>(S.isNotEmpty("hello"));
	});

	it("returns `true` if the given string is not empty", () => {
		expect(S.isNotEmpty("hello")).toEqual(true);
	});

	it("returns `false` if the given string is empty", () => {
		expect(S.isNotEmpty("")).toEqual(false);
	});

	it("*", () => {
		expect(S.isNotEmpty("hello world")).toEqual(true);
		expect(S.isNotEmpty("")).toEqual(false);
	});
});

describe("isNotEmpty (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe("hello", S.isNotEmpty));
	});

	it("returns `true` if the given string is not empty", () => {
		expect(pipe("ts-belt", S.isNotEmpty)).toEqual(true);
	});

	it("returns `false` if the given string is empty", () => {
		expect(pipe("", S.isNotEmpty)).toEqual(false);
	});

	it("*", () => {
		expect(pipe("ts-belt", S.isNotEmpty)).toEqual(true);
	});
});
