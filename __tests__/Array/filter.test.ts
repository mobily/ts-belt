import { expectType } from 'ts-expect'

import { A, pipe } from '../..'

const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// TODO: expectType
describe('filter', () => {
  it('returns correct value', () => {
    const result = A.filter(xs, value => value % 2 === 0)
    expect(result).toEqual([2, 4, 6, 8])
  })
})

describe('filter (pipe)', () => {
  it('returns correct value', () => {
    const result = pipe(
      xs,
      A.filter(value => value % 2 === 0),
    )

    expect(result).toEqual([2, 4, 6, 8])
  })
})
