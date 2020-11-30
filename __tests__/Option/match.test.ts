import { pipe } from '@mobily/ts-belt'
import { fromNullable, match } from '@mobily/ts-belt/Option'

describe('match', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        match(
          _ => 'some',
          () => 'none',
        ),
      ),
    ).toEqual('none')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('string'),
        match(
          str => str,
          () => 'none',
        ),
      ),
    ).toEqual('string')
  })
})
