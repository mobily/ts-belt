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

describe("isEmpty", () => {
	it("provides correct types", () => {
		expectType<boolean>(D.isEmpty(user));
		expectType<boolean>(D.isEmpty({}));
	});

	it("determines whether the given object is empty", () => {
		expect(D.isEmpty(user)).toEqual(false);
		expect(D.isEmpty({})).toEqual(true);
	});

	it("*", () => {
		expect(D.isEmpty({ name: "Joe", age: 20 })).toEqual(false);
		expect(D.isEmpty({})).toEqual(true);
	});
});

describe("isEmpty (pipe)", () => {
	it("provides correct types", () => {
		expectType<boolean>(pipe(user, D.isEmpty));
		expectType<boolean>(pipe({}, D.isEmpty));
	});

	it("determines whether the given object is empty", () => {
		expect(pipe(user, D.isEmpty)).toEqual(false);
		expect(pipe({}, D.isEmpty)).toEqual(true);
	});

	it("*", () => {
		expect(
			pipe(
				{
					name: "Joe",
					age: 20,
				},
				D.isEmpty,
			),
		).toEqual(false);
		expect(pipe({}, D.isEmpty)).toEqual(true);
	});
});
