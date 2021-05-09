import { pipe, R } from '../..'

describe('toOption', () => {
  it('should return None', () => {
    expect(pipe(R.fromNullable('this is bad', null), R.toOption)).toBeNone()
    expect(
      pipe(
        R.fromNullable('this is bad', 'value'),
        R.flatMap(_ => R.Error('new error')),
        R.toOption,
      ),
    ).toBeNone()
    expect(
      pipe(
        R.fromNullable('this is bad', null),
        R.flatMap(_ => R.Ok('this is fine')),
        R.toOption,
      ),
    ).toBeNone()
  })

  it('should return Some', () => {
    expect(pipe(R.Ok('value'), R.toOption)).toBeSome('value')
    expect(pipe(R.fromNullable('this is bad', 'value'), R.toOption)).toBeSome('value')
    expect(
      pipe(
        R.fromNullable('this is bad', 'this is fine'),
        R.flatMap(str => R.Ok(`${str}!`)),
        R.toOption,
      ),
    ).toBeSome('this is fine!')
  })
})
