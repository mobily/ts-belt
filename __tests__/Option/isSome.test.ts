import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, isSome } from '@mobily/ts-belt/Option'

describe('isSome', () => {
  it('should return true', () => {
    expect(isSome(Some('string'))).toBeTruthy()
    expect(pipe(fromNullable('value'), isSome)).toBeTruthy()
  })

  it('should return false', () => {
    expect(isSome(None)).toBeFalsy()
    expect(pipe(fromNullable(null), isSome)).toBeFalsy()
  })
})
