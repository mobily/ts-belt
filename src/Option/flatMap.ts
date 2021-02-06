import type { MapFn, Option } from '../types'
import { None } from './None'
import { curry2 } from '../utils'
import { isNone } from './isNone'

type Curry2 = {
  <T, R>(mapFn: MapFn<NonNullable<T>, Option<R>>): (option: Option<T>) => Option<R>
  <T, R>(mapFn: MapFn<NonNullable<T>, Option<R>>, option: Option<T>): Option<R>
}

export const flatMap: Curry2 = curry2(
  <T, R>(fn: MapFn<NonNullable<T>, Option<R>>, option: Option<T>): any => {
    return isNone(option) ? None : fn(option.value)
  },
)
