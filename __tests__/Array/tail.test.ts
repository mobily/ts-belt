import { A } from '../..'

describe('tail', () => {
  it('should return None', () => {
    expect(A.tail([])).toBeNone()
  })

  it('should return Some', () => {
    expect(A.tail([1, 2, 3])).toBeSome([2, 3])
    expect(A.tail([true, true, false])).toBeSome([true, false])
    expect(A.tail([{ prop: 1 }, { prop: 2 }])).toBeSome([{ prop: 2 }])
    expect(A.tail([[1], [2], [3]])).toBeSome([[2], [3]])
  })
})
