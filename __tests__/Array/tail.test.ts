import { tail } from '@mobily/ts-belt/Array'
import { None, Some } from '@mobily/ts-belt/Option'

describe('tail', () => {
  it('should return None', () => {
    expect(tail([])).toEqual(None)
  })

  it('should return Some', () => {
    expect(tail([1, 2, 3])).toEqual(Some([2, 3]))
    expect(tail([true, true, false])).toEqual(Some([true, false]))
    expect(tail([{ prop: 1 }, { prop: 2 }])).toEqual(Some([{ prop: 2 }]))
    expect(tail([[1], [2], [3]])).toEqual(Some([[2], [3]]))
  })
})
