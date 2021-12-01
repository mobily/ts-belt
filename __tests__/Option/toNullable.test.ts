import { pipe, O, A } from '../..'

describe('toNullable', () => {
  it('returns null', () => {
    expect(pipe(O.None, O.toNullable)).toBe(null)
    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
        O.toNullable,
      ),
    ).toEqual(null)
  })

  it('returns a value', () => {
    expect(pipe(O.Some('value'), O.toNullable)).toEqual('value')
    expect(
      pipe(
        O.fromNullable({ prop: 'value' }),
        O.mapNullable(obj => obj.prop),
        O.toNullable,
      ),
    ).toEqual('value')
  })

  it('*', () => {
    expect(
      pipe(
        O.fromNullable(['hello', 'world']),
        O.flatMap(A.takeExactly(2)),
        O.toNullable,
      ),
    ).toEqual(['hello', 'world'])
    expect(
      pipe(O.fromNullable([]), O.flatMap(A.takeExactly(2)), O.toNullable),
    ).toEqual(null)
  })
})
