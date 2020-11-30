import { None, Some } from '../Option'
import type { Option } from '../types'

export const tail = <T>(list: T[]): Option<T[]> => {
  const tl = list.slice(1)
  return Boolean(tl?.length) ? Some(tl) : None
}
