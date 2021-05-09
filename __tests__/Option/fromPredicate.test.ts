import { O } from '../..'

describe('fromPredicate', () => {
  it('should return None', () => {
    expect(O.fromPredicate(str => str.length > 10, 'string')).toBeNone()
    expect(O.fromPredicate(n => n !== 0, 0)).toBeNone()
    expect(O.fromPredicate(state => !state, true)).toBeNone()
  })

  it('should return Some', () => {
    expect(O.fromPredicate(arr => arr.some(x => x === 2), [1, 2, 3])).toBeSome([1, 2, 3])
    expect(O.fromPredicate(obj => obj.prop === 'this is fine', { prop: 'this is fine' })).toBeSome({
      prop: 'this is fine',
    })
  })
})
