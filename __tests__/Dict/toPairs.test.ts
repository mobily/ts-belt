import { expectType } from "ts-expect";

import { A, D, pipe } from "../..";

type T = {
	readonly name: string;
	readonly age: number;
};

const user: T = {
	name: "Joe",
	age: 20,
};

const obj = {} as Record<string, number>;
const number = {
	0: 1,
	1: "ts-belt",
};
const symbol = {
	[Symbol()]: "oops",
};

describe("toPairs", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<readonly [string, string | number]>>(
			D.toPairs(user),
		);
		expectType<ReadonlyArray<readonly [string, number]>>(D.toPairs(obj));
		expectType<ReadonlyArray<readonly [string, string | number]>>(
			D.toPairs(number),
		);
		expectType<ReadonlyArray<readonly [string, string]>>(D.toPairs(symbol));
	});

	it("converts an object into an array of [key, value] tuples.", () => {
		expect(D.toPairs(user)).toEqual([
			["name", "Joe"],
			["age", 20],
		]);
	});

	it("*", () => {
		expect(
			D.toPairs({
				name: "Joe",
				age: 20,
			}),
		).toEqual(
			// prettier-ignore
			[
				["name", "Joe"],
				["age", 20],
			],
		);
	});
});

describe("toPairs (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<readonly [string, string | number]>>(
			pipe(user, D.toPairs),
		);

		pipe(
			user,
			D.toPairs,
			A.forEach(([key, value]) => {
				expectType<string>(key);
				expectType<string | number>(value);
			}),
		);
	});

	it("converts an object into an array of [key, value] tuples.", () => {
		expect(pipe(user, D.toPairs)).toEqual([
			["name", "Joe"],
			["age", 20],
		]);
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.toPairs,
			),
		).toEqual(
			// prettier-ignore
			[
				["name", "Joe"],
				["age", 20],
			],
		);
	});
});
