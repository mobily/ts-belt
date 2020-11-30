import type { Option } from '../types'
import { curry3 } from '../utils'
import { isNone } from './isNone'

type Curry3 = {
  <T, R>(someFn: (value: T) => R): (noneFn: () => R) => (option: Option<T>) => R
  <T, R>(someFn: (value: T) => R, noneFn: () => R): (option: Option<T>) => R
  <T, R>(someFn: (value: T) => R, noneFn: () => R, option: Option<T>): R
}

export const match: Curry3 = curry3(
  <T, R>(someFn: (value: T) => R, noneFn: () => R, option: Option<T>): any => {
    return isNone(option) ? noneFn() : someFn(option.value)
  },
)
