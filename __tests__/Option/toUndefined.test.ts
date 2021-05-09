import { pipe, O } from '../..'

describe('toUndefined', () => {
  it('should return undefined', () => {
    expect(pipe(O.None, O.toUndefined)).toBe(undefined)
    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
        O.toUndefined,
      ),
    ).toBe(undefined)
  })

  it('should return a value', () => {
    expect(pipe(O.Some('value'), O.toUndefined)).toBe('value')
    expect(
      pipe(
        O.fromNullable({ prop: 'value' }),
        O.mapNullable(obj => obj.prop),
        O.toUndefined,
      ),
    ).toBe('value')
  })
})
