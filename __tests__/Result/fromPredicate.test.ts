import { R } from '../..'

describe('fromPredicate', () => {
  it('should return Error', () => {
    expect(R.fromPredicate(str => str.length > 10, 'this is bad', 'value')).toEqual(
      R.Error('this is bad'),
    )
    expect(R.fromPredicate(n => n !== 0, 'this is bad', 0)).toBeError('this is bad')
    expect(R.fromPredicate(state => !state, 'this is bad', true)).toBeError('this is bad')
  })

  it('should return Ok', () => {
    expect(R.fromPredicate(arr => arr.some(x => x === 2), 'this is bad', [1, 2, 3])).toBeOk([
      1,
      2,
      3,
    ])
    expect(
      R.fromPredicate(obj => obj.prop === 'this is fine', 'this is bad', { prop: 'this is fine' }),
    ).toBeOk({ prop: 'this is fine' })
  })
})
