import { pipe, O } from '../..'

describe('isNone', () => {
  it('should return true', () => {
    expect(O.isNone(O.None)).toBeTruthy()
    expect(pipe(O.fromNullable(null), O.isNone)).toBeTruthy()
  })

  it('should return false', () => {
    expect(O.isNone(O.Some('value'))).toBeFalsy()
    expect(pipe(O.fromNullable('value'), O.isNone)).toBeFalsy()
  })
})
