import { pipe, R } from '../..'

describe('isError', () => {
  it('returns true', () => {
    expect(R.isError(R.Error('bad'))).toBeTruthy()
    expect(pipe(R.fromNullable(null, 'this is bad'), R.isError)).toBeTruthy()
  })

  it('returns false', () => {
    expect(R.isError(R.Ok('good'))).toBeFalsy()
    expect(pipe(R.fromNullable('value', 'this is bad'), R.isError)).toBeFalsy()
  })
})
