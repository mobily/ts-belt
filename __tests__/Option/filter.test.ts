import { pipe, O } from '../..'

describe('filter', () => {
  it('should return None', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.filter(_ => false),
      ),
    ).toBeNone()
    expect(
      pipe(
        O.fromNullable(null),
        O.filter(_ => true),
      ),
    ).toBeNone()
    expect(
      pipe(
        O.fromNullable([3, 5, 7]),
        O.filter(arr => {
          const [fst] = arr
          return fst === 1
        }),
      ),
    ).toBeNone()
  })

  it('should return Some', () => {
    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.filter(arr => {
          const [fst] = arr
          return fst === 1
        }),
      ),
    ).toBeSome([1, 2, 3])
  })
})
