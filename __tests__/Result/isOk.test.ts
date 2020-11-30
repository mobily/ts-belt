import { Error, Ok, isOk } from '@mobily/ts-belt/Result'

describe('isOk', () => {
  it('*', () => {
    expect(isOk(Ok('good'))).toBeTruthy()
    expect(isOk(Error('bad'))).toBeFalsy()
  })
})
