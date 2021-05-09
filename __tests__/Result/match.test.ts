import { pipe, R } from '../..'

describe('match', () => {
  it('should return a result of errorFn', () => {
    expect(
      pipe(
        R.fromNullable('this is bad', null),
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
        R.fromNullable('this is bad', 'this is fine'),
        R.match(
          str => `${str}!`,
          error => error,
        ),
      ),
    ).toEqual('this is fine!')
  })
})
