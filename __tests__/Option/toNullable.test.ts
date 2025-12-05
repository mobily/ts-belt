import { expectType } from 'ts-expect'
import { A, O, pipe } from '../..'

describe('toNullable', () => {
	it('provides correct types', () => {
		expectType<null>(O.toNullable(O.None))
		expectType<string | null>(O.toNullable(O.Some('hello')))
	})

	it('returns null', () => {
		expect(pipe(O.None, O.toNullable)).toBe(null)
		expect(
			pipe(
				O.fromNullable({ prop: null }),
				O.mapNullable(obj => obj.prop),
				O.toNullable,
			),
		).toEqual(null)
	})

	it('returns a value', () => {
		expect(pipe(O.Some('value'), O.toNullable)).toEqual('value')
		expect(
			pipe(
				O.fromNullable({ prop: 'value' }),
				O.mapNullable(obj => obj.prop),
				O.toNullable,
			),
		).toEqual('value')
	})

	it('*', () => {
		expect(
			pipe(
				O.fromNullable(['hello', 'world']),
				O.flatMap(A.takeExactly(2)),
				O.toNullable,
			),
		).toEqual(['hello', 'world'])
		expect(
			pipe(O.fromNullable([]), O.flatMap(A.takeExactly(2)), O.toNullable),
		).toEqual(null)
	})
})
