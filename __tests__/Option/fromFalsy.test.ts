import { O } from '../..'

describe('fromFalsy', () => {
  it('should return None', () => {
    expect(O.fromFalsy(null)).toBeNone()
    expect(O.fromFalsy(undefined)).toBeNone()
    expect(O.fromFalsy(0)).toBeNone()
    expect(O.fromFalsy('')).toBeNone()
    expect(O.fromFalsy(false)).toBeNone()
  })

  it('should return Some', () => {
    expect(O.fromFalsy('value')).toBeSome('value')
    expect(O.fromFalsy(1)).toBeSome(1)
    expect(O.fromFalsy([])).toBeSome([])
    expect(O.fromFalsy({})).toBeSome({})
  })
})
