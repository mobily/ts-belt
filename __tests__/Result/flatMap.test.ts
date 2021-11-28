import { pipe, R } from '../..'

describe('flatMap', () => {
  it('returns Error', () => {
    expect(
      pipe(
        R.fromNullable('value', 'this is bad'),
        R.flatMap(_ => R.Error('new error')),
      ),
    ).toBeError('new error')

    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.flatMap(_ => R.Error('new error')),
      ),
    ).toBeError('this is bad')

    expect(
      pipe(
        R.fromNullable(null, 'this is bad'),
        R.flatMap(_ => R.Ok(1)),
      ),
    ).toBeError('this is bad')
  })

  it('returns Ok', () => {
    expect(
      pipe(
        R.fromNullable(2, 'error'),
        R.flatMap(value => R.Ok(value ** 2)),
      ),
    ).toBeOk(4)
  })
})
