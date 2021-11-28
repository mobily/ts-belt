import { pipe, O } from '../..'

describe('match', () => {
  it('returns a result of someFn', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.match(
          _ => 'this is fine',
          () => 'this is bad',
        ),
      ),
    ).toEqual('this is bad')
  })

  it('returns a result of noneFn', () => {
    expect(
      pipe(
        O.fromNullable('this is fine'),
        O.match(
          str => `${str}!`,
          () => 'this is bad',
        ),
      ),
    ).toEqual('this is fine!')
  })
})
