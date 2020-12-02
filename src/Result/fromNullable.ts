import { Error } from './Error'
import { Ok } from './Ok'
import type { Result } from '../types'
import { curry2, isNotNil } from '../utils'

type Curry2 = {
  <B>(error: NonNullable<B>): <A>(value: A) => Result<A, B>
  <A, B>(error: NonNullable<B>, value: A): Result<A, B>
}

export const fromNullable: Curry2 = curry2(
  <A, B>(error: NonNullable<B>, value: A | null | undefined): any => {
    return isNotNil(value) ? Ok(value) : Error(error)
  },
)
