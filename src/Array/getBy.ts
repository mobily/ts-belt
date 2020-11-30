import type { Option, Predicate } from '../types'
import { curry2 } from '../utils'
import { fromNullable } from '../Option'

type Curry2 = {
  <T>(predicate: Predicate<[T, number]>): (list: T[]) => Option<T>
  <T>(predicate: Predicate<[T, number]>, list: T[]): Option<T>
}

export const getBy: Curry2 = curry2(
  <T>(predicate: Predicate<[T, number]>, list: T[]): any => {
    return fromNullable(list.find(predicate))
  },
)
