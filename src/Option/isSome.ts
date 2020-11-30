import type { Option, Some } from '../types'
import { SymbolSome } from '../utils'

export const isSome = <T>(option: Option<T>): option is Some<T> => {
  return option.__type === SymbolSome
}
