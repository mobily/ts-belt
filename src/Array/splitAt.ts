import { None, Some } from '../Option'
import type { Option } from '../types'
import { curry2, withinRange } from '../utils'

type Tuple<T> = [T[], T[]]

type Curry2 = {
  (index: number): <T>(list: T[]) => Option<Tuple<T>>
  <T>(index: number, list: T[]): Option<Tuple<T>>
}

export const splitAt: Curry2 = curry2(<T>(index: number, list: T[]): any => {
  return withinRange(index, list)
    ? Some([list.slice(0, index), list.slice(index, Infinity)] as Tuple<T>)
    : None
})
