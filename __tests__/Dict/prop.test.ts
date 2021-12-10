import { expectType } from 'ts-expect'

import { D, A, pipe } from '../..'

const obj = {
  x: 1,
  y: 2,
  z: 'three',
}

describe('prop', () => {
  it('provides correct types', () => {
    expectType<number>(D.prop(obj, 'x'))
    expectType<string>(D.prop(obj, 'z'))
    expectType<ReadonlyArray<string>>(A.map([obj, obj], D.prop('z')))
  })

  it('returns the value of the given property', () => {
    expect(D.prop(obj, 'x')).toEqual(1)
  })

  it('*', () => {
    expect(D.prop({ name: 'Joe', location: 'Warsaw' }, 'location')).toEqual(
      'Warsaw',
    )
  })
})

describe('prop (pipe)', () => {
  it('provides correct types', () => {
    expectType<number>(pipe(obj, D.prop('x')))
    expectType<string>(pipe(obj, D.prop('z')))
  })

  it('returns the value of the given property', () => {
    expect(pipe(obj, D.prop('x'))).toEqual(1)
  })

  it('*', () => {
    expect(
      pipe({ name: 'Joe', location: 'Warsaw' }, D.prop('location')),
    ).toEqual('Warsaw')
    expect(
      pipe([{ name: 'Joe' }, { name: 'Lisa' }], A.map(D.prop('name'))),
    ).toEqual(['Joe', 'Lisa'])
  })
})
