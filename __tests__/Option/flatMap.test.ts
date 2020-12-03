import { pipe } from '@mobily/ts-belt'
import { None, Some, flatMap, fromNullable } from '@mobily/ts-belt/Option'

describe('flatMap', () => {
  it('should return None', () => {
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
        flatMap(_ => Some('value')),
      ),
    ).toEqual(None)

    expect(
      pipe(
        fromNullable('value'),
        flatMap(_ => None),
      ),
    ).toEqual(None)
  })

  it('should return Some', () => {
    expect(
      pipe(
        fromNullable('value'),
        flatMap(_ => Some('this is fine')),
      ),
    ).toEqual(Some('this is fine'))
  })
})
