import { pipe, R } from '../..'

describe('isError', () => {
  it('should return true', () => {
    expect(R.isError(R.Error('bad'))).toBeTruthy()
    expect(pipe(R.fromNullable(null, 'this is bad'), R.isError)).toBeTruthy()
  })

  it('should return false', () => {
    expect(R.isError(R.Ok('good'))).toBeFalsy()
    expect(pipe(R.fromNullable('value', 'this is bad'), R.isError)).toBeFalsy()
  })
})
