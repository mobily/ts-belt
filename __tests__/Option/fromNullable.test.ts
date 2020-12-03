import { None, Some, fromNullable } from '@mobily/ts-belt/Option'

describe('fromNullable', () => {
  it('should return None', () => {
    expect(fromNullable(null)).toEqual(None)
    expect(fromNullable(undefined)).toEqual(None)
  })

  it('should return Some', () => {
    expect(fromNullable('value')).toEqual(Some('value'))
    expect(fromNullable([])).toEqual(Some([]))
    expect(fromNullable({})).toEqual(Some({}))
    expect(fromNullable(0)).toEqual(Some(0))
    expect(fromNullable(1)).toEqual(Some(1))
    expect(fromNullable(false)).toEqual(Some(false))
    expect(fromNullable(true)).toEqual(Some(true))
  })
})
