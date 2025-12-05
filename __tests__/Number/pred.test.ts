import { expectType } from "ts-expect";

import { N, pipe } from "../..";

describe("pred", () => {
	it("provides correct types", () => {
		expectType<number>(N.pred(2));
	});

	it("subtracts 1 from the given number", () => {
		expect(N.pred(4)).toEqual(3);
	});

	it("*", () => {
		expect(N.pred(6)).toEqual(5);
	});
});

describe("pred (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(3, N.pred));
	});

	it("subtracts 1 from the given number", () => {
		expect(pipe(2, N.pred)).toEqual(1);
	});

	it("*", () => {
		expect(pipe(5, N.pred)).toEqual(4);
	});
});
