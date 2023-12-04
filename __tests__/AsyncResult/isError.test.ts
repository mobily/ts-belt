import { expectType } from 'ts-expect'

import { AR, pipe } from '../..'

describe('isError', () => {
  it('provides correct types', () => {
    expectType<boolean>(AR.isError(AR.resolve("")))
  })

  it('returns true', () => {
    expect(AR.isError(AR.reject(""))).toBeTruthy()
    expect(pipe(AR.reject(""), AR.isError)).toBeTruthy()
  })

  it('returns false', () => {
    expect(AR.isError(AR.resolve(""))).toBeFalsy()
    expect(pipe(AR.resolve(""), AR.isError)).toBeFalsy()
  })
})
