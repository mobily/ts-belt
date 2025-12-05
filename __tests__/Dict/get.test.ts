import { expectType } from "ts-expect";

import { A, D, O, pipe } from "../..";

const obj = {
	x: 1,
	y: 2,
	z: "three",
};

describe("get", () => {
	it("provides correct types", () => {
		expectType<O.Option<number>>(D.get(obj, "x"));
		expectType<O.Option<string>>(D.get(obj, "z"));
		expectType<ReadonlyArray<O.Option<string>>>(A.map([obj, obj], D.get("z")));
	});

	it("returns the value of the given property", () => {
		expect(D.get(obj, "x")).toEqual(O.Some(1));
	});

	it("*", () => {
		const { Some } = O;

		expect(D.get({ name: "Joe", location: "Warsaw" }, "location")).toEqual(
			Some("Warsaw"),
		);
	});
});

describe("get (pipe)", () => {
	it("provides correct types", () => {
		expectType<O.Option<number>>(pipe(obj, D.get("x")));
		expectType<O.Option<string>>(pipe(obj, D.get("z")));
	});

	it("returns the value of the given property", () => {
		expect(pipe(obj, D.get("x"))).toEqual(O.Some(1));
	});

	it("*", () => {
		const { Some, None } = O;
		expect(
			pipe({ name: "Joe", location: "Warsaw" }, D.get("location")),
		).toEqual(Some("Warsaw"));
		expect(
			pipe([{ name: "Joe" }, { location: "Warsaw" }], A.map(D.get("name"))),
		).toEqual([Some("Joe"), None]);
	});
});
