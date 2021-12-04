import { pipe, R, G } from '../..'

describe('mapWithDefault', () => {
  it('returns a default value', () => {
    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.mapWithDefault('default value', _ => 'value'),
      ),
    ).toEqual('default value')
  })

  it('should skip a default value', () => {
    expect(
      pipe(
        R.fromNullable([1, 2, 3], 'this is bad'),
        R.mapWithDefault(0, arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toEqual(1)
  })

  it('*', () => {
    let name: string | null = 'Joe'

    expect(
      // type Name = string | null
      pipe(
        // ⬇️ const name: Name = 'Joe'
        R.fromNullable(name, 'cannot be nullable'),
        R.mapWithDefault('Hello, stranger!', name => `Hello, ${name}!`),
      ),
    ).toEqual('Hello, Joe!')

    name = null as unknown as string | null

    expect(
      pipe(
        // ⬇️ const name: Name = null
        R.fromNullable(name, 'cannot be nullable'),
        R.mapWithDefault('Hello, stranger!', name => `Hello, ${name}!`),
      ),
    ).toEqual('Hello, stranger!')
  })
})
