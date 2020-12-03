import { None, Some, fromFalsy } from '@mobily/ts-belt/Option'

describe('fromFalsy', () => {
  it('should return None', () => {
    expect(fromFalsy(null)).toEqual(None)
    expect(fromFalsy(undefined)).toEqual(None)
    expect(fromFalsy(0)).toEqual(None)
    expect(fromFalsy('')).toEqual(None)
    expect(fromFalsy(false)).toEqual(None)
  })

  it('should return Some', () => {
    expect(fromFalsy('value')).toEqual(Some('value'))
    expect(fromFalsy(1)).toEqual(Some(1))
    expect(fromFalsy([])).toEqual(Some([]))
    expect(fromFalsy({})).toEqual(Some({}))
  })
})
