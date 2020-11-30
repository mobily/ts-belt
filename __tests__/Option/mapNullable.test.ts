import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, mapNullable } from '@mobily/ts-belt/Option'

describe('mapNullable', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        mapNullable(value => value),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(value => value.prop),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        mapNullable(_ => 'string'),
      ),
    ).toEqual(None)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        mapNullable(([first]) => first),
      ),
    ).toEqual(Some(1))
  })
})
