import type { None, Option } from '../types'
import { SymbolNone } from '../utils'

export const isNone = <T>(option: Option<T>): option is None => {
  return option.__type === SymbolNone
}
