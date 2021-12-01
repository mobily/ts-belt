import { A, O } from '../..'

describe('get', () => {
  it('returns None', () => {
    expect(A.get([], 0)).toEqual(O.None)
    expect(A.get([1, 2, 3], 3)).toEqual(O.None)
  })

  it('returns Some', () => {
    expect(A.get([1, 2, 3], 0)).toEqual(O.Some(1))
    expect(A.get([0, 2, 3], 0)).toEqual(O.Some(0))
    expect(A.get([true, true, false], 2)).toEqual(O.Some(false))
    expect(A.get([[1], [2]], 1)).toEqual(O.Some([2]))
  })
})
