import type * as Type from '../types'
import { Error } from './Error'
import { Ok } from './Ok'
import { curry2, toBoolean } from '../utils'

type Curry2 = {
  <B>(error: NonNullable<B>): (value: 0 | '' | false | null | undefined) => Type.Error<B>
  <B>(error: NonNullable<B>, value: 0 | '' | false | null | undefined): Type.Error<B>
  <B>(error: NonNullable<B>): <A>(value: A) => Type.Result<A, B>
  <A, B>(error: NonNullable<B>, value: A): Type.Result<A, B>
}

export const fromFalsy: Curry2 = curry2(<A, B>(error: NonNullable<B>, value: A): any => {
  return toBoolean(value) ? Ok(value) : Error(error)
})
