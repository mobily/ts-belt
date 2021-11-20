import { pipe, R } from '../..'

describe('getWithDefault', () => {
  it('should return a default value', () => {
    expect(pipe(R.fromNullable(null, 'error'), R.getWithDefault('default value'))).toBe(
      'default value',
    )
  })

  it('should skip a default value', () => {
    expect(pipe(R.fromNullable(1, 'error'), R.getWithDefault(2))).toBe(1)
  })
})
