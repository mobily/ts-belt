import { expectType } from "ts-expect";

import { D, pipe } from "../..";

const obj = { x: 123, y: "abc", z: false };

const rec: Record<string, number> = { a: 1, b: 2, c: 3 };

describe("deleteKey", () => {
	it("provides correct types", () => {
		expectType<Omit<typeof obj, "x">>(D.deleteKey(obj, "x"));
		expectType<typeof rec>(D.deleteKey(rec, "a"));
		expectType<typeof rec>(D.deleteKey(rec, "z"));
	});

	it("deletes the right keyss", () => {
		expect(D.deleteKey(obj, "x")).toEqual({ y: "abc", z: false });
		expect(D.deleteKey(rec, "a")).toEqual({ b: 2, c: 3 });
		expect(D.deleteKey(rec, "z")).toEqual(rec);
	});

	it("*", () => {
		expect(
			D.deleteKey({ name: "Joe", location: "Warsaw" }, "location"),
		).toEqual({ name: "Joe" });
	});
});

describe("deleteKey (pipe)", () => {
	it("provides correct types", () => {
		expectType<Omit<typeof obj, "x">>(pipe(obj, D.deleteKey("x")));
		expectType<typeof rec>(pipe(rec, D.deleteKey("a")));
		expectType<typeof rec>(pipe(rec, D.deleteKey("z")));
	});

	it("deletes the right keys", () => {
		expect(pipe(obj, D.deleteKey("x"))).toEqual({ y: "abc", z: false });
		expect(pipe(rec, D.deleteKey("a"))).toEqual({ b: 2, c: 3 });
		expect(pipe(rec, D.deleteKey("z"))).toEqual(rec);
	});

	it("*", () => {
		expect(
			pipe({ name: "Joe", location: "Warsaw" }, D.deleteKey("location")),
		).toEqual({ name: "Joe" });
	});
});
