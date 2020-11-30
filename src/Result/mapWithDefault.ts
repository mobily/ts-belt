import type { MapFn, Result } from '../types'
import { Ok } from './Ok'
import { curry3 } from '../utils'
import { isError } from './isError'

type Curry3 = {
  <A, B, R>(defaultValue: NonNullable<R>): (
    fn: MapFn<A, NonNullable<R>>,
  ) => (result: Result<A, B>) => Result<R, B>
  <A, B, R>(defaultValue: NonNullable<R>, fn: MapFn<A, NonNullable<R>>): (
    result: Result<A, B>,
  ) => Result<R, B>
  <A, B, R>(
    defaultValue: NonNullable<R>,
    fn: MapFn<A, NonNullable<R>>,
    result: Result<A, B>,
  ): Result<R, B>
}

export const mapWithDefault: Curry3 = curry3(
  <A, B, R>(
    defaultValue: NonNullable<R>,
    fn: MapFn<A, NonNullable<R>>,
    result: Result<A, B>,
  ): any => {
    return Ok(isError(result) ? defaultValue : fn(result.value))
  },
)
