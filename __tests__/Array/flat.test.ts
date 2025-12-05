import { A, pipe } from "../..";

// TODO: expectTypes
describe("flat", () => {
	// it('provides correct types', () => {
	//   expectType<ReadonlyArray<number>>(A.flat([1, 2, 3, 4, 5]))
	//   expectType<ReadonlyArray<number>>(A.flat([[1, 2], 3, [4, 5]]))
	//   expectType<ReadonlyArray<number>>(
	//     A.flat([
	//       [1, 2],
	//       [[3], [4, 5]],
	//     ]),
	//   )
	//   expectType<ReadonlyArray<(number | string | number[])[]>>(
	//     A.flat([
	//       [1, 2],
	//       [[3], ['hello', 'world']],
	//     ]),
	//   )
	// })

	it("flattens an array correctly", () => {
		const result = A.flat([[1, 2], 3, [4, 5]]);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("flattens nested arrays", () => {
		const result = A.flat([
			[1, 2],
			[[3], [4, 5]],
		]);
		expect(result).toEqual([1, 2, [3], [4, 5]]);
	});

	it("flattens a single value", () => {
		const result = A.flat([[1]]);
		expect(result).toEqual([1]);
	});
});

describe("flat (pipe)", () => {
	// it('provides correct types', () => {
	//   expectType<ReadonlyArray<number>>(pipe([1, 2, 3, 4, 5], A.flat))
	//   expectType<ReadonlyArray<number>>(pipe([[1, 2], 3, [4, 5]], A.flat))
	//   expectType<ReadonlyArray<number>>(
	//     pipe(
	//       [
	//         [1, 2],
	//         [[3], [4, 5]],
	//       ],
	//       A.flat,
	//     ),
	//   )
	//   expectType<ReadonlyArray<number | string>>(
	//     pipe(
	//       [
	//         [1, 2],
	//         [[3], ['hello', 'world']],
	//       ],
	//       A.flat,
	//     ),
	//   )
	// })

	it("flattens an array correctly", () => {
		const result = pipe([[1, 2], 3, [4, 5]], A.flat);
		expect(result).toEqual([1, 2, 3, 4, 5]);
	});

	it("flattens nested arrays", () => {
		const result = pipe(
			[
				[1, 2],
				[[3], [4, 5]],
			],
			A.flat,
		);
		expect(result).toEqual([1, 2, [3], [4, 5]]);
	});

	it("flattens a single value", () => {
		const result = pipe([[1]], A.flat);
		expect(result).toEqual([1]);
	});
});
