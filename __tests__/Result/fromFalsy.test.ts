import { Error, Ok, fromFalsy } from '@mobily/ts-belt/Result'

describe('fromFalsy', () => {
  it('should return Error', () => {
    const error = Error('this is bad')
    expect(fromFalsy('this is bad', null)).toEqual(error)
    expect(fromFalsy('this is bad', undefined)).toEqual(error)
    expect(fromFalsy('this is bad', 0)).toEqual(error)
    expect(fromFalsy('this is bad', '')).toEqual(error)
    expect(fromFalsy('this is bad', false)).toEqual(error)
  })

  it('should return Ok', () => {
    expect(fromFalsy('this is bad', 'value')).toEqual(Ok('value'))
    expect(fromFalsy('this is bad', [])).toEqual(Ok([]))
    expect(fromFalsy('this is bad', {})).toEqual(Ok({}))
  })
})
