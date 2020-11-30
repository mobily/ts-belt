import { take } from '@mobily/ts-belt/Array'
import { None, Some } from '@mobily/ts-belt/Option'

describe('take', () => {
  it('*', () => {
    expect(take(4, [1, 2, 3])).toEqual(None)
    expect(take(-1, [1, 2, 3])).toEqual(None)
  })

  it('*', () => {
    expect(take(0, [])).toEqual(Some([]))
    expect(take(0, [1, 2, 3])).toEqual(Some([]))
    expect(take(1, [1])).toEqual(Some([1]))
    expect(take(1, [1, 2, 3])).toEqual(Some([1]))
    expect(take(1, [[1], [2]])).toEqual(Some([[1]]))
    expect(take(2, [true, true, false])).toEqual(Some([true, true]))
    expect(take(3, [1, 2, 3])).toEqual(Some([1, 2, 3]))
  })
})
