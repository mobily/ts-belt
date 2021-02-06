import type { MapFn, Option } from '../types'
import { Some } from './Some'
import { curry3 } from '../utils'
import { isNone } from './isNone'

type Curry3 = {
  <R>(defaultValue: NonNullable<R>): <T>(
    mapFn: MapFn<NonNullable<T>, NonNullable<R>>,
  ) => (option: Option<T>) => Option<R>
  <T, R>(defaultValue: NonNullable<R>, mapFn: MapFn<NonNullable<T>, NonNullable<R>>): (
    option: Option<T>,
  ) => Option<R>
  <T, R>(
    defaultValue: NonNullable<R>,
    mapFn: MapFn<NonNullable<T>, NonNullable<R>>,
    option: Option<T>,
  ): Option<R>
}

export const mapWithDefault: Curry3 = curry3(
  <T, R>(
    defaultValue: NonNullable<R>,
    fn: MapFn<NonNullable<T>, NonNullable<R>>,
    option: Option<T>,
  ): any => {
    return Some(isNone(option) ? defaultValue : fn(option.value))
  },
)
