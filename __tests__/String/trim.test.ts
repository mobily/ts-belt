import { expectType } from 'ts-expect'

import { S } from '../..'

describe('trim', () => {
  it('provides correct types', () => {
    expectType<string>(S.trim('test-text'))
  })

  it('returns a new string with leading and trailing whitespace removed from str', () => {
    expect(S.trim('    test-text')).toEqual('test-text')
  })
})
