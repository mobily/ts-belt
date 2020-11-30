import type { MapFn, Option } from '../types'
import { None } from './None'
import { curry2 } from '../utils'
import { fromNullable } from './fromNullable'
import { isNone } from './isNone'

type Curry2 = {
  <T, R>(mapFn: MapFn<T, R | null | undefined>): (option: Option<T>) => Option<R>
  <T, R>(mapFn: MapFn<T, R | null | undefined>, option: Option<T>): Option<R>
}

export const mapNullable: Curry2 = curry2(<T, R>(fn: MapFn<T, R>, option: Option<T>): any => {
  return isNone(option) ? None : fromNullable(fn(option.value))
})
