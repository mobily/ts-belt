import { expectType } from "ts-expect";

import { A, O, S, pipe } from "../..";

describe("lastIndexOf", () => {
	it("provides correct types", () => {
		expectType<O.Option<number>>(S.lastIndexOf("hello", "l"));
		expectType<ReadonlyArray<number>>(
			A.keepMap(["hello", "world"], S.lastIndexOf("o")),
		);
	});

	it("returns an index correctly", () => {
		expect(S.lastIndexOf("hello", "l")).toEqual(O.Some(3));
		expect(S.lastIndexOf("world", "x")).toEqual(O.None);
	});

	it("*", () => {
		const { Some, None } = O;
		expect(S.lastIndexOf("ts,rescript", "s")).toEqual(Some(5));
		expect(S.lastIndexOf("ts,rescript", "x")).toEqual(None);
	});
});

describe("lastIndexOf (pipe)", () => {
	it("provides correct types", () => {
		expectType<O.Option<number>>(pipe("hello", S.lastIndexOf("l")));
		expectType<ReadonlyArray<O.Option<number>>>(
			pipe(["hello", "world"], A.map(S.lastIndexOf("l"))),
		);
	});

	it("returns an index correctly", () => {
		expect(pipe("hello", S.lastIndexOf("-"))).toEqual(O.None);
		expect(pipe("wooorld", S.lastIndexOf("o"))).toEqual(O.Some(3));
	});

	it("*", () => {
		expect(pipe(["hello", "ts"], A.keepMap(S.lastIndexOf("l")))).toEqual([3]);
	});
});
