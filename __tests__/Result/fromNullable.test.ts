import { Error, Ok, fromNullable } from '@mobily/ts-belt/Result'

describe('fromNullable', () => {
  it('should return Error', () => {
    const error = Error('this is bad')
    expect(fromNullable('this is bad', null)).toEqual(error)
    expect(fromNullable('this is bad', undefined)).toEqual(error)
  })

  it('should return Ok', () => {
    expect(fromNullable('this is bad', 'value')).toEqual(Ok('value'))
    expect(fromNullable('this is bad', [])).toEqual(Ok([]))
    expect(fromNullable('this is bad', {})).toEqual(Ok({}))
    expect(fromNullable('this is bad', 0)).toEqual(Ok(0))
    expect(fromNullable('this is bad', 1)).toEqual(Ok(1))
    expect(fromNullable('this is bad', false)).toEqual(Ok(false))
    expect(fromNullable('this is bad', true)).toEqual(Ok(true))
  })
})
