import { expectType } from "ts-expect";

import { F } from "../..";

const arr = ["x", "y"] as ReadonlyArray<string>;
const tuple = ["x", "y"] as const;
const obj = {
	prop: "1",
} as {
	readonly prop: string;
};

describe("toMutable", () => {
	it("provides correct types", () => {
		expectType<string[]>(F.toMutable(arr));
		expectType<["x", "y"]>(F.toMutable(tuple));
		expectType<{
			prop: string;
		}>(F.toMutable(obj));
	});
});
