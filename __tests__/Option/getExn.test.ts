import { pipe } from '@mobily/ts-belt'
import { fromNullable, getExn, map, mapNullable } from '@mobily/ts-belt/Option'

describe('getExn', () => {
  it('should throw an error', () => {
    expect(() => {
      pipe(fromNullable(null), getExn)
    }).toThrow(Error('None'))
    expect(() => {
      pipe(
        fromNullable('value'),
        mapNullable(_ => null),
        getExn,
      )
    }).toThrow(Error)
  })

  it('should return a value', () => {
    expect(pipe(fromNullable('value'), getExn)).toBe('value')
    expect(
      pipe(
        fromNullable('value'),
        map(_ => 'this is fine'),
        getExn,
      ),
    ).toBe('this is fine')
  })
})
