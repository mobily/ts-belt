import { A, D, O, R, S, pipe } from "../..";

describe("toOption", () => {
	it("returns None", () => {
		expect(pipe(R.fromNullable(null, "this is bad"), R.toOption)).toEqual(
			O.None,
		);
		expect(
			pipe(
				R.fromNullable("value", "this is bad"),
				R.flatMap((_) => R.Error("new error")),
				R.toOption,
			),
		).toEqual(O.None);
		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.flatMap((_) => R.Ok("this is fine")),
				R.toOption,
			),
		).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(pipe(R.Ok("value"), R.toOption)).toEqual(O.Some("value"));
		expect(pipe(R.fromNullable("value", "this is bad"), R.toOption)).toEqual(
			O.Some("value"),
		);
		expect(
			pipe(
				R.fromNullable("this is fine", "this is bad"),
				R.flatMap((str) => R.Ok(`${str}!`)),
				R.toOption,
			),
		).toEqual(O.Some("this is fine!"));
	});

	it("*", () => {
		let obj: { names: string } | null = {
			names: "hello,world,ts,belt",
		};

		expect(
			// type Data = { names: string } | null
			pipe(
				// ⬇️ const obj: Data = { names: 'hello,world,ts,belt' }
				R.fromNullable(obj, "cannot be nullable"), // → Ok({ names: 'hello,world,ts,belt' })
				R.map(D.getUnsafe("names")), // → Ok('hello,world,ts,belt')
				R.map(S.split(",")), // → Ok(['hello', 'world', 'ts', 'belt'])
				R.toOption, // → Some(['hello', 'world', 'ts', 'belt'])
				O.flatMap(A.dropExactly(2)), // → Some(['ts', 'belt'])
				O.map(A.join("-")), // → Some('ts-belt')
				O.getWithDefault("nothing found"), // → ts-belt
			),
		).toEqual("ts-belt");

		obj = null as unknown as { names: string } | null;

		expect(
			pipe(
				// ⬇️ const obj: Data = null
				R.fromNullable(obj, "cannot be nullable"), // → Error('cannot be nullable')
				R.map(D.getUnsafe("names")), // → Error('cannot be nullable')
				R.map(S.split(",")), // → Error('cannot be nullable')
				R.toOption, // → None
				O.flatMap(A.dropExactly(2)), // → None
				O.map(A.join("-")), // → None
				O.getWithDefault("nothing found"), // → nothing found
			),
		).toEqual("nothing found");
	});
});
