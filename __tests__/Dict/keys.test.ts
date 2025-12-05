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

describe("keys", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<"name" | "age">>(D.keys(user));
		expectType<ReadonlyArray<string>>(D.keys(user));
	});

	it("returns a new array that contains all keys of the provided object", () => {
		expect(D.keys(user)).toEqual(["name", "age"]);
	});

	it("*", () => {
		expect(
			D.keys({
				name: "Joe",
				age: 20,
			}),
		).toEqual(["name", "age"]);
	});
});

describe("keys (pipe)", () => {
	it("provides correct types", () => {
		expectType<ReadonlyArray<"name" | "age">>(pipe(user, D.keys));
		expectType<ReadonlyArray<string>>(pipe(user, D.keys));
	});

	it("returns a new array that contains all keys of the provided object", () => {
		expect(pipe(user, D.keys)).toEqual(["name", "age"]);
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.keys,
			),
		).toEqual(["name", "age"]);
	});
});
