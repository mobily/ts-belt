import { expectType } from 'ts-expect'

import { D, pipe } from '../..'

const obj = {
  x: 1,
  y: 'abc',
}

describe('assoc', () => {
  it('provides correct types', () => {
    expectType<typeof obj & { z: boolean }>(D.assoc(obj, 'z', true))
    expectType<typeof obj>(D.assoc(obj, 'y', 'def'))
    expectType<Omit<typeof obj, 'y'> & { y: number }>(D.assoc(obj, 'y', 123))
  })

  it('adds a new property or updates an existing one.', () => {
    expect(D.assoc(obj, 'z', true)).toEqual({ ...obj, z: true })
    expect(D.assoc(obj, 'x', 2)).toEqual({ ...obj, x: 2 })
  })

  it('*', () => {
    expect(
      D.assoc({ name: 'Joe', location: 'Warsaw' }, 'location', 'Gdańsk'),
    ).toEqual({ name: 'Joe', location: 'Gdańsk' })
  })
})

describe('assoc (pipe)', () => {
  it('provides correct types', () => {
    expectType<typeof obj & { z: boolean }>(pipe(obj, D.assoc('z', true)))
    expectType<typeof obj>(pipe(obj, D.assoc('y', 'def')))
    expectType<Omit<typeof obj, 'y'> & { y: number }>(
      pipe(obj, D.assoc('y', 123)),
    )
  })

  it('adds a new property or updates an existing one.', () => {
    expect(pipe(obj, D.assoc('z', true))).toEqual({ ...obj, z: true })
    expect(pipe(obj, D.assoc('x', 2))).toEqual({ ...obj, x: 2 })
  })

  it('*', () => {
    expect(
      pipe({ name: 'Joe', location: 'Warsaw' }, D.assoc('location', 'Gdańsk')),
    ).toEqual({ name: 'Joe', location: 'Gdańsk' })
  })
})
