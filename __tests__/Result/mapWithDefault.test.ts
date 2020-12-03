import { pipe } from '@mobily/ts-belt'
import { Ok, fromNullable, mapWithDefault } from '@mobily/ts-belt/Result'

describe('mapWithDefault', () => {
  it('should return a default value', () => {
    expect(
      pipe(
        fromNullable('this is bad', null),
        mapWithDefault('default value', _ => 'value'),
      ),
    ).toEqual(Ok('default value'))
  })

  it('should skip a default value', () => {
    expect(
      pipe(
        fromNullable('this is bad', [1, 2, 3]),
        mapWithDefault(0, arr => {
          const [fst] = arr
          return fst
        }),
      ),
    ).toEqual(Ok(1))
  })
})
