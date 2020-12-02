import { None } from './None'
import type { Option, Predicate } from '../types'
import { Some } from './Some'
import { curry2 } from '../utils'

type Curry2 = {
  <T>(predicate: Predicate<[T]>): (option: Option<T>) => Option<T>
  <T>(predicate: Predicate<[T]>, option: Option<T>): Option<T>
}

export const filter: Curry2 = curry2(<T>(predicate: Predicate<[T]>, option: Option<T>): any => {
  return predicate(option.value) ? Some(option.value) : None
})
