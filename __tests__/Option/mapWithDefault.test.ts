import { pipe, O } from '../..'

describe('mapWithDefault', () => {
  it('returns a default value', () => {
    expect(
      pipe(
        O.fromNullable(null),
        O.mapWithDefault('default value', _ => 'value'),
      ),
    ).toBeSome('default value')
  })

  it('should skip a default value', () => {
    expect(
      pipe(
        O.fromNullable([1, 2, 3]),
        O.mapWithDefault('default value', _ => 'value'),
      ),
    ).toBeSome('value')
  })
})
