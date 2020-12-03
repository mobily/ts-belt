import { pipe } from '@mobily/ts-belt'
import { Error, Ok, fromNullable, map } from '@mobily/ts-belt/Result'

describe('map', () => {
  it('should return Error', () => {
    expect(
      pipe(
        fromNullable('this is bad', null),
        map(_ => 'string'),
      ),
    ).toEqual(Error('this is bad'))
  })

  it('should return Ok', () => {
    expect(
      pipe(
        fromNullable('this is bad', [1, 2, 3]),
        map(arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toEqual(Ok(1))
  })
})
