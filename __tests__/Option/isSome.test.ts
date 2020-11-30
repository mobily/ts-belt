import { Some, isSome } from '@mobily/ts-belt/Option'

describe('isSome', () => {
  it('*', () => {
    expect(isSome(Some('string'))).toBeTruthy()
  })
})
