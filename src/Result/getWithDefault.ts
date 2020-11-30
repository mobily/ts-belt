import type { Result } from '../types'
import { curry2 } from '../utils'
import { isError } from './isError'

type Curry2 = {
  <A>(defaultValue: NonNullable<A>): <B>(result: Result<A, B>) => A
  <A, B>(defaultValue: NonNullable<A>, result: Result<A, B>): A
}

export const getWithDefault: Curry2 = curry2(
  <A, B>(defaultValue: NonNullable<A>, result: Result<A, B>): any => {
    return isError(result) ? defaultValue : result.value
  },
)
