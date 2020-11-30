import type { MapFn, Option } from '../types'
import { curry2 } from '../utils'
import { isNone } from './isNone'
import { None } from './None'

type Curry2 = {
  <T, R>(mapFn: MapFn<T, Option<R>>): (option: Option<T>) => Option<R>
  <T, R>(mapFn: MapFn<T, Option<R>>, option: Option<T>): Option<R>
}

export const flatMap: Curry2 = curry2(
  <T, R>(fn: MapFn<T, Option<R>>, option: Option<T>): any => {
    return isNone(option) ? None : fn(option.value)
  },
)
