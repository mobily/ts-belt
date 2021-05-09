import { A } from '../..'

describe('take', () => {
  it('should return an empty array', () => {
    expect(A.take(-1, [1, 2, 3])).toEqual([])
    expect(A.take(0, [])).toEqual([])
    expect(A.take(0, [1, 2, 3])).toEqual([])
  })

  it('should return a new array including the first `n` items', () => {
    expect(A.take(1, [1])).toEqual([1])
    expect(A.take(1, [1, 2, 3])).toEqual([1])
    expect(A.take(1, [[1], [2]])).toEqual([[1]])
    expect(A.take(2, [true, true, false])).toEqual([true, true])
    expect(A.take(3, [1, 2, 3])).toEqual([1, 2, 3])
    expect(A.take(4, [1, 2, 3])).toEqual([1, 2, 3])
  })
})
