import { expectType } from "ts-expect";
import { A, O, pipe } from "../..";

describe("map", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;
		const option = O.fromNullable(value);

		expectType<O.Option<string>>(
			O.map(option, (value) => {
				return `${value}!`;
			}),
		);
	});

	it("returns None", () => {
		expect(
			pipe(
				O.fromNullable(null),
				O.map((_) => "this is fine"),
			),
		).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(
			pipe(
				O.fromNullable([1, 2, 3]),
				O.map((_) => "this is fine"),
			),
		).toEqual(O.Some("this is fine"));
	});

	it("*", () => {
		const { Some, None } = O;

		expect(
			pipe(
				O.fromNullable([1, 2, 3]),
				O.flatMap(A.get(0)),
				O.map((n) => `${n}. hello world!`),
			),
		).toEqual(Some("1. hello world!"));

		expect(
			pipe(
				O.fromNullable([]),
				O.flatMap(A.get(0)),
				O.map((n) => `${n}. hello world!`),
			),
		).toEqual(None);
	});
});
