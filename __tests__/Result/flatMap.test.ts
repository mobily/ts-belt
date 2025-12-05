import { expectType } from "ts-expect";
import { R, pipe } from "../..";

class Error1 extends Error {}
class Error2 extends Error {}

describe("flatMap", () => {
	it("returns Error", () => {
		expectType<R.Result<string, Error1 | Error2>>(
			pipe(
				R.fromNullable("test", new Error1()),
				R.flatMap((value) => {
					return Math.random() < 0.5 ? R.Ok(value) : R.Error(new Error2());
				}),
			),
		);
		expectType<R.Result<string, Error1>>(
			pipe(
				R.fromNullable("test", new Error1()),
				R.flatMap((value) => {
					return Math.random() < 0.5 ? R.Ok(value) : R.Error(new Error1());
				}),
			),
		);

		expect(
			pipe(
				R.fromNullable("value", "this is bad"),
				R.flatMap((_) => R.Error("new error")),
			),
		).toEqual(R.Error("new error"));

		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.flatMap((_) => R.Error("new error")),
			),
		).toEqual(R.Error("this is bad"));

		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.flatMap((_) => R.Ok(1)),
			),
		).toEqual(R.Error("this is bad"));
	});

	it("returns Ok", () => {
		expect(
			pipe(
				R.fromNullable(2, "error"),
				R.flatMap((value) => R.Ok(value ** 2)),
			),
		).toEqual(R.Ok(4));
	});

	it("*", () => {
		const { Ok, Error } = R;

		expect(
			pipe(
				R.fromNullable(4, "value cannot be nullable"),
				R.flatMap((value) => {
					return value === 0
						? R.Error("never divide by zero")
						: R.Ok(100 / value);
				}),
			),
		).toEqual(Ok(25));

		expect(
			pipe(
				R.fromNullable(null, "value cannot be nullable"),
				R.flatMap((value) => {
					return value === 0
						? R.Error("never divide by zero")
						: R.Ok(100 / value);
				}),
			),
		).toEqual(Error("value cannot be nullable"));

		expect(
			pipe(
				R.fromNullable(0, "value cannot be nullable"),
				R.flatMap((value) => {
					return value === 0
						? R.Error("never divide by zero")
						: R.Ok(100 / value);
				}),
			),
		).toEqual(Error("never divide by zero"));
	});
});
