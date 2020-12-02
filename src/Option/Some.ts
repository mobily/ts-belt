import type * as Type from '../types'
import { SymbolSome } from '../utils'

export const Some = <T>(value: NonNullable<T>): Type.Some<T> => {
  return Object.freeze({ value, __type: SymbolSome }) as Type.Some<T>
}
