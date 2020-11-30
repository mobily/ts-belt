import { Error, Ok, isError } from '@mobily/ts-belt/Result'

describe('isError', () => {
  it('*', () => {
    expect(isError(Ok('good'))).toBeFalsy()
    expect(isError(Error('bad'))).toBeTruthy()
  })
})
