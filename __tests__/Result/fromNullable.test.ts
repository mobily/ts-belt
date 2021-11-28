import { R } from '../..'

describe('fromNullable', () => {
  it('returns Error', () => {
    expect(R.fromNullable(null, 'this is bad')).toBeError('this is bad')
    expect(R.fromNullable(undefined, 'this is bad')).toBeError('this is bad')
  })

  it('returns Ok', () => {
    expect(R.fromNullable('value', 'this is bad')).toBeOk('value')
    expect(R.fromNullable([], 'this is bad')).toBeOk([])
    expect(R.fromNullable({}, 'this is bad')).toBeOk({})
    expect(R.fromNullable(0, 'this is bad')).toBeOk(0)
    expect(R.fromNullable(1, 'this is bad')).toBeOk(1)
    expect(R.fromNullable(false, 'this is bad')).toBeOk(false)
    expect(R.fromNullable(true, 'this is bad')).toBeOk(true)
  })
})
