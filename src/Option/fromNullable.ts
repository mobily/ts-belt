import type * as Type from '../types'
import { None } from './None'
import { Some } from './Some'
import { isNotNil } from '../utils'

type FromNullable = {
  (value: null | undefined): Type.None
  <T>(value: T): Type.Some<T>
}

export const fromNullable: FromNullable = <T>(value: T | null | undefined): any => {
  return isNotNil(value) ? Some(value) : None
}
