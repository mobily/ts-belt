import { expectType } from 'ts-expect'

import { D, pipe } from '../..'

const obj = {
  0: true,
  x: 1,
  y: 'abc',
}

describe('set', () => {
  it('provides correct types', () => {
    expectType<typeof obj>(D.update(obj, 'x', v => v + 1))
    expectType<typeof obj>(D.update(obj, 0, v => !!v))

    expectType<Omit<typeof obj, 0> & { 0: number }>(D.update(obj, 0, v => +v))
    expectType<Omit<typeof obj, 'y'> & { y: number }>(
      D.update(obj, 'y', v => v.length),
    )
  })

  it('adds a new property or updates an existing one.', () => {
    expect(D.update(obj, 'x', v => v + 1)).toEqual({ ...obj, x: 2 })
    expect(D.update(obj, 'y', v => v.length)).toEqual({ ...obj, y: 3 })
  })

  it('*', () => {
    expect(
      D.update({ name: 'Joe', location: 'Warsaw' }, 'name', v =>
        v.toUpperCase(),
      ),
    ).toEqual({ name: 'JOE', location: 'Warsaw' })

    expect(D.update({ 0: false, 1: true }, 1, v => +v)).toEqual(
      // prettier-ignore
      { 0: false, 1: 1 },
    )
  })
})

describe('set (pipe)', () => {
  it('provides correct types', () => {
    expectType<typeof obj>(
      pipe(
        obj,
        D.update('x', v => v + 1),
      ),
    )
    expectType<typeof obj>(
      pipe(
        obj,
        D.update(0, v => !!v),
      ),
    )

    expectType<Omit<typeof obj, 0> & { 0: number }>(
      pipe(
        obj,
        D.update(0, v => +v),
      ),
    )
    expectType<Omit<typeof obj, 'y'> & { y: number }>(
      pipe(
        obj,
        D.update('y', v => v.length),
      ),
    )
  })

  it('adds a new property or updates an existing one.', () => {
    expect(
      pipe(
        obj,
        D.update('x', v => v + 1),
      ),
    ).toEqual({ ...obj, x: 2 })
    expect(
      pipe(
        obj,
        D.update('y', v => v.length),
      ),
    ).toEqual({ ...obj, y: 3 })
  })

  it('*', () => {
    expect(
      pipe(
        { name: 'Joe', location: 'Warsaw' },
        D.update('name', v => v.toUpperCase()),
      ),
    ).toEqual({ name: 'JOE', location: 'Warsaw' })

    expect(
      pipe(
        { 0: false, 1: true },
        D.update(1, v => +v),
      ),
    ).toEqual(
      // prettier-ignore
      { 0: false, 1: 1 },
    )
  })
})
