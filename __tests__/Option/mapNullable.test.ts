import { pipe, O, A } from '../..'

describe('mapNullable', () => {
  it('returns None', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.mapNullable(_ => 'value'),
      ),
    ).toEqual(O.None)

    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
      ),
    ).toEqual(O.None)

    expect(
      pipe(
        O.fromNullable('this is fine'),
        O.mapNullable(_ => null),
      ),
    ).toEqual(O.None)
  })

  it('returns Some', () => {
    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.mapNullable(arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toEqual(O.Some(1))
  })

  it('*', () => {
    const { Some, None } = O

    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.mapNullable(value => value[0]),
      ),
    ).toEqual(Some(1))

    expect(
      pipe(
        O.fromNullable([undefined, 2, 3]),
        O.mapNullable(value => value[0]),
      ),
    ).toEqual(None)
  })
})
