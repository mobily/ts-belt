import { expectType } from 'ts-expect'

import { A, D, F, O, flow, pipe } from '../..'

type Obj = {
  readonly a?: number
  readonly b?: number
  readonly c?: number
}

describe('differenceWith', () => {
  it('provides correct types', () => {
    expectType<ReadonlyArray<string>>(
      A.differenceWith(['', 'hello', 'world'],[''], F.identity),
    )
  })

  it('returns a correct result', () => {
    expect(
      A.differenceWith<Obj>([{ a: 1 }, { b: 2 }],[{ a: 1 }, { c: 3 }], F.identity),
    ).toEqual([{ b: 2 }])
    expect(
      A.differenceWith<{a:number}>([{a:1}, {a:2}], [{a:1}], D.get('a'))
    ).toEqual([{a:2}])
    expect(
      A.differenceWith([{a:{a1:1}}, {a:{a1:2}}], [{a:{a1:1}}], D.get('a'))
    ).toEqual([{a:{a1:2}}])
    expect(
      A.differenceWith([{a:{a1:1}}, {a:{a1:2}}], [{a:{a1:1}}], flow(D.get('a'),O.flatMap(D.get('a1'))))
    ).toEqual([{a:{a1:2}}])
  })

  it('*', () => {
    expect(A.differenceWith([1, 2, 3, 4],[3, 4, 5, 6], F.identity)).toEqual([1, 2])
  })
})

describe('difference (pipe)', () => {
  it('provides correct types', () => {
    expectType<ReadonlyArray<number>>(
      pipe([5, 2, 3, 5, 6], A.differenceWith([5, 2, 3, 1, 5, 4],F.identity)),
    )
  })

  it('*', () => {
    expect(pipe([5, 2, 3, 5, 6], A.differenceWith([5, 2, 3, 1, 5, 4],F.identity))).toEqual([6])
  })
})
