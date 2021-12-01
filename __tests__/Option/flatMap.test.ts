import { pipe, O } from '../..'

describe('flatMap', () => {
  it('returns None', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.flatMap(_ => O.Some(1)),
      ),
    ).toEqual(O.None)

    expect(
      pipe(
        O.fromNullable(undefined),
        O.flatMap(_ => O.None),
        O.flatMap(_ => O.Some('value')),
      ),
    ).toEqual(O.None)

    expect(
      pipe(
        O.fromNullable('value'),
        O.flatMap(_ => O.None),
      ),
    ).toEqual(O.None)
  })

  it('returns Some', () => {
    expect(
      pipe(
        O.fromNullable('value'),
        O.flatMap(_ => O.Some('this is fine')),
      ),
    ).toEqual(O.Some('this is fine'))
  })

  it('*', () => {
    const { Some } = O
    expect(
      pipe(
        O.fromNullable('hello'),
        O.flatMap(value => {
          return value.endsWith('lo') ? O.Some(`${value} world!`) : O.None
        }),
      ),
    ).toEqual(Some('hello world!'))
  })
})
