import { O } from '../..'

describe('fromNullable', () => {
  it('returns None', () => {
    expect(O.fromNullable(null)).toBeNone()
    expect(O.fromNullable(undefined)).toBeNone()
  })

  it('returns Some', () => {
    expect(O.fromNullable('value')).toBeSome('value')
    expect(O.fromNullable([])).toBeSome([])
    expect(O.fromNullable({})).toBeSome({})
    expect(O.fromNullable(0)).toBeSome(0)
    expect(O.fromNullable(1)).toBeSome(1)
    expect(O.fromNullable(false)).toBeSome(false)
    expect(O.fromNullable(true)).toBeSome(true)
  })
})
