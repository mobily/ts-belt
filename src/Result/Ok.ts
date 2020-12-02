import type * as Type from '../types'
import { SymbolOk } from '../utils'

export const Ok = <T>(value: NonNullable<T>): Type.Ok<T> => {
  return Object.freeze({ value, __type: SymbolOk }) as Type.Ok<T>
}
