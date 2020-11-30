import type * as Type from '../types'
import { SymbolSome } from '../utils'

export const Some = <T extends NonNullable<{}>>(value: T): Type.Some<T> => {
  return Object.freeze({ value, __type: SymbolSome }) as Type.Some<T>
}
