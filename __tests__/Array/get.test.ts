import { A } from '../..'

describe('get', () => {
  it('should return None', () => {
    expect(A.get([], 0)).toBeNone()
    expect(A.get([1, 2, 3], 3)).toBeNone()
  })

  it('should return Some', () => {
    expect(A.get([1, 2, 3], 0)).toBeSome(1)
    expect(A.get([0, 2, 3], 0)).toBeSome(0)
    expect(A.get([true, true, false], 2)).toBeSome(false)
    expect(A.get([[1], [2]], 1)).toBeSome([2])
  })
})
