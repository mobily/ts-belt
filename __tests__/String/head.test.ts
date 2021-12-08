import { S, O } from '../..'

 describe('head', () => {
   it('returns None if the given string is empty.', () => {
     expect(S.head('')).toEqual(O.None)
   })

   it('Returns Some(value) where value is the first character of the string', () => {
     expect(S.head('random-text')).toEqual(O.Some('r'))
   })

   it('*', () => {
    expect(S.head('random-text')).toEqual(O.Some('r'))
  })
 })