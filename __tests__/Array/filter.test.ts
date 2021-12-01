import { expectType } from 'ts-expect'

import { A, pipe } from '../..'

describe('filter', () => {
  it('provides correct types', () => {
    A.filter([1, 2], value => {
      expectType<number>(value)
      return value % 2 === 0
    })
    A.filter([1, 'hello'], value => {
      expectType<number | string>(value)
      return !value
    })
  })

  it('*', () => {
    expect(A.filter([1, 2, 3, 4], value => value % 2 === 0)).toEqual([2, 4])
  })
})

describe('filter (pipe)', () => {
  it('provides correct types', () => {
    pipe(
      [1, 2],
      A.filter(value => {
        expectType<number>(value)
        return value % 2 === 0
      }),
    )
  })

  it('*', () => {
    expect(
      pipe(
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        A.filter(value => value % 2 === 0),
      ),
    ).toEqual([2, 4, 6, 8])
    expect(
      pipe(
        ['hello', 'wo', 'rld'],
        A.filter(value => value.length < 4),
      ),
    ).toEqual(['wo', 'rld'])
  })
})
