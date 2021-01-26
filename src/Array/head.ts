import type { Option } from '../types'
import { fromNullable } from '../Option/fromNullable'

export const head = <T>(list: T[]): Option<T> => {
  return fromNullable(list[0])
}
