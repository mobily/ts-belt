import { Result } from '../types'
import { curry3 } from '../utils'
import { isError } from './isError'

type Curry3 = {
  <A, R>(okFn: (value: A) => R): <B>(errorFn: (value: B) => R) => (result: Result<A, B>) => R
  <A, B, R>(okFn: (value: A) => R, errorFn: (value: B) => R): (result: Result<A, B>) => R
  <A, B, R>(okFn: (value: A) => R, errorFn: (value: B) => R, result: Result<A, B>): R
}

export const match: Curry3 = curry3(
  <A, B, R>(okFn: (value: A) => R, errorFn: (value: B) => R, result: Result<A, B>): any => {
    return isError(result) ? errorFn(result.value) : okFn(result.value)
  },
)
