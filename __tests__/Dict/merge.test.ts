import { expectType } from "ts-expect";

import { D, pipe } from "../..";

const fst = {
	x: 1,
	y: 2,
};

const snd = {
	y: 3,
	z: 4,
};

describe("merge", () => {
	it("provides correct types", () => {
		expectType<{ x: number; y: number; z: number }>(D.merge(fst, snd));
	});

	it("merges two provided objects", () => {
		expect(D.merge(fst, snd)).toEqual({ x: 1, y: 3, z: 4 });
	});

	it("*", () => {
		expect(D.merge({ x: 1, y: 2 }, { y: 3, z: 4 })).toEqual(
			// prettier-ignore
			{ x: 1, y: 3, z: 4 },
		);
	});
});

describe("merge (pipe)", () => {
	it("provides correct types", () => {
		expectType<{ x: number; y: number; z: number }>(pipe(fst, D.merge(snd)));
	});

	it("merges two provided objects", () => {
		expect(pipe(fst, D.merge(snd))).toEqual({ x: 1, y: 3, z: 4 });
	});

	it("*", () => {
		expect(pipe({ x: 1, y: 2 }, D.merge({ y: 3, z: 4 }))).toEqual(
			// prettier-ignore
			{ x: 1, y: 3, z: 4 },
		);
	});
});
