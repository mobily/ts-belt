import type * as Type from '../types'
import { Error } from '../Result/Error'
import { Ok } from '../Result/Ok'
import { curry2 } from '../utils'
import { isNone } from './isNone'

type Curry2 = {
  <A, B>(error: NonNullable<B>): (option: Type.Option<A>) => Type.Result<A, B>
  <A, B>(error: NonNullable<B>, option: Type.Option<A>): Type.Result<A, B>
}

export const toResult: Curry2 = curry2(
  <A, B>(error: NonNullable<B>, option: Type.Option<A>): any => {
    return isNone(option) ? Error(error) : Ok(option.value)
  },
)
