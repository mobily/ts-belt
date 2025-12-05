import { expectType } from "ts-expect";
import { N, O, S, pipe } from "../..";

describe("zipWith", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;
		const fstOption = O.fromNullable(value);
		const sndOption = O.fromNullable(3);

		expectType<O.Option<boolean>>(
			O.zipWith(fstOption, sndOption, (_arg0, _arg1) => {
				return true;
			}),
		);
		expectType<O.Option<readonly [string, number]>>(
			O.zipWith(fstOption, sndOption, (arg0, arg1) => [arg0, arg1]),
		);
	});

	it("returns Some", () => {
		expect(
			pipe(
				O.fromNullable(1),
				O.zipWith(O.fromNullable(2), (_) => true),
			),
		).toEqual(O.Some(true));
		expect(
			pipe(
				O.fromNullable("hello"),
				O.zipWith(O.fromNullable("world"), (x, y) => `${x} ${y}`),
			),
		).toEqual(O.Some("hello world"));
	});

	it("returns None", () => {
		expect(
			pipe(O.fromNullable(1), O.zipWith(O.fromNullable(null), N.add)),
		).toEqual(O.None);
		expect(
			pipe(O.fromNullable(""), O.zipWith(O.fromNullable(undefined), S.concat)),
		).toEqual(O.None);
	});

	it("*", () => {
		const { Some } = O;

		expect(
			pipe(
				O.fromNullable("hello"),
				O.zipWith(O.fromNullable("world"), S.concat),
			),
		).toEqual(Some("helloworld"));
	});
});
