import { expectType } from "ts-expect";

import { F } from "../..";

const x = ["x", "y"] as ReadonlyArray<string>;
const y = ["x", "y"] as const;

describe("coerce", () => {
	it("provides correct types", () => {
		expectType<number[]>(F.coerce<number[]>(x));
		expectType<["x", "z"]>(F.coerce<["x", "z"]>(y));
	});
});
