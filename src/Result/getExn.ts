import type { Result } from '../types'
import { isError } from './isError'

export const getExn = <A, B>(result: Result<A, B>): NonNullable<A> | never => {
  if (isError(result)) {
    throw new Error('Error')
  }

  return result.value
}
