import { expectType } from 'ts-expect'

import { A, S, pipe } from '../..'

describe('startsWith', () => {
	it('provides correct types', () => {
		expectType<boolean>(S.startsWith('hello', 'h'))
		expectType<ReadonlyArray<`h${string}`>>(
			A.filter(['hello', 'world'], S.startsWith('h')),
		)
	})

	it('returns true if the given string starts with substr', () => {
		expect(S.startsWith('hello', 'o')).toEqual(false)
	})

	it('*', () => {
		expect(S.startsWith('hello', 'o')).toEqual(false)
	})
})

describe('startsWith (pipe)', () => {
	it('provides correct types', () => {
		expectType<boolean>(pipe('hello', S.startsWith('h')))
		expectType<ReadonlyArray<`h${string}`>>(
			pipe(['hello', 'world'], A.filter(S.startsWith('h'))),
		)
	})

	it('returns true if the given string ends with substr', () => {
		expect(pipe('ts-belt', S.startsWith('ts'))).toEqual(true)
	})

	it('*', () => {
		expect(pipe('ts-belt', S.startsWith('ts'))).toEqual(true)
	})
})
