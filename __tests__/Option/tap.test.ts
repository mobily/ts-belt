import { pipe, O, A } from '../..'

describe('tap', () => {
  it('applies a side-effect', () => {
    const value = pipe(
      O.fromNullable(['hello', 'world']),
      O.flatMap(A.head),
      O.tap(str => {
        expect(str).toEqual('hello')
      }),
      O.getWithDefault(''),
    )

    expect(value).toEqual('hello')
  })

  it('*', () => {
    expect(
      pipe(
        O.fromNullable(['hello', 'world']),
        O.flatMap(A.get(1)),
        O.tap(str => {
          console.log(str) // ⬅️ 'world'
        }),
        O.getWithDefault(''),
      ),
    ).toEqual('world')
  })
})
