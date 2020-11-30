import { pipe } from '@mobily/ts-belt'
import { fromNullable, getWithDefault } from '@mobily/ts-belt/Result'

describe('getWithDefault', () => {
  it('*', () => {
    expect(pipe(fromNullable('error', null), getWithDefault('string'))).toBe('string')
  })

  it('*', () => {
    expect(pipe(fromNullable('error', 1), getWithDefault(2))).toBe(1)
  })
})
