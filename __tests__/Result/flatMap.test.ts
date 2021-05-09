import { pipe, R } from '../..'

describe('flatMap', () => {
  it('should return Error', () => {
    expect(
      pipe(
        R.fromNullable('this is bad', 'value'),
        R.flatMap(_ => R.Error('new error')),
      ),
    ).toBeError('new error')

    expect(
      pipe(
        R.fromNullable('this is bad', null),
        R.flatMap(_ => R.Error('new error')),
      ),
    ).toBeError('this is bad')

    expect(
      pipe(
        R.fromNullable('this is bad', null),
        R.flatMap(_ => R.Ok(1)),
      ),
    ).toBeError('this is bad')
  })

  it('should return Ok', () => {
    expect(
      pipe(
        R.fromNullable('error', 2),
        R.flatMap(value => R.Ok(value ** 2)),
      ),
    ).toBeOk(4)
  })
})
