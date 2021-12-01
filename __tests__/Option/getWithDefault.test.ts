import { pipe, O } from '../..'

describe('getWithDefault', () => {
  it('returns a default value', () => {
    expect(pipe(O.fromNullable(null), O.getWithDefault('default value'))).toBe(
      'default value',
    )
    expect(
      pipe(
        O.fromNullable('value'),
        O.mapNullable(_ => null),
        O.getWithDefault('default value'),
      ),
    ).toBe('default value')
  })

  it('should skip a default value', () => {
    expect(
      pipe(O.fromNullable('value'), O.getWithDefault('default value')),
    ).toBe('value')
    expect(
      pipe(
        O.fromNullable('value'),
        O.map(_ => 'this is fine'),
        O.getWithDefault('default value'),
      ),
    ).toBe('this is fine')
  })

  it('*', () => {
    expect(
      pipe(
        O.fromNullable('hello'),
        O.map(value => `${value} world!`),
        O.getWithDefault('error'),
      ),
    ).toBe('hello world!')

    expect(
      pipe(
        O.fromNullable(null),
        O.map(value => `${value} world!`),
        O.getWithDefault('error'),
      ),
    ).toBe('error')
  })
})
