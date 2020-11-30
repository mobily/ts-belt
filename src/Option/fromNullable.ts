import type * as Type from '../types'
import { None } from './None'
import { Some } from './Some'

type FromNullable = {
  (value: null | undefined): Type.None
  <T>(value: T): Type.Some<T>
}

export const fromNullable: FromNullable = <T>(
  value: T | null | undefined,
): any => {
  return value == null ? None : Some(value)
}
