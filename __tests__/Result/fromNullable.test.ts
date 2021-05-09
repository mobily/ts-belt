import { R } from '../..'

describe('fromNullable', () => {
  it('should return Error', () => {
    expect(R.fromNullable('this is bad', null)).toBeError('this is bad')
    expect(R.fromNullable('this is bad', undefined)).toBeError('this is bad')
  })

  it('should return Ok', () => {
    expect(R.fromNullable('this is bad', 'value')).toBeOk('value')
    expect(R.fromNullable('this is bad', [])).toBeOk([])
    expect(R.fromNullable('this is bad', {})).toBeOk({})
    expect(R.fromNullable('this is bad', 0)).toBeOk(0)
    expect(R.fromNullable('this is bad', 1)).toBeOk(1)
    expect(R.fromNullable('this is bad', false)).toBeOk(false)
    expect(R.fromNullable('this is bad', true)).toBeOk(true)
  })
})
