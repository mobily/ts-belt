import type * as Type from '../types'
import { SymbolNone } from '../utils'

export const None = Object.freeze({
  value: null,
  __type: SymbolNone,
}) as Type.None
