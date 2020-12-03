import { pipe } from '@mobily/ts-belt'
import { fromNullable, getWithDefault } from '@mobily/ts-belt/Result'

describe('getWithDefault', () => {
  it('should return a default value', () => {
    expect(pipe(fromNullable('error', null), getWithDefault('default value'))).toBe('default value')
  })

  it('should skip a default value', () => {
    expect(pipe(fromNullable('error', 1), getWithDefault(2))).toBe(1)
  })
})
