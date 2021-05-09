import { A } from '../..'

describe('getBy', () => {
  it('should return None', () => {
    expect(A.getBy(n => n === 0, [1, 2, 3])).toBeNone()
    expect(A.getBy(state => state, [false, false, false])).toBeNone()
    expect(
      A.getBy(obj => Boolean(obj.prop), [{ prop: null }, { prop: false }, { prop: undefined }]),
    ).toBeNone()
  })

  it('should return Some', () => {
    expect(A.getBy(str => str.length === 2, ['a', 'ab', 'bc'])).toBeSome('ab')
    expect(A.getBy(value => value === 2, [1, 2, 3])).toBeSome(2)
    expect(
      A.getBy(obj => obj.prop.length > 2, [{ prop: 'ab' }, { prop: 'abc' }, { prop: 'bcd' }]),
    ).toBeSome({ prop: 'abc' })
  })
})
