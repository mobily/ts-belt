import { expectType } from 'ts-expect'

import { A, F, pipe } from '../..'

type Obj = {
  readonly a?: number
  readonly b?: number
  readonly c?: number
}

describe('differenceWith', () => {
  it('provides correct types', () => {
    expectType<ReadonlyArray<string>>(
      A.differenceWith(['', 'hello', 'world'],[''], F.equals),
    )
  })

  it('returns a correct result', () => {
    expect(
      A.differenceWith<Obj>([{ a: 1 }, { b: 2 }],[{ a: 1 }, { c: 3 }], F.equals),
    ).toEqual([{ b: 2 }])
  })

  it('*', () => {
    expect(A.differenceWith([1, 2, 3, 4],[3, 4, 5, 6], F.equals)).toEqual([1, 2])
  })
})

describe('difference (pipe)', () => {
  it('provides correct types', () => {
    expectType<ReadonlyArray<number>>(
      pipe([5, 2, 3, 5, 6], A.differenceWith([5, 2, 3, 1, 5, 4],F.equals)),
    )
  })

  it('*', () => {
    expect(pipe([5, 2, 3, 5, 6], A.differenceWith([5, 2, 3, 1, 5, 4],F.equals))).toEqual([6])
  })
})
