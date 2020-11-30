import { pipe } from '@mobily/ts-belt'
import { None, Some, fromNullable, mapNullable, toUndefined } from '@mobily/ts-belt/Option'

describe('toUndefined', () => {
  it('*', () => {
    expect(pipe(None, toUndefined)).toBe(undefined)
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
        toUndefined,
      ),
    ).toBe(undefined)
  })

  it('*', () => {
    expect(pipe(Some('string'), toUndefined)).toBe('string')
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable({ prop: 'string' }),
        mapNullable(obj => obj.prop),
        toUndefined,
      ),
    ).toBe('string')
  })
})
