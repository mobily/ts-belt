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

describe("reject", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(D.reject(user, (value) => value === 20));

		D.reject(user, (value) => {
			expectType<string | number>(value);
			return value === 20;
		});
	});

	it("removes each property that satisfies the given predicate function", () => {
		expect(D.reject(user, (value) => value === 20)).toEqual({ name: "Joe" });
	});

	it("*", () => {
		expect(D.reject({ name: "Joe", age: 20 }, (value) => value === 20)).toEqual(
			// prettier-ignore
			{ name: "Joe" },
		);
	});
});

describe("reject (pipe)", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(
			pipe(
				user,
				D.reject((value) => value === 20),
			),
		);

		pipe(
			user,
			D.reject((value) => {
				expectType<string | number>(value);
				return value === 20;
			}),
		);
	});

	it("removes each property that satisfies the given predicate function", () => {
		expect(
			pipe(
				user,
				D.reject((value) => value === 20),
			),
		).toEqual({ name: "Joe" });
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.reject((value) => value === "Joe"),
			),
		).toEqual({ age: 20 });
	});
});
