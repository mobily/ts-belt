import { None } from '../Option/None'
import type { Option } from '../types'
import { Some } from '../Option/Some'

export const tail = <T>(list: T[]): Option<T[]> => {
  const tl = list.slice(1)
  return Boolean(tl?.length) ? Some(tl) : None
}
