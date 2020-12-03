import { drop } from '@mobily/ts-belt/Array'
import { None, Some } from '@mobily/ts-belt/Option'

describe('drop', () => {
  it('should return None', () => {
    expect(drop(4, [1, 2, 3])).toEqual(None)
    expect(drop(-1, [1, 2, 3])).toEqual(None)
  })

  it('should return Some', () => {
    expect(drop(0, [])).toEqual(Some([]))
    expect(drop(0, [1, 2, 3])).toEqual(Some([1, 2, 3]))
    expect(drop(1, [1])).toEqual(Some([]))
    expect(drop(1, [1, 2, 3])).toEqual(Some([2, 3]))
    expect(drop(1, [[1], [2]])).toEqual(Some([[2]]))
    expect(drop(2, [true, true, false])).toEqual(Some([false]))
    expect(drop(3, [1, 2, 3])).toEqual(Some([]))
  })
})
