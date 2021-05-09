import { pipe, R } from '../..'

describe('toUndefined', () => {
  it('should return null', () => {
    expect(pipe(R.Error('this is bad'), R.toUndefined)).toBe(undefined)
    expect(
      pipe(
        R.fromNullable('this is bad', 'value'),
        R.flatMap(_ => R.Error('new error')),
        R.toUndefined,
      ),
    ).toBe(undefined)
    expect(
      pipe(
        R.fromNullable('this is bad', null),
        R.flatMap(_ => R.Ok('this is fine')),
        R.toUndefined,
      ),
    ).toBe(undefined)
  })

  it('should return a value', () => {
    expect(pipe(R.Ok('value'), R.toUndefined)).toBe('value')
    expect(pipe(R.fromNullable('this is bad', 'value'), R.toUndefined)).toBe('value')
    expect(
      pipe(
        R.fromNullable('this is bad', 'this is fine'),
        R.flatMap(str => R.Ok(`${str}!`)),
        R.toUndefined,
      ),
    ).toBe('this is fine!')
  })
})
