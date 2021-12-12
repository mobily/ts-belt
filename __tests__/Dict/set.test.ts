import { expectType } from 'ts-expect'

import { D, pipe } from '../..'

const obj = {
  x: 1,
  y: 'abc',
}

describe('set', () => {
  it('provides correct types', () => {
    expectType<typeof obj & { z: boolean }>(D.set(obj, 'z', true))
    expectType<typeof obj>(D.set(obj, 'y', 'def'))
    expectType<Omit<typeof obj, 'y'> & { y: number }>(D.set(obj, 'y', 123))
  })

  it('adds a new property or updates an existing one.', () => {
    expect(D.set(obj, 'z', true)).toEqual({ ...obj, z: true })
    expect(D.set(obj, 'x', 2)).toEqual({ ...obj, x: 2 })
  })

  it('*', () => {
    expect(
      D.set({ name: 'Joe', location: 'Warsaw' }, 'location', 'Gdańsk'),
    ).toEqual({ name: 'Joe', location: 'Gdańsk' })
  })
})

describe('set (pipe)', () => {
  it('provides correct types', () => {
    expectType<typeof obj & { z: boolean }>(pipe(obj, D.set('z', true)))
    expectType<typeof obj>(pipe(obj, D.set('y', 'def')))
    expectType<Omit<typeof obj, 'y'> & { y: number }>(
      pipe(obj, D.set('y', 123)),
    )
  })

  it('adds a new property or updates an existing one.', () => {
    expect(pipe(obj, D.set('z', true))).toEqual({ ...obj, z: true })
    expect(pipe(obj, D.set('x', 2))).toEqual({ ...obj, x: 2 })
  })

  it('*', () => {
    expect(
      pipe({ name: 'Joe', location: 'Warsaw' }, D.set('location', 'Gdańsk')),
    ).toEqual({ name: 'Joe', location: 'Gdańsk' })
  })
})
