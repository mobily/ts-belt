import { A } from '../..'

describe('splitAt', () => {
  it('returns None', () => {
    expect(A.splitAt([], 1)).toBeNone()
    expect(A.splitAt([1, 2, 3], -1)).toBeNone()
    expect(A.splitAt([1, 2, 3], 4)).toBeNone()
  })

  it('returns Some', () => {
    expect(A.splitAt([], 0)).toBeSome([[], []])
    expect(A.splitAt([1], 1)).toBeSome([[1], []])
    expect(A.splitAt([1, 2], 1)).toBeSome([[1], [2]])
    expect(A.splitAt([true, true, false], 2)).toBeSome([[true, true], [false]])
    expect(A.splitAt([[1], [2], [3], [4]], 2)).toBeSome([
      [[1], [2]],
      [[3], [4]],
    ])
  })
})
