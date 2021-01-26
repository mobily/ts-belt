import { None } from '../Option/None'
import type { Option } from '../types'
import { Some } from '../Option/Some'
import { curry2, withinRange } from '../utils'

type Curry2 = {
  (n: number): <T>(list: T[]) => Option<T[]>
  <T>(n: number, list: T[]): Option<T[]>
}

export const drop: Curry2 = curry2(<T>(n: number, list: T[]): any => {
  return withinRange(n, list) ? Some(list.slice(n, Infinity)) : None
})
