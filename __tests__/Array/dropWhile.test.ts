import { expectType } from 'ts-expect'

import { A, pipe } from '../..'

const xs = [1, 2, 3, 4, 5, 6, 7]

// TODO: expectType
describe('dropWhile', () => {
  it('drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate', () => {
    const result = A.dropWhile(xs, x => x < 4)
    expect(result).toEqual([4, 5, 6, 7])
  })

  it('returns correct array elements if either true or false', () => {
    expect(A.dropWhile(xs, _x => true)).toEqual([])
    expect(A.dropWhile(xs, _x => false)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

describe('dropWhile (pipe)', () => {
  it('drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate', () => {
    const result = pipe(
      xs,
      A.dropWhile(x => x < 4),
    )
    expect(result).toEqual([4, 5, 6, 7])
  })
})
