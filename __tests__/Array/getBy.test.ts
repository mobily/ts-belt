import { A } from '../..'

describe('getBy', () => {
  it('returns None', () => {
    expect(A.getBy([1, 2, 3], n => n === 0)).toBeNone()
    expect(A.getBy([false, false, false], state => state)).toBeNone()
    expect(
      A.getBy([{ prop: null }, { prop: false }, { prop: undefined }], obj => Boolean(obj.prop)),
    ).toBeNone()
  })

  it('returns Some', () => {
    expect(A.getBy(['a', 'ab', 'bc'], str => str.length === 2)).toBeSome('ab')
    expect(A.getBy([1, 2, 3], value => value === 2)).toBeSome(2)
    expect(
      A.getBy([{ prop: 'ab' }, { prop: 'abc' }, { prop: 'bcd' }], obj => obj.prop.length > 2),
    ).toBeSome({ prop: 'abc' })
  })
})
