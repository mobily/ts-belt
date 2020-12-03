import { pipe } from '@mobily/ts-belt'
import { Error, Ok, fromNullable, isError } from '@mobily/ts-belt/Result'

describe('isError', () => {
  it('should return true', () => {
    expect(isError(Error('bad'))).toBeTruthy()
    expect(pipe(fromNullable('this is bad', null), isError)).toBeTruthy()
  })

  it('should return false', () => {
    expect(isError(Ok('good'))).toBeFalsy()
    expect(pipe(fromNullable('this is bad', 'value'), isError)).toBeFalsy()
  })
})
