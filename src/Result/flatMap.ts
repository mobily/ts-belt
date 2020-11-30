import type { MapFn, Ok, Result } from '../types'
import { curry2 } from '../utils'
import { isError } from './isError'

type ExtractOk<T> = T extends Ok<infer C> ? C : never

type Curry2 = {
  <A, B, R extends Result<any, B>>(fn: MapFn<A, R>): (
    result: Result<A, B>,
  ) => Result<ExtractOk<R>, B>
  <A, B, R extends Result<any, B>>(
    fn: MapFn<A, R>,
    result: Result<A, B>,
  ): Result<ExtractOk<R>, B>
}

export const flatMap: Curry2 = curry2(
  <A, B, R extends Result<any, B>>(
    fn: MapFn<A, R>,
    result: Result<A, B>,
  ): any => {
    return isError(result) ? result : fn(result.value)
  },
)
