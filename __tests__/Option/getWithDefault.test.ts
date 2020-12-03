import { pipe } from '@mobily/ts-belt'
import { fromNullable, getWithDefault, map, mapNullable } from '@mobily/ts-belt/Option'

describe('getWithDefault', () => {
  it('should return a default value', () => {
    expect(pipe(fromNullable(null), getWithDefault('default value'))).toBe('default value')
    expect(
      pipe(
        fromNullable('value'),
        mapNullable(_ => null),
        getWithDefault('default value'),
      ),
    ).toBe('default value')
  })

  it('should skip a default value', () => {
    expect(pipe(fromNullable('value'), getWithDefault('default value'))).toBe('value')
    expect(
      pipe(
        fromNullable('value'),
        map(_ => 'this is fine'),
        getWithDefault('default value'),
      ),
    ).toBe('this is fine')
  })
})
