import { pipe } from '@mobily/ts-belt'
import { None, Some } from '@mobily/ts-belt/Option'
import { Error, Ok, flatMap, fromNullable, toOption } from '@mobily/ts-belt/Result'

describe('toOption', () => {
  it('should return None', () => {
    expect(pipe(fromNullable('this is bad', null), toOption)).toEqual(None)
    expect(
      pipe(
        fromNullable('this is bad', 'value'),
        flatMap(_ => Error('new error')),
        toOption,
      ),
    ).toEqual(None)
    expect(
      pipe(
        fromNullable('this is bad', null),
        flatMap(_ => Ok('this is fine')),
        toOption,
      ),
    ).toEqual(None)
  })

  it('should return Some', () => {
    expect(pipe(Ok('value'), toOption)).toEqual(Some('value'))
    expect(pipe(fromNullable('this is bad', 'value'), toOption)).toEqual(Some('value'))
    expect(
      pipe(
        fromNullable('this is bad', 'this is fine'),
        flatMap(str => Ok(`${str}!`)),
        toOption,
      ),
    ).toEqual(Some('this is fine!'))
  })
})
