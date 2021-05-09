import { A } from '../..'

describe('splitAt', () => {
  it('should return None', () => {
    expect(A.splitAt(1, [])).toBeNone()
    expect(A.splitAt(-1, [1, 2, 3])).toBeNone()
    expect(A.splitAt(4, [1, 2, 3])).toBeNone()
  })

  it('should return Some', () => {
    expect(A.splitAt(0, [])).toBeSome([[], []])
    expect(A.splitAt(1, [1])).toBeSome([[1], []])
    expect(A.splitAt(1, [1, 2])).toBeSome([[1], [2]])
    expect(A.splitAt(2, [true, true, false])).toBeSome([[true, true], [false]])
    expect(A.splitAt(2, [[1], [2], [3], [4]])).toBeSome([
      [[1], [2]],
      [[3], [4]],
    ])
  })
})
