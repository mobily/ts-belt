import { pipe, R } from '../..'

describe('toUndefined', () => {
  it('returns null', () => {
    expect(pipe(R.Error('this is bad'), R.toUndefined)).toBe(undefined)
    expect(
      pipe(
        R.fromNullable('value', 'this is bad'),
        R.flatMap(_ => R.Error('new error')),
        R.toUndefined,
      ),
    ).toBe(undefined)
    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.flatMap(_ => R.Ok('this is fine')),
        R.toUndefined,
      ),
    ).toBe(undefined)
  })

  it('returns a value', () => {
    expect(pipe(R.Ok('value'), R.toUndefined)).toBe('value')
    expect(pipe(R.fromNullable('value', 'this is bad'), R.toUndefined)).toBe('value')
    expect(
      pipe(
        R.fromNullable('this is fine', 'this is bad'),
        R.flatMap(str => R.Ok(`${str}!`)),
        R.toUndefined,
      ),
    ).toBe('this is fine!')
  })
})
