import { expectType } from "ts-expect";

import { F, pipe } from "../..";

describe("equals", () => {
	it("provides correct types", () => {
		expectType<boolean>(F.equals(1, 2));
		expectType<boolean>(F.equals("hello", "world"));
	});

	it("returns true", () => {
		expect(F.equals("value", "value")).toEqual(true);
		expect(F.equals(1, 1)).toEqual(true);
		expect(F.equals({ name: "Joe" }, { name: "Joe" })).toEqual(true);
	});

	it("*", () => {
		expect(F.equals([1, [2]], [1, [2]])).toEqual(true);
	});
});

describe("equals (pipe)", () => {
	it("provides correct types", () => {
		const fn =
			<T>(_comparatorFn: (a: T, b: T) => boolean) =>
			(value: T) => {
				return value;
			};

		expectType<boolean>(pipe(1, F.equals(2)));
		expectType<boolean>(pipe("hello", F.equals("world")));

		pipe("hello", fn(F.equals), (value) => {
			expectType<string>(value);
		});

		const fn1 = F.equals(1);
		expectType<(arg: number) => boolean>(fn1);

		const fn2 = F.equals<number, string>(1);
		expectType<(arg: string) => boolean>(fn2);

		const fn3 = F.equals<string, number>(1);
		expectType<(arg: string) => boolean>(fn3);
	});

	it("returns true", () => {
		expect(pipe([1, [2]], F.equals([2, [3]]))).toEqual(false);
	});

	it("*", () => {
		expect(pipe({ name: "Joe" }, F.equals({ name: "John" }))).toEqual(false);
	});
});
