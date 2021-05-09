import { pipe, R } from '../..'

describe('getExn', () => {
  it('should throw an error', () => {
    expect(() => {
      pipe(R.fromNullable('this is bad', null), R.getExn)
    }).toThrow(Object)
  })

  it('should return a value', () => {
    expect(pipe(R.fromNullable('this is bad', 'value'), R.getExn)).toBe('value')
  })
})
