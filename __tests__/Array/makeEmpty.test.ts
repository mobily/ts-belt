import { expectType } from 'ts-expect'

import { A } from '../..'

describe('makeEmpty', () => {
	it('provides correct types', () => {
		expectType<ReadonlyArray<number>>(A.makeEmpty<number>())
		expectType<ReadonlyArray<string>>(A.makeEmpty<string>())
	})

	it('creates an empty array', () => {
		const result = A.makeEmpty<string>()
		expect(result).toEqual([])
	})

	it('*', () => {
		expect(A.makeEmpty<number>()).toEqual([])
	})
})
