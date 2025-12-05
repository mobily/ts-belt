import { expectType } from "ts-expect";

import { A, O, S, pipe } from "../..";

describe("get", () => {
	it("provides correct types", () => {
		expectType<O.Option<string>>(S.get("hello", 0));
		expectType<ReadonlyArray<O.Option<string>>>(
			A.map(["hello", "world"], S.get(1)),
		);
	});

	it("returns true if the given string starts with substr", () => {
		expect(S.get("hello", 1)).toEqual(O.Some("e"));
	});

	it("*", () => {
		const { Some } = O;
		expect(S.get("hello", 1)).toEqual(Some("e"));
	});
});

describe("get (pipe)", () => {
	it("provides correct types", () => {
		expectType<O.Option<string>>(pipe("hello", S.get(1)));
		expectType<ReadonlyArray<O.Option<string>>>(
			pipe(["hello", "world"], A.map(S.get(1))),
		);
	});

	it("returns true if the given string ends with substr", () => {
		expect(pipe("ts-belt", S.get(1))).toEqual(O.Some("s"));
	});

	it("*", () => {
		const { None } = O;
		expect(pipe("ts-belt", S.get(9))).toEqual(None);
	});
});
