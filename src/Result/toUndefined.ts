import type { Result } from '../types'
import { isError } from './isError'

export const toUndefined = <A, B>(result: Result<A, B>): A | undefined => {
  return isError(result) ? undefined : result.value
}
