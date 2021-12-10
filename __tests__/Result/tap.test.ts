import { pipe, R, S } from '../..'

describe('tap', () => {
  it('applies a side-effect', () => {
    const value = pipe(
      R.fromNullable('hello', 'value cannot be nullable'),
      R.map(S.isEmpty),
      R.tap(isEmpty => {
        expect(isEmpty).toEqual(false)
      }),
      R.getWithDefault(false),
    )

    expect(value).toEqual(false)
  })

  it('*', () => {
    expect(
      pipe(
        R.fromNullable('hello', 'value cannot be nullable'),
        R.map(S.isEmpty),
        R.tap(isEmpty => {
          console.log(isEmpty) // ⬅️ false
        }),
        R.getWithDefault(false),
      ),
    ).toEqual(false)
  })
})
