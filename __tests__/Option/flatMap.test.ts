import { pipe, O } from '../..'

describe('flatMap', () => {
  it('should return None', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.flatMap(_ => O.Some(1)),
      ),
    ).toBeNone()

    expect(
      pipe(
        O.fromNullable(undefined),
        O.flatMap(_ => O.None),
        O.flatMap(_ => O.Some('value')),
      ),
    ).toBeNone()

    expect(
      pipe(
        O.fromNullable('value'),
        O.flatMap(_ => O.None),
      ),
    ).toBeNone()
  })

  it('should return Some', () => {
    expect(
      pipe(
        O.fromNullable('value'),
        O.flatMap(_ => O.Some('this is fine')),
      ),
    ).toBeSome('this is fine')
  })
})
