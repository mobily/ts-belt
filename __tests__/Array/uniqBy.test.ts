import { expectType } from "ts-expect";

import { A, F, pipe } from "../..";

type User = {
	readonly name: string;
	readonly age: number;
};

const xs: ReadonlyArray<User> = [
	{ name: "John", age: 42 },
	{ name: "Sarah", age: 33 },
	{ name: "Kim", age: 22 },
	{ name: "Sarah", age: 38 },
	{ name: "John", age: 33 },
	{ name: "Emily", age: 42 },
];

describe("uniqBy", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			A.uniqBy([1, 2, 2, 3, 4, 4, 5, 6], F.identity),
		);
		expectType<ReadonlyArray<User>>(A.uniqBy(xs, (user) => user.name));
	});

	it("returns unique array", () => {
		expect(A.uniqBy([1, 2, 2, 3, 4, 4, 5, 6], F.identity)).toEqual([
			1, 2, 3, 4, 5, 6,
		]);
		expect(A.uniqBy(xs, (user) => user.name)).toEqual([
			{ name: "John", age: 42 },
			{ name: "Sarah", age: 33 },
			{ name: "Kim", age: 22 },
			{ name: "Emily", age: 42 },
		]);
		expect(A.uniqBy(xs, (user) => user.age)).toEqual([
			{ name: "John", age: 42 },
			{ name: "Sarah", age: 33 },
			{ name: "Kim", age: 22 },
			{ name: "Sarah", age: 38 },
		]);
	});

	it("*", () => {
		expect(A.uniqBy([1, 2, 2, 3, 4, 4, 5, 6], F.identity)).toEqual(
			// prettier-ignore
			[1, 2, 3, 4, 5, 6],
		);

		expect(
			A.uniqBy(
				[
					{ name: "Joe", age: 20 },
					{ name: "John", age: 20 },
				],
				(user) => user.age,
			),
		).toEqual([{ name: "Joe", age: 20 }]);
	});
});

describe("uniqBy (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<number>>(
			pipe([1, 2, 2, 3, 4, 4, 5, 6], A.uniqBy(F.identity)),
		);
		expectType<ReadonlyArray<User>>(
			pipe(
				xs,
				A.uniqBy((user) => user.name),
			),
		);
	});

	it("returns unique array", () => {
		expect(pipe([1, 2, 2, 3, 4, 4, 5, 6], A.uniqBy(F.identity))).toEqual([
			1, 2, 3, 4, 5, 6,
		]);
	});

	it("*", () => {
		expect(pipe([1, 2, 2, 3, 4, 4, 5, 6], A.uniqBy(F.identity))).toEqual(
			// prettier-ignore
			[1, 2, 3, 4, 5, 6],
		);
	});
});
