import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, mapNullable, toNullable } from '@mobily/ts-belt/Option'

describe('toNullable', () => {
  it('should return null', () => {
    expect(pipe(None, toNullable)).toBe(null)
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
        toNullable,
      ),
    ).toBe(null)
  })

  it('should return a value', () => {
    expect(pipe(Some('value'), toNullable)).toBe('value')
    expect(
      pipe(
        fromNullable({ prop: 'value' }),
        mapNullable(obj => obj.prop),
        toNullable,
      ),
    ).toBe('value')
  })
})
