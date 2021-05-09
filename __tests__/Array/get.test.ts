import { A, O } from '../..'

describe('get', () => {
  it('should return None', () => {
    expect(A.get(0, [])).toBeNone()
    expect(A.get(3, [1, 2, 3])).toBeNone()
  })

  it('should return Some', () => {
    expect(A.get(0, [1, 2, 3])).toBeSome(1)
    expect(A.get(0, [0, 2, 3])).toBeSome(0)
    expect(A.get(2, [true, true, false])).toBeSome(false)
    expect(A.get(1, [[1], [2]])).toBeSome([2])
  })
})
