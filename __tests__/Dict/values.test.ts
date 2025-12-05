import { expectType } from "ts-expect";

import { D, pipe } from "../..";

type T = {
	readonly name: string;
	readonly age: number;
};

const user: T = {
	name: "Joe",
	age: 20,
};

describe("values", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string | number>>(D.values(user));
	});

	it("returns a new array that contains all values of the provided object", () => {
		expect(D.values(user)).toEqual(["Joe", 20]);
	});

	it("*", () => {
		expect(
			D.values({
				name: "Joe",
				age: 20,
			}),
		).toEqual(["Joe", 20]);
	});
});

describe("values (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<string | number>>(pipe(user, D.values));
	});

	it("returns a new array that contains all values of the provided object", () => {
		expect(pipe(user, D.values)).toEqual(["Joe", 20]);
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.values,
			),
		).toEqual(["Joe", 20]);
	});
});
