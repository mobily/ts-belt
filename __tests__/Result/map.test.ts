import { pipe } from '@mobily/ts-belt'
import { Error, Ok, fromNullable, map } from '@mobily/ts-belt/Result'

describe('map', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        map(_ => 'string'),
      ),
    ).toEqual(Error('error'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', [1, 2, 3]),
        map(_ => 'string'),
      ),
    ).toEqual(Ok('string'))
  })
})
