import { pipe, R } from '../..'

describe('map', () => {
  it('should return Error', () => {
    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.map(_ => 'string'),
      ),
    ).toBeError('this is bad')
  })

  it('should return Ok', () => {
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
