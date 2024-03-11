import { G } from '../..'

describe('isFinite', () => {
  
  it('determines whether the provided value is finite', () => {
    expect(G.isFinite(0)).toEqual(true)
    expect(G.isFinite(Infinity)).toEqual(false)
  })
})
