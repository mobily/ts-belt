import type { Ok, Result } from '../types'
import { SymbolOk } from '../utils'

export const isOk = <A, B>(result: Result<A, B>): result is Ok<A> => {
  return result.__type === SymbolOk
}
