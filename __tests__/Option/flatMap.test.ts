import { pipe } from '@mobily/ts-belt'
import { None, Some, flatMap, fromNullable } from '@mobily/ts-belt/Option'

describe('flatMap', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        flatMap(_ => Some(1)),
      ),
    ).toEqual(None)

    expect(
      pipe(
        fromNullable(undefined),
        flatMap(_ => None),
        flatMap(_ => Some('string')),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('string'),
        flatMap(_ => None),
      ),
    ).toEqual(None)
  })
})
