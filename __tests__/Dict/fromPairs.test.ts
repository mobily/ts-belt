import { expectType } from 'ts-expect'

import { A, D, pipe } from '../..'

const xs = [
  ['name', 'Joe'],
  ['age', 20],
] as readonly (readonly [string, string | number])[]

describe('fromPairs', () => {
  it('provides correct types', () => {
    expectType<Record<string, string | number>>(D.fromPairs(xs))
  })

  it('creates a new object from an array of tuples', () => {
    expect(D.fromPairs(xs)).toEqual({
      name: 'Joe',
      age: 20,
    })
  })

  it('*', () => {
    expect(
      D.fromPairs([
        ['name', 'Joe'],
        ['location', 'Warsaw'],
      ]),
    ).toEqual({ name: 'Joe', location: 'Warsaw' })
  })
})

describe('fromPairs (pipe)', () => {
  it('provides correct types', () => {
    expectType<Record<string, string | number>>(pipe(xs, D.fromPairs))
  })

  it('creates a new object from an array of tuples', () => {
    expect(pipe(xs, D.fromPairs)).toEqual({ name: 'Joe', age: 20 })
  })

  it('*', () => {
    expect(
      pipe(
        [A.toTuple(['name', 'Joe']), A.toTuple(['location', 'Warsaw'])],
        D.fromPairs,
      ),
    ).toEqual({ name: 'Joe', location: 'Warsaw' })
  })
})
