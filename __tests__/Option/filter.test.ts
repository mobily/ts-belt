import { expectType } from "ts-expect";
import { A, O, pipe } from "../..";

describe("filter", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;
		const option = O.fromNullable(value);
		expectType<O.Option<string>>(
			O.filter(option, (value) => value.length === 3),
		);
	});

	it("returns None", () => {
		expect(
			pipe(
				O.fromNullable(null),
				O.filter((_) => false),
			),
		).toEqual(O.None);
		expect(
			pipe(
				O.fromNullable(null),
				O.filter((_) => true),
			),
		).toEqual(O.None);
		expect(
			pipe(
				O.fromNullable([3, 5, 7]),
				O.filter((arr) => {
					const [fst] = arr;
					return fst === 1;
				}),
			),
		).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(
			pipe(
				O.fromNullable([1, 2, 3]),
				O.filter((arr) => {
					const [fst] = arr;
					return fst === 1;
				}),
			),
		).toEqual(O.Some([1, 2, 3]));
	});

	it("*", () => {
		const { Some, None } = O;

		expect(
			pipe(
				O.fromNullable([3, 6, 9]),
				O.flatMap(A.get(0)),
				O.filter((value) => value === 3),
			),
		).toEqual(Some(3));

		expect(
			pipe(
				O.fromNullable([3, 6, 9]),
				O.flatMap(A.get(0)),
				O.filter((value) => value === 0),
			),
		).toEqual(None);
	});
});
