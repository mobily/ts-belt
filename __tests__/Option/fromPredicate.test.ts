import { O, A } from '../..'

describe('fromPredicate', () => {
  it('returns None', () => {
    expect(O.fromPredicate('string', str => str.length > 10)).toBeNone()
    expect(O.fromPredicate(0, n => n !== 0)).toBeNone()
    expect(O.fromPredicate(true, state => !state)).toBeNone()
  })

  it('returns Some', () => {
    expect(
      O.fromPredicate(
        [1, 2, 3],
        A.some(x => x === 2),
      ),
    ).toBeSome([1, 2, 3])
    expect(O.fromPredicate({ prop: 'this is fine' }, obj => obj.prop === 'this is fine')).toBeSome({
      prop: 'this is fine',
    })
  })
})
