import { pipe } from '@mobily/ts-belt'
import { Error, Ok, fromNullable, isOk } from '@mobily/ts-belt/Result'

describe('isOk', () => {
  it('should return true', () => {
    expect(isOk(Ok('this is fine'))).toBeTruthy()
    expect(pipe(fromNullable('this is bad', 'value'), isOk)).toBeTruthy()
  })

  it('should return false', () => {
    expect(isOk(Error('this is bad'))).toBeFalsy()
    expect(pipe(fromNullable('this is bad', null), isOk)).toBeFalsy()
  })
})
