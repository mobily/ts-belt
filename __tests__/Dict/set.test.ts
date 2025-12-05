import { expectType } from "ts-expect";

import { D, pipe } from "../..";

const obj = {
	0: true,
	x: 1,
	y: "abc",
};

describe("set", () => {
	it("provides correct types", () => {
		expectType<typeof obj & { z: boolean }>(D.set(obj, "z", true));
		expectType<typeof obj>(D.set(obj, "y", "def"));
		expectType<Omit<typeof obj, "y"> & { y: number }>(D.set(obj, "y", 123));

		expectType<typeof obj & { 1: string }>(D.set(obj, 1, "abc"));
		expectType<typeof obj>(D.set(obj, 0, false));
		expectType<Omit<typeof obj, 0> & { 0: string }>(D.set(obj, 0, "abc"));
	});

	it("adds a new property or updates an existing one.", () => {
		expect(D.set(obj, "z", true)).toEqual({ ...obj, z: true });
		expect(D.set(obj, "x", 2)).toEqual({ ...obj, x: 2 });

		expect(D.set(obj, 1, 2)).toEqual({ ...obj, 1: 2 });
		expect(D.set(obj, 0, "abc")).toEqual({ ...obj, 0: "abc" });
	});

	it("*", () => {
		expect(
			D.set({ name: "Joe", location: "Warsaw" }, "location", "Gdańsk"),
		).toEqual({ name: "Joe", location: "Gdańsk" });

		expect(D.set({ 0: false, 1: true }, 1, "abc")).toEqual(
			// prettier-ignore
			{ 0: false, 1: "abc" },
		);
	});
});

describe("set (pipe)", () => {
	it("provides correct types", () => {
		expectType<typeof obj & { z: boolean }>(pipe(obj, D.set("z", true)));
		expectType<typeof obj>(pipe(obj, D.set("y", "def")));
		expectType<Omit<typeof obj, "y"> & { y: number }>(
			pipe(obj, D.set("y", 123)),
		);

		expectType<typeof obj & { 1: string }>(pipe(obj, D.set(1, "abc")));
		expectType<typeof obj>(pipe(obj, D.set(0, false)));
		expectType<Omit<typeof obj, 0> & { 0: string }>(pipe(obj, D.set(0, "abc")));
	});

	it("adds a new property or updates an existing one.", () => {
		expect(pipe(obj, D.set("z", true))).toEqual({ ...obj, z: true });
		expect(pipe(obj, D.set("x", 2))).toEqual({ ...obj, x: 2 });

		expect(pipe(obj, D.set(1, 2))).toEqual({ ...obj, 1: 2 });
		expect(pipe(obj, D.set(0, "abc"))).toEqual({ ...obj, 0: "abc" });
	});

	it("*", () => {
		expect(
			pipe({ name: "Joe", location: "Warsaw" }, D.set("location", "Gdańsk")),
		).toEqual({ name: "Joe", location: "Gdańsk" });

		expect(pipe({ 0: false, 1: true }, D.set(1, "abc"))).toEqual(
			// prettier-ignore
			{ 0: false, 1: "abc" },
		);
	});
});
