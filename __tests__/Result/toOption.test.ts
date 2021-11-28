import { pipe, R } from '../..'

describe('toOption', () => {
  it('returns None', () => {
    expect(pipe(R.fromNullable(null, 'this is bad'), R.toOption)).toBeNone()
    expect(
      pipe(
        R.fromNullable('value', 'this is bad'),
        R.flatMap(_ => R.Error('new error')),
        R.toOption,
      ),
    ).toBeNone()
    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.flatMap(_ => R.Ok('this is fine')),
        R.toOption,
      ),
    ).toBeNone()
  })

  it('returns Some', () => {
    expect(pipe(R.Ok('value'), R.toOption)).toBeSome('value')
    expect(pipe(R.fromNullable('value', 'this is bad'), R.toOption)).toBeSome('value')
    expect(
      pipe(
        R.fromNullable('this is fine', 'this is bad'),
        R.flatMap(str => R.Ok(`${str}!`)),
        R.toOption,
      ),
    ).toBeSome('this is fine!')
  })
})
