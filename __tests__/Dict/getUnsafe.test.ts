import { expectType } from "ts-expect";

import { A, D, pipe } from "../..";

const obj = {
	x: 1,
	y: 2,
	z: "three",
};

describe("getUnsafe", () => {
	it("provides correct types", () => {
		expectType<number>(D.getUnsafe(obj, "x"));
		expectType<string>(D.getUnsafe(obj, "z"));
		expectType<ReadonlyArray<string>>(A.map([obj, obj], D.getUnsafe("z")));
	});

	it("returns the value of the given property", () => {
		expect(D.getUnsafe(obj, "x")).toEqual(1);
	});

	it("*", () => {
		expect(
			D.getUnsafe({ name: "Joe", location: "Warsaw" }, "location"),
		).toEqual("Warsaw");
	});
});

describe("getUnsafe (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(obj, D.getUnsafe("x")));
		expectType<string>(pipe(obj, D.getUnsafe("z")));
	});

	it("returns the value of the given property", () => {
		expect(pipe(obj, D.getUnsafe("x"))).toEqual(1);
	});

	it("*", () => {
		expect(
			pipe({ name: "Joe", location: "Warsaw" }, D.getUnsafe("location")),
		).toEqual("Warsaw");
		expect(
			pipe(
				[{ name: "Joe" }, { location: "Warsaw" }],
				A.map(D.getUnsafe("name")),
			),
		).toEqual(["Joe", undefined]);
	});
});
