import { pipe, O } from '../..'

describe('isNone', () => {
  it('returns true', () => {
    expect(O.isNone(O.None)).toBeTruthy()
    expect(pipe(O.fromNullable(null), O.isNone)).toBeTruthy()
  })

  it('returns false', () => {
    expect(O.isNone(O.Some('value'))).toBeFalsy()
    expect(pipe(O.fromNullable('value'), O.isNone)).toBeFalsy()
  })
})
