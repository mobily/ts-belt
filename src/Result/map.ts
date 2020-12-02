import { Error } from './Error'
import type { MapFn, Result } from '../types'
import { Ok } from './Ok'
import { curry2 } from '../utils'
import { isError } from './isError'

type Curry2 = {
  <A, B, R>(fn: MapFn<A, NonNullable<R>>): (result: Result<A, B>) => Result<R, B>
  <A, B, R>(fn: MapFn<A, NonNullable<R>>, result: Result<A, B>): Result<R, B>
}

export const map: Curry2 = curry2(
  <A, B, R>(fn: MapFn<A, NonNullable<R>>, result: Result<A, B>): any => {
    return isError(result) ? Error(result.value) : Ok(fn(result.value))
  },
)
