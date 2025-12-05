import { expectType } from "ts-expect";

import { S } from "../..";

describe("trimEnd", () => {
	it("provides correct types", () => {
		expectType<string>(S.trim("text"));
	});

	it("returns a new string with trailing whitespace removed from string", () => {
		expect(S.trimEnd("  text  ")).toEqual("  text");
	});

	it("*", () => {
		expect(S.trimEnd("  text  ")).toEqual("  text");
	});
});
