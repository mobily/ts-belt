import { pipe, R } from '../..'

describe('isOk', () => {
  it('should return true', () => {
    expect(R.isOk(R.Ok('this is fine'))).toBeTruthy()
    expect(pipe(R.fromNullable('this is bad', 'value'), R.isOk)).toBeTruthy()
  })

  it('should return false', () => {
    expect(R.isOk(R.Error('this is bad'))).toBeFalsy()
    expect(pipe(R.fromNullable('this is bad', null), R.isOk)).toBeFalsy()
  })
})
