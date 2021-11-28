import { R, A } from '../..'

describe('fromPredicate', () => {
  it('returns Error', () => {
    expect(R.fromPredicate('value', str => str.length > 10, 'this is bad')).toEqual(
      R.Error('this is bad'),
    )
    expect(R.fromPredicate(0, n => n !== 0, 'this is bad')).toBeError('this is bad')
    expect(R.fromPredicate(true, state => !state, 'this is bad')).toBeError('this is bad')
  })

  it('returns Ok', () => {
    expect(
      R.fromPredicate(
        [1, 2, 3],
        A.some(x => x === 2),
        'this is bad',
      ),
    ).toBeOk([1, 2, 3])
    expect(
      R.fromPredicate({ prop: 'this is fine' }, obj => obj.prop === 'this is fine', 'this is bad'),
    ).toBeOk({ prop: 'this is fine' })
  })
})
