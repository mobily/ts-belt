import { pipe } from '@mobily/ts-belt'
import { fromNullable, mapNullable, toResult } from '@mobily/ts-belt/Option'
import { Error, Ok } from '@mobily/ts-belt/Result'

describe('toResult', () => {
  it('should return Error', () => {
    expect(pipe(fromNullable(null), toResult('this is bad'))).toEqual(Error('this is bad'))
    expect(
      pipe(
        fromNullable({ prop: null }),
        mapNullable(obj => obj.prop),
        toResult('this is bad'),
      ),
    ).toEqual(Error('this is bad'))
  })

  it('should return Ok', () => {
    expect(pipe(fromNullable('value'), toResult('this is bad'))).toEqual(Ok('value'))
    expect(
      pipe(
        fromNullable({ prop: 'value' }),
        mapNullable(obj => obj.prop),
        toResult('this is bad'),
      ),
    ).toEqual(Ok('value'))
  })
})
