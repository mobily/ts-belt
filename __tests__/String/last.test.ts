import { expectType } from "ts-expect";

import { O, S } from "../..";

describe("last", () => {
	it("provides correct types", () => {
		expectType<O.Option<string>>(S.last("text"));
	});

	it("returns None if the given string is empty", () => {
		expect(S.last("")).toEqual(O.None);
	});

	it("returns Some(value) where value is the last character of the string", () => {
		expect(S.last("random-text")).toEqual(O.Some("t"));
	});

	it("*", () => {
		const { Some } = O;
		expect(S.last("random-text")).toEqual(Some("t"));
	});
});
