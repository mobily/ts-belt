import { F, D } from '../..'

describe('descend', () => {
  it('compares value', () => {
    expect(F.descend(D.getUnsafe('a'), { a: 0 }, { a: 1 })).toBe(1)
    expect(F.descend(D.getUnsafe('a'), { a: 1 }, { a: 0 })).toBe(-1)
    expect(F.descend(D.getUnsafe('a'), { a: 2 }, { a: 2 })).toBe(0)
    expect(F.descend(D.getUnsafe('a'), { a: '2' }, { a: '2' })).toBe(0)
    expect(F.descend(D.getUnsafe('a'), { a: 'a' }, { a: 'b' })).toBe(1)
    expect(F.descend(D.getUnsafe('a'), { a: 'b' }, { a: 'a' })).toBe(-1)
  })
})
