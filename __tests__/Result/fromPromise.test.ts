import { expectType } from "ts-expect";
import { R } from "../..";

describe("fromPromise", () => {
	it("provides correct types", () => {
		expectType<Promise<R.Result<number, Error>>>(
			R.fromPromise(Promise.resolve(42)),
		);
	});

	it("returns Error", async () => {
		expect(await R.fromPromise(Promise.reject("hello world"))).toEqual(
			R.Error("hello world"),
		);
	});

	it("returns Some", async () => {
		expect(await R.fromPromise(Promise.resolve("hello world"))).toEqual(
			R.Ok("hello world"),
		);
	});

	it("*", async () => {
		const { Ok, Error } = R;

		expect(await R.fromPromise(Promise.resolve("hello world"))).toEqual(
			Ok("hello world"),
		);

		expect(await R.fromPromise(Promise.reject("oops"))).toEqual(Error("oops"));
	});
});
