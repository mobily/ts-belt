import type * as Type from '../types'
import { None } from './None'
import { curry2 } from '../utils'
import { fromNullable } from './fromNullable'
import { isNone } from './isNone'

type Curry2 = {
  <T>(mapFn: Type.MapFn<T, null | undefined>): (option: Type.Option<T>) => Type.None
  <T, R>(mapFn: Type.MapFn<T, R>): (option: Type.Option<T>) => Type.Some<R>
  <T>(mapFn: Type.MapFn<T, null | undefined>, option: Type.Option<T>): Type.None
  <T, R>(mapFn: Type.MapFn<T, R>, option: Type.Option<T>): Type.Some<R>
}

export const mapNullable: Curry2 = curry2(
  <T, R>(fn: Type.MapFn<T, R>, option: Type.Option<T>): any => {
    return isNone(option) ? None : fromNullable(fn(option.value))
  },
)
