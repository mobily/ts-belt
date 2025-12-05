import { expectType } from "ts-expect";

import { D, pipe } from "../..";

type T = {
	readonly name: string;
	readonly location: string;
};

const user: T = {
	name: "Joe",
	location: "Warsaw",
};

describe("map", () => {
	it("provides correct types", () => {
		expectType<Record<keyof T, number>>(D.map(user, (value) => value.length));

		D.map(user, (value) => {
			expectType<string>(value);
			return value.length;
		});
	});

	it("transforms each value in the object to a new value using the provided function", () => {
		expect(D.map(user, (value) => value.length)).toEqual({
			name: 3,
			location: 6,
		});
	});

	it("*", () => {
		expect(
			D.map(
				{
					name: "Joe",
					location: "Warsaw",
				},
				(value) => value.length,
			),
		).toEqual({ name: 3, location: 6 });
	});
});

describe("map (pipe)", () => {
	it("provides correct types", () => {
		expectType<Record<keyof T, number>>(
			pipe(
				user,
				D.map((value) => value.length),
			),
		);

		pipe(
			user,
			D.map((value) => {
				expectType<string>(value);
				return value.length;
			}),
		);
	});

	it("transforms each value in the object to a new value using the provided function", () => {
		expect(
			pipe(
				user,
				D.map((value) => value.length),
			),
		).toEqual({ name: 3, location: 6 });
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					location: "Warsaw",
				},
				D.map((value) => value.length),
			),
		).toEqual({ name: 3, location: 6 });
	});
});
