import { pipe } from '@mobily/ts-belt'
import { fromNullable, match } from '@mobily/ts-belt/Result'

describe('match', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        match(
          _ => 'ok',
          value => value,
        ),
      ),
    ).toEqual('error')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', 'ok'),
        match(
          str => str,
          () => 'none',
        ),
      ),
    ).toEqual('ok')
  })
})
