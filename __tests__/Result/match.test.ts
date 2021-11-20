import { pipe, R } from '../..'

describe('match', () => {
  it('should return a result of errorFn', () => {
    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.match(
          _ => 'this is fine',
          error => `${error}!`,
        ),
      ),
    ).toEqual('this is bad!')
  })

  it('should return a result of okFn', () => {
    expect(
      pipe(
        R.fromNullable('this is fine', 'this is bad'),
        R.match(
          str => `${str}!`,
          error => error,
        ),
      ),
    ).toEqual('this is fine!')
  })
})
