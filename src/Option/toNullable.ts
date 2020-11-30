import type { Option } from '../types'
import { isNone } from './isNone'

export const toNullable = <T>(option: Option<T>): T | null => {
  return isNone(option) ? null : option.value
}
