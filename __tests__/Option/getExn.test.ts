import { pipe, O } from '../..'

describe('getExn', () => {
  it('should throw an error', () => {
    expect(() => {
      pipe(O.fromNullable(null), O.getExn)
    }).toThrow(Object)
    expect(() => {
      pipe(
        O.fromNullable('value'),
        O.mapNullable(_ => null),
        O.getExn,
      )
    }).toThrow(Object)
  })

  it('returns a value', () => {
    expect(pipe(O.fromNullable('value'), O.getExn)).toEqual('value')
    expect(
      pipe(
        O.fromNullable('value'),
        O.map(_ => 'this is fine'),
        O.getExn,
      ),
    ).toEqual('this is fine')
  })

  it('*', () => {
    expect(
      pipe(
        O.fromNullable('hello'),
        O.map(value => `${value} world!`),
        O.getExn,
      ),
    ).toEqual('hello world!')
  })
})
