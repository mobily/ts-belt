import type { Option } from '../types'
import { isNone } from './isNone'

export const toUndefined = <T>(option: Option<T>): T | undefined => {
  return isNone(option) ? undefined : option.value
}
