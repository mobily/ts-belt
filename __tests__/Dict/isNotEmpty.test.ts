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

describe("isNotEmpty", () => {
	it("provides correct types", () => {
		expectType<boolean>(D.isNotEmpty(user));
		expectType<boolean>(D.isNotEmpty({}));
	});

	it("determines whether the given object is empty", () => {
		expect(D.isNotEmpty(user)).toEqual(true);
		expect(D.isNotEmpty({})).toEqual(false);
	});

	it("*", () => {
		expect(D.isNotEmpty({ name: "Joe", age: 20 })).toEqual(true);
		expect(D.isNotEmpty({})).toEqual(false);
	});
});

describe("isNotEmpty (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(user, D.isNotEmpty));
		expectType<boolean>(pipe({}, D.isNotEmpty));
	});

	it("determines whether the given object is empty", () => {
		expect(pipe(user, D.isNotEmpty)).toEqual(true);
		expect(pipe({}, D.isNotEmpty)).toEqual(false);
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.isNotEmpty,
			),
		).toEqual(true);
		expect(pipe({}, D.isNotEmpty)).toEqual(false);
	});
});
