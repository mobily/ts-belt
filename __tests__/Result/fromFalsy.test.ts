import { R } from '../..'

describe('fromFalsy', () => {
  it('should return Error', () => {
    expect(R.fromFalsy('this is bad', null)).toBeError('this is bad')
    expect(R.fromFalsy('this is bad', undefined)).toBeError('this is bad')
    expect(R.fromFalsy('this is bad', 0)).toBeError('this is bad')
    expect(R.fromFalsy('this is bad', '')).toBeError('this is bad')
    expect(R.fromFalsy('this is bad', false)).toBeError('this is bad')
  })

  it('should return Ok', () => {
    expect(R.fromFalsy('this is bad', 'value')).toBeOk('value')
    expect(R.fromFalsy('this is bad', [])).toBeOk([])
    expect(R.fromFalsy('this is bad', {})).toBeOk({})
  })
})
