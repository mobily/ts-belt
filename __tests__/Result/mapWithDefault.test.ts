import { pipe, R } from '../..'

describe('mapWithDefault', () => {
  it('should return a default value', () => {
    expect(
      pipe(
        R.fromNullable('this is bad', null),
        R.mapWithDefault('default value', _ => 'value'),
      ),
    ).toEqual('default value')
  })

  it('should skip a default value', () => {
    expect(
      pipe(
        R.fromNullable('this is bad', [1, 2, 3]),
        R.mapWithDefault(0, arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toEqual(1)
  })
})
