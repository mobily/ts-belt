import type { Option } from '../types'
import { fromNullable } from '../Option'

export const head = <T>(list: T[]): Option<T> => {
  return fromNullable(list[0])
}
