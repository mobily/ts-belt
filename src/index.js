import { None, Some, Error, Ok } from './utils.js'

import * as OptionFns from './Option.bs.js'
import * as ResultFns from './Result.bs.js'
import * as ArrayFns from './Array.bs.js'

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
const Array = ArrayFns

export const A = Array
export const O = Option
export const R = Result
