import { splitAt } from '@mobily/ts-belt/Array'
import { None, Some } from '@mobily/ts-belt/Option'

describe('splitAt', () => {
  it('should return None', () => {
    expect(splitAt(1, [])).toEqual(None)
    expect(splitAt(-1, [1, 2, 3])).toEqual(None)
    expect(splitAt(4, [1, 2, 3])).toEqual(None)
  })

  it('should return Some', () => {
    expect(splitAt(0, [])).toEqual(Some([[], []]))
    expect(splitAt(1, [1])).toEqual(Some([[1], []]))
    expect(splitAt(1, [1, 2])).toEqual(Some([[1], [2]]))
    expect(splitAt(2, [true, true, false])).toEqual(Some([[true, true], [false]]))
    expect(splitAt(2, [[1], [2], [3], [4]])).toEqual(
      Some([
        [[1], [2]],
        [[3], [4]],
      ]),
    )
  })
})
