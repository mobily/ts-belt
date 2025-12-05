import { expectType } from "ts-expect";
import { AD, pipe } from "../..";

describe("isInit", () => {
	it("provides correct types", () => {
		expectType<boolean>(AD.isInit(AD.Init));
		expectType<boolean>(AD.isInit(AD.Complete("hello world")));
	});

	it("returns true", () => {
		expect(AD.isInit(AD.Init)).toBeTruthy();
		expect(pipe(AD.Init, AD.isInit)).toBeTruthy();
	});

	it("returns false", () => {
		expect(AD.isInit(AD.Loading)).toBeFalsy();
		expect(pipe(AD.Complete(0), AD.isInit)).toBeFalsy();
	});

	// it('*', () => {
	//   expect(AD.isInit(AD.Init)).toEqual(true)
	//   expect(pipe(AD.Init, AD.isInit)).toEqual(true)
	//   expect(AD.isInit(AD.Reloading('hello world'))).toEqual(false)
	//   expect(pipe(AD.Complete('hello world'), AD.isInit)).toEqual(false)
	// })
});
