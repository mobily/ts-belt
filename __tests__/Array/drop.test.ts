import { A } from '../..'

describe('drop', () => {
  it('should return the same values as the provided array', () => {
    expect(A.drop(-1, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('should return an empty array', () => {
    expect(A.drop(4, [1, 2, 3])).toEqual([])
    expect(A.drop(3, [1, 2, 3])).toEqual([])
  })

  it('should return a new array that does not contain the first `n` items', () => {
    expect(A.drop(0, [])).toEqual([])
    expect(A.drop(0, [1, 2, 3])).toEqual([1, 2, 3])
    expect(A.drop(1, [1])).toEqual([])
    expect(A.drop(1, [1, 2, 3])).toEqual([2, 3])
    expect(A.drop(1, [[1], [2]])).toEqual([[2]])
    expect(A.drop(2, [true, true, false])).toEqual([false])
  })
})
