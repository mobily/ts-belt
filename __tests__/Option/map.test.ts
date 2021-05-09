import { pipe, O } from '../..'

describe('map', () => {
  it('should return None', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.map(_ => 'this is fine'),
      ),
    ).toBeNone()
  })

  it('should return Some', () => {
    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.map(_ => 'this is fine'),
      ),
    ).toBeSome('this is fine')
  })
})
