import { expectType } from "ts-expect";

import { A, O, S, pipe } from "../..";

describe("indexOf", () => {
	it("provides correct types", () => {
		expectType<O.Option<number>>(S.indexOf("hello", "l"));
		expectType<ReadonlyArray<number>>(
			A.keepMap(["hello", "world"], S.indexOf("o")),
		);
	});

	it("returns an index correctly", () => {
		expect(S.indexOf("hello", "e")).toEqual(O.Some(1));
		expect(S.indexOf("world", "x")).toEqual(O.None);
	});

	it("*", () => {
		const { Some } = O;
		expect(S.indexOf("hello", "e")).toEqual(Some(1));
	});
});

describe("indexOf (pipe)", () => {
	it("provides correct types", () => {
		expectType<O.Option<number>>(pipe("hello", S.indexOf("l")));
		expectType<ReadonlyArray<O.Option<number>>>(
			pipe(["hello", "world"], A.map(S.indexOf("l"))),
		);
	});

	it("returns an index correctly", () => {
		expect(pipe("ts-belt", S.indexOf("-"))).toEqual(O.Some(2));
		expect(pipe("ts-belt", S.indexOf("x"))).toEqual(O.None);
	});

	it("*", () => {
		expect(pipe(["hello", "world"], A.keepMap(S.indexOf("o")))).toEqual([4, 1]);
	});
});
