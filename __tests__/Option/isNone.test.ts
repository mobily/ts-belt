import { None, isNone } from '@mobily/ts-belt/Option'

describe('isNone', () => {
  it('*', () => {
    expect(isNone(None)).toBeTruthy()
  })
})
