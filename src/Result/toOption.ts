import { None } from '../Option/None'
import type { Option, Result } from '../types'
import { Some } from '../Option/Some'
import { isError } from './isError'

export const toOption = <A, B>(result: Result<A, B>): Option<A> => {
  return isError(result) ? None : Some(result.value)
}
