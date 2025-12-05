import { expectType } from "ts-expect";

import { F, pipe } from "../..";

const nullable = F.coerce<string | null>(null);

describe("defaultTo", () => {
	it("provides correct types", () => {
		expectType<number>(F.defaultTo(1, 2));
		expectType<string>(F.defaultTo(nullable, "default"));
	});

	it("returns a default value", () => {
		expect(F.defaultTo(nullable, "default")).toEqual("default");
	});

	it("returns a non-nullable value", () => {
		expect(F.defaultTo(1, 2)).toEqual(1);
		expect(F.defaultTo("hello", "default")).toEqual("hello");
	});

	it("*", () => {
		// ⬇️ const nullable = F.coerce<string | null>(null)
		expect(F.defaultTo(nullable, "default")).toEqual("default");
	});
});

describe("defaultTo (pipe)", () => {
	it("provides correct types", () => {
		expectType<number>(pipe(1, F.defaultTo(2)));
		expectType<string>(pipe(nullable, F.defaultTo("default")));
	});

	it("returns a default value", () => {
		expect(pipe(nullable, F.defaultTo("default"))).toEqual("default");
	});

	it("*", () => {
		expect(pipe(2, F.defaultTo(1))).toEqual(2);
	});
});
