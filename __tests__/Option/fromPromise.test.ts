import { expectType } from "ts-expect";
import { O } from "../..";

describe("fromPromise", () => {
	it("provides correct types", () => {
		expectType<Promise<O.Option<number>>>(O.fromPromise(Promise.resolve(42)));
	});

	it("returns None", async () => {
		expect(await O.fromPromise(Promise.reject("hello world"))).toEqual(O.None);
	});

	it("returns Some", async () => {
		expect(await O.fromPromise(Promise.resolve("hello world"))).toEqual(
			O.Some("hello world"),
		);
	});

	it("*", async () => {
		const { Some, None } = O;

		expect(await O.fromPromise(Promise.resolve("hello world"))).toEqual(
			Some("hello world"),
		);

		expect(await O.fromPromise(Promise.reject("oops"))).toEqual(None);
	});
});
