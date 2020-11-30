import { pipe } from '@mobily/ts-belt'
import { fromNullable, getWithDefault } from '@mobily/ts-belt/Option'

describe('getWithDefault', () => {
  it('*', () => {
    expect(pipe(fromNullable(null), getWithDefault('string'))).toBe('string')
  })

  it('*', () => {
    expect(pipe(fromNullable(1), getWithDefault(1))).toBe(1)
  })
})
