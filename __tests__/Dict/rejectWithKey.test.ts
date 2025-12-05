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

describe("rejectWithKey", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(
			D.rejectWithKey(user, (_key, value) => value === 20),
		);

		D.rejectWithKey(user, (key, value) => {
			expectType<string | number>(value);
			expectType<"name" | "age">(key);

			return value === 20;
		});
	});

	it("removes each property that satisfies the given predicate function", () => {
		expect(D.rejectWithKey(user, (key, _value) => key === "age")).toEqual({
			name: "Joe",
		});
		expect(
			D.rejectWithKey(user, (key, value) => value === 30 && key === "age"),
		).toEqual({ name: "Joe", age: 20 });
	});

	it("*", () => {
		expect(
			D.rejectWithKey(
				{ name: "Joe", age: 20 },
				(key, value) => value === 20 && key === "age",
			),
		).toEqual({ name: "Joe" });
	});
});

describe("rejectWithKey (pipe)", () => {
	it("provides correct types", () => {
		expectType<Partial<T>>(
			pipe(
				user,
				D.rejectWithKey((_key, value) => value === 20),
			),
		);

		pipe(
			user,
			D.rejectWithKey((key, value) => {
				expectType<string | number>(value);
				expectType<"name" | "age">(key);
				return value === 20;
			}),
		);
	});

	it("removes each property that satisfies the given predicate function", () => {
		expect(
			pipe(
				user,
				D.rejectWithKey((key, _value) => key === "age"),
			),
		).toEqual({ name: "Joe" });

		expect(
			pipe(
				user,
				D.rejectWithKey((key, value) => value === 20 && key === "age"),
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
				D.rejectWithKey((key, _) => key === "name"),
			),
		).toEqual({ age: 20 });
	});
});
