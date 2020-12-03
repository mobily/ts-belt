import { head } from '@mobily/ts-belt/Array'
import { None, Some } from '@mobily/ts-belt/Option'

describe('head', () => {
  it('should return None', () => {
    expect(head([])).toEqual(None)
    expect(head([undefined, 2, 3])).toEqual(None)
    expect(head([null, 2, 3])).toEqual(None)
  })

  it('should return Some', () => {
    expect(head([1, 2, 3])).toEqual(Some(1))
    expect(head([0, 2, 3])).toEqual(Some(0))
    expect(head([false, true, true])).toEqual(Some(false))
    expect(head([{ prop: 1 }, { prop: 2 }])).toEqual(Some({ prop: 1 }))
    expect(head([[1], [2]])).toEqual(Some([1]))
  })
})
