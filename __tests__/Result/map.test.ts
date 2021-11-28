import { pipe, R } from '../..'

describe('map', () => {
  it('returns Error', () => {
    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.map(_ => 'string'),
      ),
    ).toBeError('this is bad')
  })

  it('returns Ok', () => {
    expect(
      pipe(
        R.fromNullable([1, 2, 3], 'this is bad'),
        R.map(arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toBeOk(1)
  })
})
