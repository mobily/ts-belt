import { pipe, R } from '../..'

describe('getWithDefault', () => {
  it('should return a default value', () => {
    expect(pipe(R.fromNullable('error', null), R.getWithDefault('default value'))).toBe(
      'default value',
    )
  })

  it('should skip a default value', () => {
    expect(pipe(R.fromNullable('error', 1), R.getWithDefault(2))).toBe(1)
  })
})
