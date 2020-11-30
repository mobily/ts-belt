import type * as Type from '../types'
import { Error } from './Error'
import { Ok } from './Ok'
import { curry2 } from '../utils'

type Curry2 = {
  <B>(error: B): (value: 0 | '' | false | null | undefined) => Type.Error<B>
  <B>(error: B, value: 0 | '' | false | null | undefined): Type.Error<B>
  <B>(error: B): <A>(value: A) => Type.Result<A, B>
  <A, B>(error: B, value: A): Type.Result<A, B>
}

export const fromFalsy: Curry2 = curry2(<A, B>(error: B, value: A): any => {
  return Boolean(value) ? Ok(value) : Error(error)
})
