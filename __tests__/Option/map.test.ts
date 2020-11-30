import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, map } from '@mobily/ts-belt/Option'

describe('map', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        map(_ => 'string'),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        map(_ => 'string'),
      ),
    ).toEqual(Some('string'))
  })
})
