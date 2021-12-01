import { pipe, O, A } from '../..'

describe('map', () => {
  it('returns None', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.map(_ => 'this is fine'),
      ),
    ).toEqual(O.None)
  })

  it('returns Some', () => {
    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.map(_ => 'this is fine'),
      ),
    ).toEqual(O.Some('this is fine'))
  })

  it('*', () => {
    const { Some, None } = O

    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.flatMap(A.get(0)),
        O.map(n => `${n}. hello world!`),
      ),
    ).toEqual(Some('1. hello world!'))

    expect(
      pipe(
        O.fromNullable([]),
        O.flatMap(A.get(0)),
        O.map(n => `${n}. hello world!`),
      ),
    ).toEqual(None)
  })
})
