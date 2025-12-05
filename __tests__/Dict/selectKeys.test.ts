import { expectType } from "ts-expect";

import { D, pipe } from "../..";

const obj = { x: 123, y: "abc", z: false };

const rec: Record<string, number> = { a: 1, b: 2, c: 3 };

describe("selectKeys", () => {
	it("provides correct types", () => {
		const keys = ["x", "y"] as const;

		expectType<Pick<typeof obj, "x" | "y">>(D.selectKeys(obj, ["x", "y"]));
		expectType<typeof rec>(D.selectKeys(rec, ["a", "b"]));
		expectType<typeof rec>(D.selectKeys(rec, ["y", "z"]));
		expectType<typeof rec>(D.selectKeys(rec, keys));
	});

	it("selects the right keys", () => {
		expect(D.selectKeys(obj, ["x", "y"])).toEqual({ x: 123, y: "abc" });
		expect(D.selectKeys(rec, ["a", "b"])).toEqual({ a: 1, b: 2 });
		expect(D.selectKeys(rec, ["y", "z"])).toEqual({});
	});

	it("*", () => {
		expect(
			D.selectKeys({ name: "Joe", location: "Warsaw", age: 42 }, [
				"name",
				"age",
			]),
		).toEqual({ name: "Joe", age: 42 });

		const obj: Record<string, string> = { name: "Joe", location: "Warsaw" };
		expect(
			// ⬇️ const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }
			D.selectKeys(obj, ["name", "age"]),
		).toEqual({ name: "Joe" });
	});
});

describe("selectKeys (pipe)", () => {
	it("provides correct types", () => {
		expectType<Pick<typeof obj, "x" | "y">>(
			pipe(obj, D.selectKeys(["x", "y"])),
		);
		expectType<typeof rec>(pipe(rec, D.selectKeys(["a", "b"])));
		expectType<typeof rec>(pipe(rec, D.selectKeys(["y", "z"])));
	});

	it("selects the right keys", () => {
		expect(pipe(obj, D.selectKeys(["x", "y"]))).toEqual({ x: 123, y: "abc" });
		expect(pipe(rec, D.selectKeys(["a", "b"]))).toEqual({ a: 1, b: 2 });
		expect(pipe(rec, D.selectKeys(["y", "z"]))).toEqual({});
	});

	it("*", () => {
		expect(
			pipe(
				{ name: "Joe", location: "Warsaw", age: 42 },
				D.selectKeys(["name", "age"]),
			),
		).toEqual({ name: "Joe", age: 42 });

		const obj: Record<string, string> = { name: "Joe", location: "Warsaw" };
		expect(
			// ⬇️ const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }
			pipe(obj, D.selectKeys(["name", "age"])),
		).toEqual({ name: "Joe" });
	});
});
