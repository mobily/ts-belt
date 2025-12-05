import { expectType } from "ts-expect";

import { B, D, S, pipe } from "../..";

const obj = {
	0: true,
	x: 1,
	y: "abc",
};

const rec: Record<string, number> = { a: 1, b: 2 };

describe("updateUnsafe", () => {
	it("provides correct types", () => {
		expectType<typeof obj>(D.updateUnsafe(obj, "x", (v) => v + 1));
		expectType<typeof obj>(D.updateUnsafe(obj, 0, (v) => !!v));

		expectType<Omit<typeof obj, 0> & { 0: number }>(
			D.updateUnsafe(obj, 0, (v) => +v),
		);
		expectType<Omit<typeof obj, "y"> & { y: number }>(
			D.updateUnsafe(obj, "y", (v) => v.length),
		);
	});

	it("adds a new property or updates an existing one.", () => {
		expect(D.updateUnsafe(obj, "x", (v) => v + 1)).toEqual({ ...obj, x: 2 });
		expect(D.updateUnsafe(obj, "y", (v) => v.length)).toEqual({
			...obj,
			y: 3,
		});

		expect(D.updateUnsafe(rec, "a", (v) => v === undefined)).toEqual({
			...rec,
			a: false,
		});
		expect(D.updateUnsafe(rec, "c", (v) => v === undefined)).toEqual({
			...rec,
			c: true,
		});
	});

	it("*", () => {
		expect(
			D.updateUnsafe(
				{ name: "Joe", location: "Warsaw" },
				"name",
				S.toUpperCase,
			),
		).toEqual({ name: "JOE", location: "Warsaw" });

		expect(D.updateUnsafe({ 0: false, 1: true }, 1, B.inverse)).toEqual(
			// prettier-ignore
			{ 0: false, 1: false },
		);
	});
});

describe("updateUnsafe (pipe)", () => {
	it("provides correct types", () => {
		expectType<typeof obj>(
			pipe(
				obj,
				D.updateUnsafe("x", (v) => v + 1),
			),
		);
		expectType<typeof obj>(
			pipe(
				obj,
				D.updateUnsafe(0, (v) => !!v),
			),
		);

		expectType<Omit<typeof obj, 0> & { 0: number }>(
			pipe(
				obj,
				D.updateUnsafe(0, (v) => +v),
			),
		);
		expectType<Omit<typeof obj, "y"> & { y: number }>(
			pipe(
				obj,
				D.updateUnsafe("y", (v) => v.length),
			),
		);
	});

	it("adds a new property or updates an existing one.", () => {
		expect(
			pipe(
				obj,
				D.updateUnsafe("x", (v) => v + 1),
			),
		).toEqual({ ...obj, x: 2 });
		expect(
			pipe(
				obj,
				D.updateUnsafe("y", (v) => v.length),
			),
		).toEqual({ ...obj, y: 3 });

		expect(
			pipe(
				rec,
				D.updateUnsafe("a", (v) => v === undefined),
			),
		).toEqual({
			...rec,
			a: false,
		});
		expect(
			pipe(
				rec,
				D.updateUnsafe("c", (v) => v === undefined),
			),
		).toEqual({
			...rec,
			c: true,
		});
	});

	it("*", () => {
		expect(
			pipe(
				{ name: "Joe", location: "Warsaw" },
				D.updateUnsafe("name", S.toUpperCase),
			),
		).toEqual({ name: "JOE", location: "Warsaw" });

		expect(pipe({ 0: false, 1: true }, D.updateUnsafe(1, B.inverse))).toEqual(
			// prettier-ignore
			{ 0: false, 1: false },
		);
	});
});
