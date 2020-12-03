import { Error, Ok, fromPredicate } from '@mobily/ts-belt/Result'

describe('fromPredicate', () => {
  it('should return Error', () => {
    const error = Error('this is bad')
    expect(fromPredicate(str => str.length > 10, 'this is bad', 'value')).toEqual(error)
    expect(fromPredicate(n => n !== 0, 'this is bad', 0)).toEqual(error)
    expect(fromPredicate(state => !state, 'this is bad', true)).toEqual(error)
  })

  it('should return Ok', () => {
    expect(fromPredicate(arr => arr.some(x => x === 2), 'this is bad', [1, 2, 3])).toEqual(
      Ok([1, 2, 3]),
    )
    expect(
      fromPredicate(obj => obj.prop === 'this is fine', 'this is bad', { prop: 'this is fine' }),
    ).toEqual(Ok({ prop: 'this is fine' }))
  })
})
