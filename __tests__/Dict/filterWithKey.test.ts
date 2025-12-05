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

describe("filterWithKey", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(
			D.filterWithKey(user, (_key, value) => value === 20),
		);

		D.filterWithKey(user, (key, value) => {
			expectType<string | number>(value);
			expectType<"name" | "age">(key);

			return value === 20;
		});
	});

	it("removes each property that doesn not satisfy the given predicate function", () => {
		expect(D.filterWithKey(user, (key, _value) => key === "age")).toEqual({
			age: 20,
		});
		expect(
			D.filterWithKey(user, (key, value) => value === 30 && key === "age"),
		).toEqual({});
	});

	it("*", () => {
		expect(
			D.filterWithKey(
				{ name: "Joe", age: 20 },
				(key, value) => value === 30 && key === "age",
			),
		).toEqual({});
	});
});

describe("filterWithKey (pipe)", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(
			pipe(
				user,
				D.filterWithKey((_key, value) => value === 20),
			),
		);

		pipe(
			user,
			D.filterWithKey((key, value) => {
				expectType<string | number>(value);
				expectType<"name" | "age">(key);
				return value === 20;
			}),
		);
	});

	it("removes each property that doesn not satisfy the given predicate function", () => {
		expect(
			pipe(
				user,
				D.filterWithKey((key, _value) => key === "age"),
			),
		).toEqual({ age: 20 });

		expect(
			pipe(
				user,
				D.filterWithKey((key, value) => value === 30 && key === "age"),
			),
		).toEqual({});
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.filterWithKey((key, _) => key === "name"),
			),
		).toEqual({ name: "Joe" });
	});
});
