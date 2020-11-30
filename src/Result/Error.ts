import type * as Type from '../types'
import { SymbolError } from '../utils'

export const Error = <T>(value: T): Type.Error<T> => {
  return Object.freeze({ value, __type: SymbolError }) as Type.Error<T>
}
