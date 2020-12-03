import { pipe } from '@mobily/ts-belt'
import { None, Some, filter, fromNullable } from '@mobily/ts-belt/Option'

describe('filter', () => {
  it('should return None', () => {
    expect(
      pipe(
        fromNullable(null),
        filter(_ => false),
      ),
    ).toEqual(None)
    expect(
      pipe(
        fromNullable(null),
        filter(_ => true),
      ),
    ).toEqual(None)
    expect(
      pipe(
        fromNullable([3, 5, 7]),
        filter(arr => {
          const [fst] = arr
          return fst === 1
        }),
      ),
    ).toEqual(None)
  })

  it('should return Some', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        filter(arr => {
          const [fst] = arr
          return fst === 1
        }),
      ),
    ).toEqual(Some([1, 2, 3]))
  })
})
