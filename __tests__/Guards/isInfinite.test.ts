import { G } from '../..'

describe('isInFinite', () => {
  
  it('determines whether the provided value is finite', () => {
    expect(G.isInfinite(0)).toEqual(false)
    expect(G.isInfinite(Infinity)).toEqual(true)
    expect(G.isInfinite(1/0)).toEqual(true)
  })
})
