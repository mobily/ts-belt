import type { MapFn, Option } from '../types'
import { None } from './None'
import { Some } from './Some'
import { curry2 } from '../utils'
import { isNone } from './isNone'

type Curry2 = {
  <T, R>(mapFn: MapFn<T, NonNullable<R>>): (option: Option<T>) => Option<R>
  <T, R>(mapFn: MapFn<T, NonNullable<R>>, option: Option<T>): Option<R>
}

export const map: Curry2 = curry2(
  <T, R>(fn: MapFn<T, NonNullable<R>>, option: Option<T>): any => {
    return isNone(option) ? None : Some(fn(option.value))
  },
)
