import { pipe, R } from '../..'

describe('toNullable', () => {
  it('should return null', () => {
    expect(pipe(R.Error('this is bad'), R.toNullable)).toBe(null)
    expect(
      pipe(
        R.fromNullable('this is bad', 'value'),
        R.flatMap(_ => R.Error('new error')),
        R.toNullable,
      ),
    ).toBe(null)
    expect(
      pipe(
        R.fromNullable('this is bad', null),
        R.flatMap(_ => R.Ok('this is fine')),
        R.toNullable,
      ),
    ).toBe(null)
  })

  it('should return a value', () => {
    expect(pipe(R.Ok('value'), R.toNullable)).toBe('value')
    expect(pipe(R.fromNullable('this is bad', 'value'), R.toNullable)).toBe('value')
    expect(
      pipe(
        R.fromNullable('this is bad', 'this is fine'),
        R.flatMap(str => R.Ok(`${str}!`)),
        R.toNullable,
      ),
    ).toBe('this is fine!')
  })
})
