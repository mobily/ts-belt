import { expectType } from "ts-expect";
import { O, pipe } from "../..";

describe("mapNullable", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;
		const option = O.fromNullable(value);

		expectType<O.Option<string>>(
			O.mapNullable(option, (value) => {
				return `${value}!`;
			}),
		);
	});

	it("returns None", () => {
		expect(
			pipe(
				O.fromNullable(null),
				O.mapNullable((_) => "value"),
			),
		).toEqual(O.None);

		expect(
			pipe(
				O.fromNullable({ prop: null }),
				O.mapNullable((obj) => obj.prop),
			),
		).toEqual(O.None);

		expect(
			pipe(
				O.fromNullable("this is fine"),
				O.mapNullable((_) => null),
			),
		).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(
			pipe(
				O.fromNullable([1, 2, 3]),
				O.mapNullable((arr) => {
					const [fst] = arr;
					return fst;
				}),
			),
		).toEqual(O.Some(1));
	});

	it("*", () => {
		const { Some, None } = O;

		expect(
			pipe(
				O.fromNullable([1, 2, 3]),
				O.mapNullable((value) => value[0]),
			),
		).toEqual(Some(1));

		expect(
			pipe(
				O.fromNullable([undefined, 2, 3]),
				O.mapNullable((value) => value[0]),
			),
		).toEqual(None);
	});
});
