import { expectType } from 'ts-expect'

import { S } from '../..'

describe('trim', () => {
  it('provides correct types', () => {
    expectType<string>(S.trim('text'))
  })

  it('returns a new string with leading and trailing whitespace removed from str', () => {
    expect(S.trim('  text')).toEqual('text')
  })
})
