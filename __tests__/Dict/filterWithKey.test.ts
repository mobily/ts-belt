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

describe('filterWithKey', () => {
  it('provides correct types', () => {
    expectType<Partial<T>>(D.filterWithKey(user, value => value === 20))

    D.filterWithKey(user, (value, key) => {
      expectType<string | number>(value)
      expectType<'name' | 'age'>(key)

      return value === 20
    })
  })

  it('removes each property that doesn not satisfy the given predicate function', () => {
    expect(D.filterWithKey(user, (_value, key) => key === 'age')).toEqual({
      age: 20,
    })
    expect(
      D.filterWithKey(user, (value, key) => value === 30 && key === 'age'),
    ).toEqual({})
  })

  it('*', () => {
    expect(
      D.filterWithKey(
        { name: 'Joe', age: 20 },
        (value, key) => value === 30 && key === 'age',
      ),
    ).toEqual({})
  })
})

describe('filterWithKey (pipe)', () => {
  it('provides correct types', () => {
    expectType<Partial<T>>(
      pipe(
        user,
        D.filterWithKey(value => value === 20),
      ),
    )

    pipe(
      user,
      D.filterWithKey((value, key) => {
        expectType<string | number>(value)
        expectType<'name' | 'age'>(key)
        return value === 20
      }),
    )
  })

  it('removes each property that doesn not satisfy the given predicate function', () => {
    expect(
      pipe(
        user,
        D.filterWithKey((_value, key) => key === 'age'),
      ),
    ).toEqual({ age: 20 })

    expect(
      pipe(
        user,
        D.filterWithKey((value, key) => value === 30 && key === 'age'),
      ),
    ).toEqual({})
  })

  it('*', () => {
    expect(
      pipe(
        {
          name: 'Joe',
          age: 20,
        },
        D.filterWithKey((_value, key) => key === 'name'),
      ),
    ).toEqual({ name: 'Joe' })
  })
})
