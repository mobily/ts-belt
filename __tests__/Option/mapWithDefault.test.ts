import { pipe } from '@mobily/ts-belt'
import { Some, fromNullable, mapWithDefault } from '@mobily/ts-belt/Option'

describe('mapWithDefault', () => {
  it('should return a default value', () => {
    expect(
      pipe(
        fromNullable(null),
        mapWithDefault('default value', _ => 'value'),
      ),
    ).toEqual(Some('default value'))
  })

  it('should skip a default value', () => {
    expect(
      pipe(
        fromNullable([1, 2, 3]),
        mapWithDefault('default value', _ => 'value'),
      ),
    ).toEqual(Some('value'))
  })
})
