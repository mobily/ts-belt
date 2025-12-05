import { expectType } from "ts-expect";
import { O } from "../..";

describe("fromFalsy", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;

		expectType<O.Option<string>>(O.fromFalsy(value));
		expectType<O.Option<never>>(O.fromFalsy(null));
	});

	it("returns None", () => {
		expect(O.fromFalsy(null)).toEqual(O.None);
		expect(O.fromFalsy(undefined)).toEqual(O.None);
		expect(O.fromFalsy(0)).toEqual(O.None);
		expect(O.fromFalsy("")).toEqual(O.None);
		expect(O.fromFalsy(false)).toEqual(O.None);
	});

	it("returns Some", () => {
		expect(O.fromFalsy("value")).toEqual(O.Some("value"));
		expect(O.fromFalsy(1)).toEqual(O.Some(1));
		expect(O.fromFalsy([])).toEqual(O.Some([]));
		expect(O.fromFalsy({})).toEqual(O.Some({}));
	});

	it("*", () => {
		const { Some, None } = O;

		expect(O.fromFalsy(1)).toEqual(Some(1));
		expect(O.fromFalsy("hello world")).toEqual(Some("hello world"));
		expect(O.fromFalsy([])).toEqual(Some([]));
		expect(O.fromFalsy(0)).toEqual(None);
		expect(O.fromFalsy("")).toEqual(None);
	});
});
