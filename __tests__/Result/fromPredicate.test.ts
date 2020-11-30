import { Error, Ok, fromPredicate } from '@mobily/ts-belt/Result'

describe('fromPredicate', () => {
  it('*', () => {
    expect(fromPredicate(str => str.length > 10, '1', 'string')).toEqual(Error('1'))
    expect(fromPredicate(n => n !== 0, '2', 0)).toEqual(Error('2'))
    expect(fromPredicate(state => !state, '3', true)).toEqual(Error('3'))
  })

  it('*', () => {
    expect(fromPredicate(arr => arr.some(x => x === 2), '1', [1, 2, 3])).toEqual(Ok([1, 2, 3]))
    expect(fromPredicate(obj => obj.prop === null, '2', { prop: null })).toEqual(Ok({ prop: null }))
  })
})
