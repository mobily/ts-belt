import { pipe, O } from '../..'

describe('isSome', () => {
  it('returns true', () => {
    expect(O.isSome(O.Some('string'))).toBeTruthy()
    expect(pipe(O.fromNullable('value'), O.isSome)).toBeTruthy()
  })

  it('returns false', () => {
    expect(O.isSome(O.None)).toBeFalsy()
    expect(pipe(O.fromNullable(null), O.isSome)).toBeFalsy()
  })

  it('*', () => {
    expect(O.isSome(O.Some('hello world!'))).toEqual(true)
    expect(pipe(O.fromNullable('hello world!'), O.isSome)).toEqual(true)
    expect(O.isSome(O.None)).toEqual(false)
    expect(pipe(O.fromNullable(null), O.isSome)).toEqual(false)
  })
})
