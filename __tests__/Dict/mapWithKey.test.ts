import { expectType } from 'ts-expect'

import { D, pipe } from '../..'

type T = {
  readonly name: string
  readonly location: string
}

const user: T = {
  name: 'Joe',
  location: 'Warsaw',
}

describe('mapWithKey', () => {
  it('provides correct types', () => {
    expectType<Record<keyof T, number>>(
      D.mapWithKey(user, value => value.length),
    )

    D.mapWithKey(user, value => {
      expectType<string>(value)
      return value.length
    })
  })

  it('transforms each value in the object to a new value using the provided function', () => {
    expect(
      D.mapWithKey(user, (value, key) => value.length + key.length),
    ).toEqual({ name: 7, location: 14 })
  })

  it('*', () => {
    expect(
      D.mapWithKey(
        {
          name: 'Joe',
          location: 'Warsaw',
        },
        (value, key) => `${key}-${value.toLowerCase()}`,
      ),
    ).toEqual({ name: 'name-joe', location: 'location-warsaw' })
  })
})

describe('mapWithKey (pipe)', () => {
  it('provides correct types', () => {
    expectType<Record<keyof T, number>>(
      pipe(
        user,
        D.mapWithKey(value => value.length),
      ),
    )

    pipe(
      user,
      D.mapWithKey(value => {
        expectType<string>(value)
        return value.length
      }),
    )
  })

  it('transforms each value in the object to a new value using the provided function', () => {
    expect(
      pipe(
        user,
        D.mapWithKey((value, key) => value.length + key.length),
      ),
    ).toEqual({ name: 7, location: 14 })
  })

  it('*', () => {
    expect(
      pipe(
        {
          name: 'Joe',
          location: 'Warsaw',
        },
        D.mapWithKey((value, key) => `${key}-${value.toLowerCase()}`),
      ),
    ).toEqual({ name: 'name-joe', location: 'location-warsaw' })
  })
})
