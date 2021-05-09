import { pipe, O } from '../..'

describe('toNullable', () => {
  it('should return null', () => {
    expect(pipe(O.None, O.toNullable)).toBe(null)
    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
        O.toNullable,
      ),
    ).toBe(null)
  })

  it('should return a value', () => {
    expect(pipe(O.Some('value'), O.toNullable)).toBe('value')
    expect(
      pipe(
        O.fromNullable({ prop: 'value' }),
        O.mapNullable(obj => obj.prop),
        O.toNullable,
      ),
    ).toBe('value')
  })
})
