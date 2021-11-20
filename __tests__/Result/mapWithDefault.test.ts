import { pipe, R } from '../..'

describe('mapWithDefault', () => {
  it('should return a default value', () => {
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
})
