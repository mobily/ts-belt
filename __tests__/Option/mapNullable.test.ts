import { pipe, O } from '../..'

describe('mapNullable', () => {
  it('should return None', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.mapNullable(_ => 'value'),
      ),
    ).toBeNone()

    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
      ),
    ).toBeNone()

    expect(
      pipe(
        O.fromNullable('this is fine'),
        O.mapNullable(_ => null),
      ),
    ).toBeNone()
  })

  it('should return Some', () => {
    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.mapNullable(arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toBeSome(1)
  })
})
