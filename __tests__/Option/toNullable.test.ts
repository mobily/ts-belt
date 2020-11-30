import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, mapNullable, toNullable } from '@mobily/ts-belt/Option'

describe('toNullable', () => {
  it('*', () => {
    expect(pipe(None, toNullable)).toBe(null)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
        toNullable,
      ),
    ).toBe(null)
  })

  it('*', () => {
    expect(pipe(Some('string'), toNullable)).toBe('string')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: 'string' }),
        mapNullable(obj => obj.prop),
        toNullable,
      ),
    ).toBe('string')
  })
})
