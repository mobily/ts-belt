import { None, Some } from '../Option'
import type { Option, Result } from '../types'
import { isError } from './isError'

export const toOption = <A, B>(result: Result<A, B>): Option<A> => {
  return isError(result) ? None : Some(result.value)
}
