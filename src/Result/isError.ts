import type { Error, Result } from '../types'
import { SymbolError } from '../utils'

export const isError = <A, B>(result: Result<A, B>): result is Error<B> => {
  return result.__type === SymbolError
}
