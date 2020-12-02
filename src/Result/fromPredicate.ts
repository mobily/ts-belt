import { Error } from './Error'
import type { Predicate, Result } from '../types'
import { curry3 } from '../utils'
import { fromNullable } from './fromNullable'

type Curry3 = {
  <A>(predicate: Predicate<[A]>): <B>(error: NonNullable<B>) => <A>(value: A) => Result<A, B>
  <A, B>(predicate: Predicate<[A]>, error: NonNullable<B>): (value: A) => Result<A, B>
  <A, B>(predicate: Predicate<[A]>, error: NonNullable<B>, value: A): Result<A, B>
}

export const fromPredicate: Curry3 = curry3(
  <A, B>(predicate: Predicate<[A]>, error: NonNullable<B>, value: A): any => {
    return predicate(value) ? fromNullable(error, value) : Error(error)
  },
)
