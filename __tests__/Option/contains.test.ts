import { expectType } from "ts-expect";
import { A, O, pipe } from "../..";

describe("contains", () => {
	it("provides correct types", () => {
		const value = null as unknown as string | null;
		const option = O.fromNullable(value);
		expectType<boolean>(O.contains(option, 3));
	});

	it("returns true", () => {
		expect(pipe(O.fromNullable([1]), O.contains([1]))).toEqual(true);
		expect(pipe(O.fromNullable(false), O.contains(false))).toEqual(true);
		expect(
			pipe(O.fromNullable({ key: "value" }), O.contains({ key: "value" })),
		).toEqual(true);
		expect(pipe(O.fromNullable(0), O.contains(0))).toEqual(true);
	});

	it("returns false", () => {
		expect(pipe(O.fromNullable(null), O.contains(0))).toEqual(false);
		expect(pipe(O.fromNullable(undefined), O.contains("hello"))).toEqual(false);
	});

	it("*", () => {
		expect(
			pipe(O.fromNullable([3, 6, 9]), O.flatMap(A.head), O.contains(3)),
		).toEqual(true);

		expect(
			pipe(O.fromNullable([3, 6, 9]), O.flatMap(A.get(1)), O.contains(3)),
		).toEqual(false);
	});
});
