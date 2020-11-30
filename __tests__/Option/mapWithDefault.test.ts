import { pipe } from '@mobily/ts-belt'
import { Some, fromNullable, mapWithDefault } from '@mobily/ts-belt/Option'

describe('mapWithDefault', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable(null),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Some('default'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Some('string'))
  })
})
