import { A } from '../..'

describe('head', () => {
  it('returns None', () => {
    expect(A.head([])).toBeNone()
  })

  it('returns Some', () => {
    expect(A.head([1, 2, 3])).toBeSome(1)
    expect(A.head([0, 2, 3])).toBeSome(0)
    expect(A.head([false, true, true])).toBeSome(false)
    expect(A.head([{ prop: 1 }, { prop: 2 }])).toBeSome({ prop: 1 })
    expect(A.head([[1], [2]])).toBeSome([1])
  })
})
