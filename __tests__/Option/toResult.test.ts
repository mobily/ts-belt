import { pipe, O } from '../..'

describe('toResult', () => {
  it('should return Error', () => {
    expect(pipe(O.fromNullable(null), O.toResult('this is bad'))).toBeError('this is bad')
    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
        O.toResult('this is bad'),
      ),
    ).toBeError('this is bad')
  })

  it('should return Ok', () => {
    expect(pipe(O.fromNullable('value'), O.toResult('this is bad'))).toBeOk('value')
    expect(
      pipe(
        O.fromNullable({ prop: 'value' }),
        O.mapNullable(obj => obj.prop),
        O.toResult('this is bad'),
      ),
    ).toBeOk('value')
  })
})
