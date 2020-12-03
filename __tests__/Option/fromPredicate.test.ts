import { None, Some, fromPredicate } from '@mobily/ts-belt/Option'

describe('fromPredicate', () => {
  it('should return None', () => {
    expect(fromPredicate(str => str.length > 10, 'string')).toEqual(None)
    expect(fromPredicate(n => n !== 0, 0)).toEqual(None)
    expect(fromPredicate(state => !state, true)).toEqual(None)
  })

  it('should return Some', () => {
    expect(fromPredicate(arr => arr.some(x => x === 2), [1, 2, 3])).toEqual(Some([1, 2, 3]))
    expect(fromPredicate(obj => obj.prop === 'this is fine', { prop: 'this is fine' })).toEqual(
      Some({ prop: 'this is fine' }),
    )
  })
})
