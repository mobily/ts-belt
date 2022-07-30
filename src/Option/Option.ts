import type { Result } from '../Result/Result'
import type { ExtractValue } from '../types'

export declare type Option<A> = A | null | undefined

export declare const Some: <A>(value: NonNullable<A>) => Option<A>
export declare const None: Option<never>

export declare function fromNullable<A>(value: A): Option<ExtractValue<A>>
export declare function fromFalsy<A>(value: A): Option<ExtractValue<A>>
export declare function fromPredicate<A>(
  value: A,
  predicateFn: (value: NonNullable<A>) => boolean,
): Option<ExtractValue<A>>
export declare function fromExecution<A>(fn: () => A): Option<ExtractValue<A>>
export declare function fromPromise<A>(
  promise: Promise<A>,
): Promise<Option<ExtractValue<A>>>
export declare function filter<A>(
  option: Option<A>,
  predicateFn: (value: A) => boolean,
): Option<A>
export declare function map<A, B>(
  option: Option<A>,
  mapFn: (value: A) => NonNullable<B>,
): Option<B>
export declare function flatMap<A, B>(
  option: Option<A>,
  mapFn: (value: A) => Option<B>,
): Option<B>
export declare function mapNullable<A, B>(
  option: Option<A>,
  mapFn: (value: A) => B | null | undefined,
): Option<ExtractValue<B>>
export declare function mapWithDefault<A, B>(
  option: Option<A>,
  defaultValue: NonNullable<B>,
  mapFn: (value: A) => B,
): B
export declare function match<A, B>(
  option: Option<A>,
  someFn: (value: A) => B,
  noneFn: () => B,
): B
export declare function toNullable<A>(option: Option<A>): A | null
export declare function toUndefined<A>(option: Option<A>): A | undefined
export declare function toResult<A, B>(
  option: Option<A>,
  errorValue: NonNullable<B>,
): Result<A, B>
export declare function getExn<A>(option: Option<A>): A | never
export declare function getWithDefault<A>(
  option: Option<A>,
  defaultValue: NonNullable<A>,
): A
export declare function isNone<A>(option: Option<A>): option is Option<never>
export declare function isSome<A>(option: Option<A>): option is Option<A>
export declare function tap<A>(
  option: Option<A>,
  someFn: (value: A) => void,
): Option<A>
export declare function contains<A>(option: Option<A>, value: any): boolean
export declare function zip<A, B>(
  fstOption: Option<A>,
  sndOption: Option<B>,
): Option<readonly [A, B]>
export declare function zipWith<A, B, C>(
  fstOption: Option<A>,
  sndOption: Option<B>,
  mapFn: (arg0: A, arg1: B) => Option<C>,
): Option<C>
