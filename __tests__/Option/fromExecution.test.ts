import { expectType } from "ts-expect";
import { O } from "../..";

const okJSON = `{"name": "John"}`;
const badJSON = `{name": John}`;

type User = {
	readonly name: string;
};

const parseJSON =
	<T>(value: string) =>
	() => {
		return JSON.parse(value) as T;
	};

describe("fromExecution", () => {
	it("provides correct types", () => {
		expectType<O.Option<User>>(O.fromExecution(parseJSON<User>(okJSON)));
	});

	it("returns None", () => {
		expect(O.fromExecution(parseJSON(badJSON))).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(O.fromExecution(parseJSON(okJSON))).toEqual(
			O.Some({
				name: "John",
			}),
		);
	});

	it("*", () => {
		const { Some, None } = O;

		expect(
			/*
      type User = { readonly name: string }
      const parseJSON = <T>(value: string) => () => JSON.parse(value) as T
      const okJSON = `{"name": "John"}`
      const badJSON = `{name": John}`
      */
			O.fromExecution(parseJSON<User>(okJSON)),
		).toEqual(Some({ name: "John" }));

		expect(O.fromExecution(parseJSON<User>(badJSON))).toEqual(None);
	});
});
