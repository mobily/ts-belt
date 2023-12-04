import { expectType } from 'ts-expect'

import { AR, pipe } from '../..'

describe('isOk', () => {
  it('provides correct types', () => {
    expectType<boolean>(AR.isOk(AR.resolve("")))
  })

  it('returns true', () => {
    expect(AR.isOk(AR.resolve(""))).toBeTruthy()
    expect(pipe(AR.resolve(""), AR.isOk)).toBeTruthy()
  })

  it('returns false', () => {
    expect(AR.isOk(AR.reject(""))).toBeFalsy()
    expect(pipe(AR.reject(""), AR.isOk)).toBeFalsy()
  })
})
