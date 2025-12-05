import { G, R, pipe } from "../..";

describe("map", () => {
	it("returns Error", () => {
		expect(
			pipe(
				R.fromNullable(null, "this is bad"),
				R.map((_) => "string"),
			),
		).toEqual(R.Error("this is bad"));
	});

	it("returns Ok", () => {
		expect(
			pipe(
				R.fromNullable("hello", "this is bad"),
				R.map((str) => {
					return `${str} world`;
				}),
			),
		).toEqual(R.Ok("hello world"));
	});

	it("*", () => {
		const { Ok, Error } = R;

		let obj: { name: string | null; age: number } | null = {
			name: "Joe",
			age: 20,
		};

		expect(
			// type User = { name: string | null, age: number } | null
			pipe(
				// ⬇️ const obj: User = { name: 'Joe', age: 20 }
				R.fromNullable(obj, "cannot be nullable"),
				R.flatMap((obj) => {
					return G.isNotNullable(obj.name)
						? R.Ok(obj)
						: R.Error("missing name");
				}),
				R.map((obj) => `${obj.name} is ${obj.age} year old!`),
			),
		).toEqual(Ok("Joe is 20 year old!"));

		obj = { name: null, age: 20 };

		expect(
			pipe(
				// ⬇️ const obj: User = { name: null, age: 20 }
				R.fromNullable(obj, "cannot be nullable"),
				R.flatMap((obj) => {
					return G.isNotNullable(obj.name)
						? R.Ok(obj)
						: R.Error("missing name");
				}),
				R.map((obj) => `${obj.name} is ${obj.age} year old!`),
			),
		).toEqual(Error("missing name"));

		obj = null as unknown as { name: string | null; age: number } | null;

		expect(
			pipe(
				// ⬇️ const obj: User = null
				R.fromNullable(obj, "cannot be nullable"),
				R.flatMap((obj) => {
					return G.isNotNullable(obj.name)
						? R.Ok(obj)
						: R.Error("missing name");
				}),
				R.map((obj) => `${obj.name} is ${obj.age} year old!`),
			),
		).toEqual(Error("cannot be nullable"));
	});
});
