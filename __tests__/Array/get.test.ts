import { get } from '@mobily/ts-belt/Array'
import { None, Some } from '@mobily/ts-belt/Option'

describe('get', () => {
  it('*', () => {
    expect(get(0, [])).toEqual(None)
    expect(get(3, [1, 2, 3])).toEqual(None)
  })

  it('*', () => {
    expect(get(0, [1, 2, 3])).toEqual(Some(1))
    expect(get(0, [0, 2, 3])).toEqual(Some(0))
    expect(get(2, [true, true, false])).toEqual(Some(false))
    expect(get(1, [[1], [2]])).toEqual(Some([2]))
  })
})
