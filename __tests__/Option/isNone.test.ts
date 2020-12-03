import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, isNone } from '@mobily/ts-belt/Option'

describe('isNone', () => {
  it('should return true', () => {
    expect(isNone(None)).toBeTruthy()
    expect(pipe(fromNullable(null), isNone)).toBeTruthy()
  })

  it('should return false', () => {
    expect(isNone(Some('value'))).toBeFalsy()
    expect(pipe(fromNullable('value'), isNone)).toBeFalsy()
  })
})
