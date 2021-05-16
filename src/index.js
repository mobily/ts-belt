import { None, Some } from './Option.js'
import * as Option from './Option.bs.js'

import { Ok, Error } from './Result.js'
import * as Result from './Result.bs.js'

import * as array from './Array.bs.js'
import * as fns from './Function.bs.js'

export { pipe } from './pipe.js'

const option = {
  ...Option,
  Some,
  None,
}

const result = {
  ...Result,
  Ok,
  Error,
}

export const F = fns
export const A = array
export const R = result

export const O = option
