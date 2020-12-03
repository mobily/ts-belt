import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, mapNullable, toUndefined } from '@mobily/ts-belt/Option'

describe('toUndefined', () => {
  it('should return undefined', () => {
    expect(pipe(None, toUndefined)).toBe(undefined)
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
        toUndefined,
      ),
    ).toBe(undefined)
  })

  it('should return a value', () => {
    expect(pipe(Some('value'), toUndefined)).toBe('value')
    expect(
      pipe(
        fromNullable({ prop: 'value' }),
        mapNullable(obj => obj.prop),
        toUndefined,
      ),
    ).toBe('value')
  })
})
