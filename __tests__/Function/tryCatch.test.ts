import { expectType } from 'ts-expect'

import { F, O, R, pipe } from '../..'

type User = {
	readonly name: string
}

const throwError = (_x: number): number => {
	throw new Error('fix me!')
}

describe('tryCatch', () => {
	it('provides correct types', () => {
		expectType<R.Result<unknown, Error>>(F.tryCatch('<>', JSON.parse))
		expectType<R.Result<User, Error>>(
			F.tryCatch<string, User>('{"name": "Joe"}', JSON.parse),
		)
		expectType<R.Result<number, Error>>(F.tryCatch(1, throwError))
		F.tryCatch('hello', str => {
			expectType<string>(str)
		})
	})

	it('returns correct value', () => {
		expect(F.tryCatch(123, throwError)).toEqual(R.Error(new Error('fix me!')))
	})

	it('*', () => {
		const { Ok } = R

		expect(
			/*
      type User = {
        readonly prop: string
      }
      */
			F.tryCatch('{"name": "Joe"}', JSON.parse),
		).toEqual(
			// prettier-ignore
			Ok({ name: 'Joe' }),
		)
		expect(F.tryCatch('<>', JSON.parse)).toEqual(
			R.Error(new Error(`Unexpected token '<', "<>" is not valid JSON`)),
		)
	})
})

describe('tryCatch (pipe)', () => {
	it('provides correct types', () => {
		expectType<R.Result<unknown, Error>>(pipe('<>', F.tryCatch(JSON.parse)))
		expectType<R.Result<User, Error>>(
			pipe('{"name": "Joe"}', F.tryCatch<string, User>(JSON.parse)),
		)
		expectType<R.Result<number, Error>>(F.tryCatch(1, throwError))
		pipe(
			'hello',
			F.tryCatch(str => {
				expectType<string>(str)
			}),
		)
	})

	it('returns correct value', () => {
		expect(pipe(123, F.tryCatch(throwError))).toEqual(
			R.Error(new Error('fix me!')),
		)
	})

	it('*', () => {
		expect(
			pipe(
				'{"name": "Joe"}',
				F.tryCatch<string, User>(JSON.parse),
				R.map(user => user.name),
				R.getWithDefault('oops'),
			),
		).toEqual('Joe')
		expect(
			pipe('<>', F.tryCatch(JSON.parse), R.toOption, O.getWithDefault('oops')),
		).toEqual('oops')
	})
})
