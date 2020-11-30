import { Error } from './Error'
import { Ok } from './Ok'
import type { Result } from '../types'
import { curry2 } from '../utils'

type Curry2 = {
  <B>(error: B): <A>(value: A) => Result<A, B>
  <A, B>(error: B, value: A): Result<A, B>
}

export const fromNullable: Curry2 = curry2(
  <A, B>(error: B, value: A | null | undefined): any => {
    return value == null ? Error(error) : Ok(value)
  },
)
