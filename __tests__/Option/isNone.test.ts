import { expectType } from "ts-expect";
import { O, pipe } from "../..";

describe("isNone", () => {
	it("provides correct types", () => {
		expectType<boolean>(O.isNone(O.None));
		expectType<boolean>(O.isNone(O.Some("hello")));
	});

	it("returns true", () => {
		expect(O.isNone(O.None)).toBeTruthy();
		expect(pipe(O.fromNullable(null), O.isNone)).toBeTruthy();
	});

	it("returns false", () => {
		expect(O.isNone(O.Some("value"))).toBeFalsy();
		expect(pipe(O.fromNullable("value"), O.isNone)).toBeFalsy();
	});

	it("*", () => {
		expect(O.isNone(O.None)).toEqual(true);
		expect(pipe(O.fromNullable(null), O.isNone)).toEqual(true);
		expect(O.isNone(O.Some("hello world!"))).toEqual(false);
		expect(pipe(O.fromNullable("hello world!"), O.isNone)).toEqual(false);
	});
});
