import type { Option } from '../types'
import { curry2 } from '../utils'
import { fromNullable } from '../Option/fromNullable'

type Curry2 = {
  (index: number): <T>(list: T[]) => Option<T>
  <T>(index: number, list: T[]): Option<T>
}

export const get: Curry2 = curry2(<T>(index: number, list: T[]): any => {
  return fromNullable(list[index])
})
