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
})
