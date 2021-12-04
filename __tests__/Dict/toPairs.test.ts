import { expectType } from 'ts-expect'

import { D, pipe } from '../..'

type T = {
  readonly name: string
  readonly age: number
}

const user: T = {
  name: 'Joe',
  age: 20,
}

describe('toPairs', () => {
  it('provides correct types', () => {
    expectType<ReadonlyArray<readonly [string, string | number]>>(
      D.toPairs(user),
    )
  })

  it('converts an object into an array of [key, value] tuples.', () => {
    expect(D.toPairs(user)).toEqual([
      ['name', 'Joe'],
      ['age', 20],
    ])
  })

  it('*', () => {
    expect(
      D.toPairs({
        name: 'Joe',
        age: 20,
      }),
    ).toEqual(
      // prettier-ignore
      [['name', 'Joe'], ['age', 20]],
    )
  })
})

describe('toPairs (pipe)', () => {
  it('provides correct types', () => {
    expectType<ReadonlyArray<readonly [string, string | number]>>(
      pipe(user, D.toPairs),
    )
  })

  it('converts an object into an array of [key, value] tuples.', () => {
    expect(pipe(user, D.toPairs)).toEqual([
      ['name', 'Joe'],
      ['age', 20],
    ])
  })

  it('*', () => {
    expect(
      pipe(
        {
          name: 'Joe',
          age: 20,
        },
        D.toPairs,
      ),
    ).toEqual(
      // prettier-ignore
      [['name', 'Joe'], ['age', 20]],
    )
  })
})
