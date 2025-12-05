import { expectType } from "ts-expect";

import { D, O, S, pipe } from "../..";

const obj = {
	0: true,
	x: 1,
	y: "abc",
};

const rec: Record<string, number> = { a: 1, b: 2 };

describe("update", () => {
	it("provides correct types", () => {
		expectType<typeof obj>(D.update(obj, "x", (v) => O.getExn(v) + 1));
		expectType<typeof obj>(D.update(obj, 0, (v) => !!O.getExn(v)));

		expectType<Omit<typeof obj, 0> & { 0: number }>(
			D.update(obj, 0, (v) => +O.getExn(v)),
		);
		expectType<Omit<typeof obj, "y"> & { y: number }>(
			D.update(obj, "y", (v) => O.getExn(v).length),
		);
	});

	it("adds a new property or updates an existing one.", () => {
		expect(D.update(obj, "x", (v) => O.getExn(v) + 1)).toEqual({
			...obj,
			x: 2,
		});
		expect(D.update(obj, "y", (v) => O.getExn(v).length)).toEqual({
			...obj,
			y: 3,
		});

		expect(D.update(rec, "a", O.isNone)).toEqual({ ...rec, a: false });
		expect(D.update(rec, "c", O.isNone)).toEqual({ ...rec, c: true });
	});

	it("*", () => {
		expect(
			D.update({ name: "Joe", location: "Warsaw" }, "name", (option) =>
				O.mapWithDefault(option, "unknown", S.toUpperCase),
			),
		).toEqual({ name: "JOE", location: "Warsaw" });

		const obj: Record<string, string> = { name: "Joe", location: "Warsaw" };

		expect(
			// ⬇️ const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }
			D.update(obj, "key", (option) =>
				O.mapWithDefault(option, "unknown", S.toUpperCase),
			),
		).toEqual({ name: "Joe", key: "unknown", location: "Warsaw" });
	});
});

describe("update (pipe)", () => {
	it("provides correct types", () => {
		expectType<typeof obj>(
			pipe(
				obj,
				D.update("x", (v) => O.getExn(v) + 1),
			),
		);
		expectType<typeof obj>(
			pipe(
				obj,
				D.update(0, (v) => !!O.getExn(v)),
			),
		);

		expectType<Omit<typeof obj, 0> & { 0: number }>(
			pipe(
				obj,
				D.update(0, (v) => +O.getExn(v)),
			),
		);
		expectType<Omit<typeof obj, "y"> & { y: number }>(
			pipe(
				obj,
				D.update("y", (v) => O.getExn(v).length),
			),
		);
	});

	it("adds a new property or updates an existing one.", () => {
		expect(
			pipe(
				obj,
				D.update("x", (v) => O.getExn(v) + 1),
			),
		).toEqual({ ...obj, x: 2 });
		expect(
			pipe(
				obj,
				D.update("y", (v) => O.getExn(v).length),
			),
		).toEqual({ ...obj, y: 3 });

		expect(pipe(rec, D.update("a", O.isNone))).toEqual({ ...rec, a: false });
		expect(pipe(rec, D.update("c", O.isNone))).toEqual({ ...rec, c: true });
	});

	it("*", () => {
		expect(
			pipe(
				{ name: "Joe", location: "Warsaw" },
				D.update("name", (option) =>
					O.mapWithDefault(option, "unknown", S.toUpperCase),
				),
			),
		).toEqual({ name: "JOE", location: "Warsaw" });

		const obj: Record<string, string> = { name: "Joe", location: "Warsaw" };

		expect(
			// ⬇️ const obj: Record<string, string> = { name: 'Joe', location: 'Warsaw' }
			pipe(
				obj,
				D.update("key", (option) =>
					O.mapWithDefault(option, "unknown", S.toUpperCase),
				),
			),
		).toEqual(
			// prettier-ignore
			{ name: "Joe", key: "unknown", location: "Warsaw" },
		);
	});
});
