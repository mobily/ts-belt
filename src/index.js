import { None, Some, Error, Ok } from './utils.js'

import * as OptionFns from './Option.bs.js'
import * as ResultFns from './Result.bs.js'
import * as ArrayFns from './Array.bs.js'
import * as FunctionFns from './Function.bs.js'

export { pipe } from './utils.js'

const Option = {
  ...OptionFns,
  Some,
  None,
}
const Result = {
  ...ResultFns,
  Ok,
  Error,
}

export const A = ArrayFns
export const O = Option
export const R = Result
export const F = FunctionFns
