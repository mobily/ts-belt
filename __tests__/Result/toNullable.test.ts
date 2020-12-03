import { pipe } from '@mobily/ts-belt'
import { Error, Ok, flatMap, fromNullable, toNullable } from '@mobily/ts-belt/Result'

describe('toNullable', () => {
  it('should return null', () => {
    expect(pipe(Error('this is bad'), toNullable)).toBe(null)
    expect(
      pipe(
        fromNullable('this is bad', 'value'),
        flatMap(_ => Error('new error')),
        toNullable,
      ),
    ).toBe(null)
    expect(
      pipe(
        fromNullable('this is bad', null),
        flatMap(_ => Ok('this is fine')),
        toNullable,
      ),
    ).toBe(null)
  })

  it('should return a value', () => {
    expect(pipe(Ok('value'), toNullable)).toBe('value')
    expect(pipe(fromNullable('this is bad', 'value'), toNullable)).toBe('value')
    expect(
      pipe(
        fromNullable('this is bad', 'this is fine'),
        flatMap(str => Ok(`${str}!`)),
        toNullable,
      ),
    ).toBe('this is fine!')
  })
})
