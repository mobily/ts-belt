import { S, O } from '../..'

describe('last', () => {
  it('returns None if the given string is empty.', () => {
    expect(S.last('')).toEqual(O.None)
  })

  it('returns Some(value) where value is the last character of the string', () => {
    expect(S.last('random-text')).toEqual('t')
  })

  it('*', () => {
    expect(S.last('random-text')).toEqual('t')
  })
})
