import { None, Some, fromFalsy } from '@mobily/ts-belt/Option'

describe('fromFalsy', () => {
  it('*', () => {
    expect(fromFalsy(null)).toEqual(None)
    expect(fromFalsy(undefined)).toEqual(None)
    expect(fromFalsy(0)).toEqual(None)
    expect(fromFalsy('')).toEqual(None)
    expect(fromFalsy(false)).toEqual(None)
  })

  it('*', () => {
    expect(fromFalsy('string')).toEqual(Some('string'))
    expect(fromFalsy([])).toEqual(Some([]))
    expect(fromFalsy({})).toEqual(Some({}))
  })
})
