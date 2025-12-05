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

describe("filter", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(D.filter(user, (value) => value === 20));

		D.filter(user, (value) => {
			expectType<string | number>(value);
			return value === 20;
		});
	});

	it("removes each property that doesn not satisfy the given predicate function", () => {
		expect(D.filter(user, (value) => value === 20)).toEqual({ age: 20 });
	});

	it("*", () => {
		expect(D.filter({ name: "Joe", age: 20 }, (value) => value === 20)).toEqual(
			// prettier-ignore
			{ age: 20 },
		);
	});
});

describe("filter (pipe)", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(
			pipe(
				user,
				D.filter((value) => value === 20),
			),
		);

		pipe(
			user,
			D.filter((value) => {
				expectType<string | number>(value);
				return value === 20;
			}),
		);
	});

	it("removes each property that doesn not satisfy the given predicate function", () => {
		expect(
			pipe(
				user,
				D.filter((value) => value === 20),
			),
		).toEqual({ age: 20 });
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.filter((value) => value === "Joe"),
			),
		).toEqual({ name: "Joe" });
	});
});
