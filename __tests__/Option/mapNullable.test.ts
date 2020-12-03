import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, mapNullable } from '@mobily/ts-belt/Option'

describe('mapNullable', () => {
  it('should return None', () => {
    expect(
      pipe(
        fromNullable(null),
        mapNullable(_ => 'value'),
      ),
    ).toEqual(None)

    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
      ),
    ).toEqual(None)

    expect(
      pipe(
        fromNullable('this is fine'),
        mapNullable(_ => null),
      ),
    ).toEqual(None)
  })

  it('should return Some', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        mapNullable(arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toEqual(Some(1))
  })
})
