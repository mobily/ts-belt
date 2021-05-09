import { pipe, O } from '../..'

describe('isSome', () => {
  it('should return true', () => {
    expect(O.isSome(O.Some('string'))).toBeTruthy()
    expect(pipe(O.fromNullable('value'), O.isSome)).toBeTruthy()
  })

  it('should return false', () => {
    expect(O.isSome(O.None)).toBeFalsy()
    expect(pipe(O.fromNullable(null), O.isSome)).toBeFalsy()
  })
})
