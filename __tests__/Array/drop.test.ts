import { A } from '../..'

describe('drop', () => {
  it('returns the same values as the provided array', () => {
    expect(A.drop([1, 2, 3], -1)).toEqual([1, 2, 3])
  })

  it('returns an empty array', () => {
    expect(A.drop([1, 2, 3], 4)).toEqual([])
    expect(A.drop([1, 2, 3], 3)).toEqual([])
  })

  it('returns a new array that does not contain the first `n` items', () => {
    expect(A.drop([], 0)).toEqual([])
    expect(A.drop([1, 2, 3], 0)).toEqual([1, 2, 3])
    expect(A.drop([1], 1)).toEqual([])
    expect(A.drop([1, 2, 3], 1)).toEqual([2, 3])
    expect(A.drop([[1], [2]], 1)).toEqual([[2]])
    expect(A.drop([true, true, false], 2)).toEqual([false])
  })
})
