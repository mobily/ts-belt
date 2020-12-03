import { pipe } from '@mobily/ts-belt'
import { Error, Ok, flatMap, fromNullable } from '@mobily/ts-belt/Result'

describe('flatMap', () => {
  it('should return Error', () => {
    expect(
      pipe(
        fromNullable('this is bad', 'value'),
        flatMap(_ => Error('new error')),
      ),
    ).toEqual(Error('new error'))

    expect(
      pipe(
        fromNullable('this is bad', null),
        flatMap(_ => Error('new error')),
      ),
    ).toEqual(Error('this is bad'))

    expect(
      pipe(
        fromNullable('this is bad', null),
        flatMap(_ => Ok(1)),
      ),
    ).toEqual(Error('this is bad'))
  })

  it('should return Ok', () => {
    expect(
      pipe(
        fromNullable('error', 2),
        flatMap(value => Ok(value ** 2)),
      ),
    ).toEqual(Ok(4))
  })
})
