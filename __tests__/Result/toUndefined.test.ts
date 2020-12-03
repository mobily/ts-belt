import { pipe } from '@mobily/ts-belt'
import { Error, Ok, flatMap, fromNullable, toUndefined } from '@mobily/ts-belt/Result'

describe('toUndefined', () => {
  it('should return null', () => {
    expect(pipe(Error('this is bad'), toUndefined)).toBe(undefined)
    expect(
      pipe(
        fromNullable('this is bad', 'value'),
        flatMap(_ => Error('new error')),
        toUndefined,
      ),
    ).toBe(undefined)
    expect(
      pipe(
        fromNullable('this is bad', null),
        flatMap(_ => Ok('this is fine')),
        toUndefined,
      ),
    ).toBe(undefined)
  })

  it('should return a value', () => {
    expect(pipe(Ok('value'), toUndefined)).toBe('value')
    expect(pipe(fromNullable('this is bad', 'value'), toUndefined)).toBe('value')
    expect(
      pipe(
        fromNullable('this is bad', 'this is fine'),
        flatMap(str => Ok(`${str}!`)),
        toUndefined,
      ),
    ).toBe('this is fine!')
  })
})
