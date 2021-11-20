import { pipe, R } from '../..'

describe('getExn', () => {
  it('should throw an error', () => {
    expect(() => {
      pipe(R.fromNullable(null, 'this is bad'), R.getExn)
    }).toThrow(Object)
  })

  it('should return a value', () => {
    expect(pipe(R.fromNullable('value', 'this is bad'), R.getExn)).toBe('value')
  })
})
