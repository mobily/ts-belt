import { pipe, R } from '../..'

describe('isOk', () => {
  it('returns true', () => {
    expect(R.isOk(R.Ok('this is fine'))).toBeTruthy()
    expect(pipe(R.fromNullable('value', 'this is bad'), R.isOk)).toBeTruthy()
  })

  it('returns false', () => {
    expect(R.isOk(R.Error('this is bad'))).toBeFalsy()
    expect(pipe(R.fromNullable(null, 'this is bad'), R.isOk)).toBeFalsy()
  })
})
