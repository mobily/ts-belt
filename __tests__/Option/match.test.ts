import { expectType } from "ts-expect";
import { A, O, pipe } from "../..";

describe("match", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;
		const option = O.fromNullable(value);

		expectType<number>(
			O.match(
				option,
				(str) => str.length,
				() => 0,
			),
		);
	});

	it("returns a result of someFn", () => {
		expect(
			pipe(
				O.fromNullable(null),
				O.match(
					(_) => "this is fine",
					() => "this is bad",
				),
			),
		).toEqual("this is bad");
	});

	it("returns a result of noneFn", () => {
		expect(
			pipe(
				O.fromNullable("this is fine"),
				O.match(
					(str) => `${str}!`,
					() => "this is bad",
				),
			),
		).toEqual("this is fine!");
	});

	it("*", () => {
		expect(
			pipe(
				O.fromNullable(["hello", "world", "lorem", "ipsum"]),
				O.flatMap(A.takeExactly(2)),
				O.map(A.join(" ")),
				O.match(
					(str) => `${str}!`,
					() => "oops!",
				),
			),
		).toEqual("hello world!");

		expect(
			pipe(
				O.fromNullable([]),
				O.flatMap(A.takeExactly(2)),
				O.map(A.join(" ")),
				O.match(
					(str) => `${str}!`,
					() => "oops!",
				),
			),
		).toEqual("oops!");
	});
});
