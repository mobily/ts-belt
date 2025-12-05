import { expectType } from "ts-expect";

import { O, S } from "../..";

describe("head", () => {
	it("provides correct types", () => {
		expectType<O.Option<string>>(S.head("text"));
	});

	it("returns None if the given string is empty", () => {
		expect(S.head("")).toEqual(O.None);
	});

	it("Returns Some(value) where value is the first character of the string", () => {
		expect(S.head("random-text")).toEqual(O.Some("r"));
	});

	it("*", () => {
		const { Some } = O;
		expect(S.head("random-text")).toEqual(Some("r"));
	});
});
