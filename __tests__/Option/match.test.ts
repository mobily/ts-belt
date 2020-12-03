import { pipe } from '@mobily/ts-belt'
import { fromNullable, match } from '@mobily/ts-belt/Option'

describe('match', () => {
  it('should return a result of someFn', () => {
    expect(
      pipe(
        fromNullable(null),
        match(
          _ => 'this is fine',
          () => 'this is bad',
        ),
      ),
    ).toEqual('this is bad')
  })

  it('should return a result of noneFn', () => {
    expect(
      pipe(
        fromNullable('this is fine'),
        match(
          str => `${str}!`,
          () => 'this is bad',
        ),
      ),
    ).toEqual('this is fine!')
  })
})
