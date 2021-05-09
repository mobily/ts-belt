import { pipe, R } from '../..'

describe('map', () => {
  it('should return Error', () => {
    expect(
      pipe(
        R.fromNullable('this is bad', null),
        R.map(_ => 'string'),
      ),
    ).toBeError('this is bad')
  })

  it('should return Ok', () => {
    expect(
      pipe(
        R.fromNullable('this is bad', [1, 2, 3]),
        R.map(arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toBeOk(1)
  })
})
