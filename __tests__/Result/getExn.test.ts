import { pipe } from '@mobily/ts-belt'
import { fromNullable, getExn } from '@mobily/ts-belt/Result'

describe('getExn', () => {
  it('should throw an error', () => {
    expect(() => {
      pipe(fromNullable('this is bad', null), getExn)
    }).toThrow(Error('Error'))
  })

  it('should return a value', () => {
    expect(pipe(fromNullable('this is bad', 'value'), getExn)).toBe('value')
  })
})
