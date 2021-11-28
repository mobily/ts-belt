import { pipe, R } from '../..'

describe('toNullable', () => {
  it('returns null', () => {
    expect(pipe(R.Error('this is bad'), R.toNullable)).toBe(null)
    expect(
      pipe(
        R.fromNullable('value', 'this is bad'),
        R.flatMap(_ => R.Error('new error')),
        R.toNullable,
      ),
    ).toBe(null)
    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.flatMap(_ => R.Ok('this is fine')),
        R.toNullable,
      ),
    ).toBe(null)
  })

  it('returns a value', () => {
    expect(pipe(R.Ok('value'), R.toNullable)).toBe('value')
    expect(pipe(R.fromNullable('value', 'this is bad'), R.toNullable)).toBe('value')
    expect(
      pipe(
        R.fromNullable('this is fine', 'this is bad'),
        R.flatMap(str => R.Ok(`${str}!`)),
        R.toNullable,
      ),
    ).toBe('this is fine!')
  })
})
