import type { Option } from '../types'
import { curry2 } from '../utils'
import { isNone } from './isNone'

type Curry2 = {
  <T>(defaultValue: NonNullable<T>): (option: Option<T>) => T
  <T>(defaultValue: NonNullable<T>, option: Option<T>): T
}

export const getWithDefault: Curry2 = curry2(<T>(defaultValue: T, option: Option<T>): any => {
  return isNone(option) ? defaultValue : option.value
})
