import { pipe } from '@mobily/ts-belt'
import { Ok, fromNullable, mapWithDefault } from '@mobily/ts-belt/Result'

describe('mapWithDefault', () => {
  it('*', () => {
    expect(
      pipe(
        fromNullable('error', null),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Ok('default'))
  })

  it('*', () => {
    expect(
      pipe(
        fromNullable('error', [1, 2, 3]),
        mapWithDefault('default', _ => 'string'),
      ),
    ).toEqual(Ok('string'))
  })
})
