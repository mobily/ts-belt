import { expectType } from "ts-expect";

import { A, pipe } from "../..";

type User = {
	readonly name: string;
	readonly age: number;
};

const xs: ReadonlyArray<User> = [
	{ name: "John", age: 20 },
	{ name: "Sarah", age: 33 },
	{ name: "Kim", age: 22 },
	{ name: "Sarah", age: 33 },
	{ name: "John", age: 20 },
	{ name: "Emily", age: 42 },
];

describe("uniq", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(A.uniq([1, 2, 2, 3, 4, 4, 5, 6]));
		expectType<ReadonlyArray<User>>(A.uniq(xs));
		expectType<ReadonlyArray<readonly [number, number]>>(
			A.uniq([
				[1, 2],
				[2, 1],
				[1, 2],
				[3, 4],
			]),
		);
	});

	it("returns unique array", () => {
		expect(A.uniq([1, 2, 2, 3, 4, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
		expect(
			A.uniq([
				[1, 2],
				[2, 1],
				[1, 2],
				[3, 4],
			]),
		).toEqual([
			[1, 2],
			[2, 1],
			[3, 4],
		]);

		expect(A.uniq(xs)).toEqual([
			{ name: "John", age: 20 },
			{ name: "Sarah", age: 33 },
			{ name: "Kim", age: 22 },
			{ name: "Emily", age: 42 },
		]);
	});

	it("handles various cases", () => {
		const a = Object.create(null);
		a[0] = 1;
		a[1] = 2;
		a[2] = 3;

		const b = Object.create(null);
		b[0] = 1;
		b[1] = 3;
		b[2] = 2;

		const c = Object.create(null);
		c[0] = 1;
		c[1] = 2;
		c[2] = 3;

		expect(A.uniq([a, b, c])).toEqual([a, b]);
	});

	it("*", () => {
		expect(A.uniq([1, 2, 2, 3, 4, 4, 5, 6])).toEqual(
			// prettier-ignore
			[1, 2, 3, 4, 5, 6],
		);
		expect(
			// prettier-ignore
			A.uniq([
				[1, 2],
				[2, 1],
				[1, 2],
				[3, 4],
			]),
		).toEqual(
			// prettier-ignore
			[
				[1, 2],
				[2, 1],
				[3, 4],
			],
		);

		expect(
			A.uniq([
				{ name: "John", age: 20 },
				{ name: "Emily", age: 30 },
				{ name: "John", age: 20 },
			]),
		).toEqual(
			// prettier-ignore
			[
				{ name: "John", age: 20 },
				{ name: "Emily", age: 30 },
			],
		);
	});
});

describe("uniq (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(pipe([1, 2, 2, 3, 4, 4, 5, 6], A.uniq));
		expectType<ReadonlyArray<User>>(pipe(xs, A.uniq));
	});

	it("returns unique array", () => {
		expect(pipe([1, 2, 2, 3, 4, 4, 5, 6], A.uniq)).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("*", () => {
		expect(pipe([1, 2, 2, 3, 4, 4, 5, 6], A.uniq)).toEqual(
			// prettier-ignore
			[1, 2, 3, 4, 5, 6],
		);
	});
});
