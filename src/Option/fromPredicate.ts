import { None } from './None'
import { Option, Predicate } from '../types'
import { curry2 } from '../utils'
import { fromNullable } from './fromNullable'

type Curry2 = {
  <T>(predicate: Predicate<[T]>): (value: T) => Option<T>
  <T>(predicate: Predicate<[T]>, value: T): Option<T>
}

export const fromPredicate: Curry2 = curry2(
  <T>(predicate: Predicate<[T]>, value: T): any => {
    return predicate(value) ? fromNullable(value) : None
  },
)
