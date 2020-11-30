import type { Result } from '../types'
import { isError } from './isError'

export const toNullable = <A, B>(result: Result<A, B>): A | null => {
  return isError(result) ? null : result.value
}
