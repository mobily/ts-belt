import { R } from '../..'

describe('fromFalsy', () => {
  it('should return Error', () => {
    expect(R.fromFalsy(null, 'this is bad')).toBeError('this is bad')
    expect(R.fromFalsy(undefined, 'this is bad')).toBeError('this is bad')
    expect(R.fromFalsy(0, 'this is bad')).toBeError('this is bad')
    expect(R.fromFalsy('', 'this is bad')).toBeError('this is bad')
    expect(R.fromFalsy(false, 'this is bad')).toBeError('this is bad')
  })

  it('should return Ok', () => {
    expect(R.fromFalsy('value', 'this is bad')).toBeOk('value')
    expect(R.fromFalsy([], 'this is bad')).toBeOk([])
    expect(R.fromFalsy({}, 'this is bad')).toBeOk({})
  })
})
