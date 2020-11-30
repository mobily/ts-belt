import { pipe } from '@mobily/ts-belt'
import { Error, Ok, flatMap, fromNullable } from '@mobily/ts-belt/Result'

describe('flatMap', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        flatMap(_ => Ok(1)),
      ),
    ).toEqual(Error('error'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', 'string'),
        flatMap(_ => Error('new error')),
      ),
    ).toEqual(Error('new error'))

    expect(
      pipe(
        fromNullable('error', null),
        flatMap(_ => Error('new error')),
      ),
    ).toEqual(Error('error'))
  })
})
