import { pipe } from '@mobily/ts-belt'
import { fromNullable, match } from '@mobily/ts-belt/Result'

describe('match', () => {
  it('should return a result of errorFn', () => {
    expect(
      pipe(
        fromNullable('this is bad', null),
        match(
          _ => 'this is fine',
          error => `${error}!`,
        ),
      ),
    ).toEqual('this is bad!')
  })

  it('should return a result of okFn', () => {
    expect(
      pipe(
        fromNullable('this is bad', 'this is fine'),
        match(
          str => `${str}!`,
          error => error,
        ),
      ),
    ).toEqual('this is fine!')
  })
})
