import { A } from '../..'

describe('head', () => {
  it('should return None', () => {
    expect(A.head([])).toBeNone()
    expect(A.head([undefined, 2, 3])).toBeNone()
    expect(A.head([null, 2, 3])).toBeNone()
  })

  it('should return Some', () => {
    expect(A.head([1, 2, 3])).toBeSome(1)
    expect(A.head([0, 2, 3])).toBeSome(0)
    expect(A.head([false, true, true])).toBeSome(false)
    expect(A.head([{ prop: 1 }, { prop: 2 }])).toBeSome({ prop: 1 })
    expect(A.head([[1], [2]])).toBeSome([1])
  })
})
