import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, map } from '@mobily/ts-belt/Option'

describe('map', () => {
  it('should return None', () => {
    expect(
      pipe(
        fromNullable(null),
        map(_ => 'this is fine'),
      ),
    ).toEqual(None)
  })

  it('should return Some', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        map(_ => 'this is fine'),
      ),
    ).toEqual(Some('this is fine'))
  })
})
