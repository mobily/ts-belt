import { expectType } from "ts-expect";
import { O, pipe } from "../..";

describe("zip", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;
		const fstOption = O.fromNullable(value);
		const sndOption = O.fromNullable(3);

		expectType<O.Option<readonly [string, number]>>(
			O.zip(fstOption, sndOption),
		);
	});

	it("returns Some", () => {
		expect(pipe(O.fromNullable(1), O.zip(O.fromNullable(2)))).toEqual(
			O.Some([1, 2]),
		);
		expect(
			pipe(O.fromNullable("hello"), O.zip(O.fromNullable("world"))),
		).toEqual(O.Some(["hello", "world"]));
	});

	it("returns None", () => {
		expect(pipe(O.fromNullable(1), O.zip(O.fromNullable(null)))).toEqual(
			O.None,
		);
		expect(pipe(O.fromNullable(""), O.zip(O.fromNullable(undefined)))).toEqual(
			O.None,
		);
	});

	it("*", () => {
		const { Some } = O;

		expect(
			pipe(O.fromNullable("hello"), O.zip(O.fromNullable("world"))),
		).toEqual(Some(["hello", "world"]));
	});
});
