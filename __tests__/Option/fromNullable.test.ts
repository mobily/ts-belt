import { O } from '../..'

describe('fromNullable', () => {
  it('returns None', () => {
    expect(O.fromNullable(null)).toEqual(O.None)
    expect(O.fromNullable(undefined)).toEqual(O.None)
  })

  it('returns Some', () => {
    expect(O.fromNullable('value')).toEqual(O.Some('value'))
    expect(O.fromNullable([])).toEqual(O.Some([]))
    expect(O.fromNullable({})).toEqual(O.Some({}))
    expect(O.fromNullable(0)).toEqual(O.Some(0))
    expect(O.fromNullable(1)).toEqual(O.Some(1))
    expect(O.fromNullable(false)).toEqual(O.Some(false))
    expect(O.fromNullable(true)).toEqual(O.Some(true))
  })

  it('*', () => {
    const { Some, None } = O

    expect(O.fromNullable(1)).toEqual(Some(1))
    expect(O.fromNullable('hello world')).toEqual(Some('hello world'))
    expect(O.fromNullable([])).toEqual(Some([]))
    expect(O.fromNullable(false)).toEqual(Some(false))
    expect(O.fromNullable(null)).toEqual(None)
    expect(O.fromNullable(undefined)).toEqual(None)
  })
})
