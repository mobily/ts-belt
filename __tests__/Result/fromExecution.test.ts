import { expectType } from 'ts-expect'
import { R } from '../..'

const okJSON = `{"name": "John"}`
const badJSON = `{name": John}`

type User = {
	readonly name: string
}

const SyntaxError = global.Error

const parseJSON =
	<T>(value: string) =>
	() => {
		return JSON.parse(value) as T
	}

describe('fromExecution', () => {
	it('provides correct types', () => {
		expectType<R.Result<User, Error>>(R.fromExecution(parseJSON<User>(okJSON)))
	})

	it('returns None', () => {
		expect(R.fromExecution(parseJSON(badJSON))).toEqual(
			R.Error(
				new SyntaxError(`Expected property name or '}' in JSON at position 1`),
			),
		)
	})

	it('returns Some', () => {
		expect(R.fromExecution(parseJSON(okJSON))).toEqual(
			R.Ok({
				name: 'John',
			}),
		)
	})

	it('*', () => {
		const { Ok, Error } = R

		expect(
			/*
      type User = { readonly name: string }
      const parseJSON = <T>(value: string) => () => JSON.parse(value) as T
      const okJSON = `{"name": "John"}`
      const badJSON = `{name": John}`
      */
			R.fromExecution(parseJSON<User>(okJSON)),
		).toEqual(Ok({ name: 'John' }))

		expect(R.fromExecution(parseJSON<User>(badJSON))).toEqual(
			Error(
				new SyntaxError(`Expected property name or '}' in JSON at position 1`),
			),
		)
	})
})
