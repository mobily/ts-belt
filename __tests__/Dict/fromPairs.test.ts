import { expectType } from 'ts-expect'

import { D, pipe } from '../..'

const xs = [
  ['day', 10],
  ['age', 20],
] as readonly (readonly [string, number])[]

const ys = [
  [0, 'Joe'],
  [1, 20],
] as readonly (readonly [number, string | number])[]

describe('fromPairs', () => {
  it('provides correct types', () => {
    expectType<Record<string, number>>(D.fromPairs(xs))
    expectType<Record<string, string | number>>(D.fromPairs(ys))
  })

  it('creates a new object from an array of tuples', () => {
    expect(D.fromPairs(xs)).toEqual({
      day: 10,
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
    expectType<Record<string, number>>(pipe(xs, D.fromPairs))
  })

  it('creates a new object from an array of tuples', () => {
    expect(pipe(xs, D.fromPairs)).toEqual({ day: 10, age: 20 })
  })

  it('*', () => {
    expect(
      pipe(
        [
          ['name', 'Joe'],
          ['location', 'Warsaw'],
        ] as const,
        D.fromPairs,
      ),
    ).toEqual({ name: 'Joe', location: 'Warsaw' })
  })
})
