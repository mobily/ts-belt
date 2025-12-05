import { ExtractValue } from '../types'
import { Result } from '../Result'
export declare type Some<A> = A
export declare type None = undefined

export declare type Option<A> = Some<A> | None

export declare const Some: <A>(value: NonNullable<A>) => Option<A>
export declare const None: Option<never>

export declare type TypeOfOption<T> = T extends Option<infer U>
	? ExtractValue<U>
	: never

export declare type TypeOfOptionArray<T extends readonly [...any[]]> =
	T extends [infer Head, ...infer Tail]
		? readonly [TypeOfOption<Head>, ...TypeOfOptionArray<Tail>]
		: readonly []

export declare function makeSome<A>(value: NonNullable<A>): Option<A>
export declare function makeNone<A>(): Option<NonNullable<A>>

/** Returns `Some(value)` if the provided value is non-nullable, otherwise, returns `None`. */

export declare function fromNullable<A>(value: A): Option<NonNullable<A>>

/** Returns `Some(value)` if the provided value is not falsy, otherwise, returns `None`. */

export declare function fromFalsy<A>(value: A): Option<NonNullable<A>>

/** Returns `Some(value)` if the given predicate function returns `true`, otherwise, returns `None`. */

export declare function fromPredicate<A>(
	value: A,
	predicateFn: (value: NonNullable<A>) => boolean,
): Option<NonNullable<A>>

export declare function fromPredicate<A>(
	predicateFn: (value: NonNullable<A>) => boolean,
): (value: A) => Option<NonNullable<A>>

/** Returns `Some(value)` (`value` is the result of `fn`) if `fn` didn't throw an error, otherwise, returns `None`. */

export declare function fromExecution<A>(fn: () => A): Option<NonNullable<A>>

/** Returns `Some(value)` if `promise` is resolved successfully, otherwise, returns `None`. */

export declare function fromPromise<A>(
	promise: Promise<A>,
): Promise<Option<NonNullable<A>>>

/** Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns `None` and `mapFn` is not called. */

export declare function map<A, B>(
	option: Option<A>,
	mapFn: (value: A) => NonNullable<B>,
): Option<B>

export declare function map<A, B>(
	mapFn: (value: A) => NonNullable<B>,
): (option: Option<A>) => Option<B>

/** Returns the result of `mapFn` (it must have a return type of `Option`) if `option` is `Some(value)`, otherwise, returns `None`. */

export declare function flatMap<A, B>(
	option: Option<A>,
	mapFn: (value: A) => Option<B>,
): Option<B>

export declare function flatMap<A, B>(
	mapFn: (value: A) => Option<B>,
): (option: Option<A>) => Option<B>

/** Returns the result of `mapFn` if `option` is `Some(value)`, otherwise, returns a default value. */

export declare function mapWithDefault<A, B extends NonNullable<any>>(
	option: Option<A>,
	defaultValue: B,
	mapFn: (value: A) => B,
): B

export declare function mapWithDefault<A, B extends NonNullable<any>>(
	defaultValue: B,
	mapFn: (value: A) => B,
): (option: Option<A>) => B

/** Returns `Some(value)` if the result of `mapFn` is non-nullable, otherwise, returns `None`. */

export declare function mapNullable<A, B>(
	option: Option<A>,
	mapFn: (value: A) => B | null | undefined,
): Option<NonNullable<B>>

export declare function mapNullable<A, B>(
	mapFn: (value: A) => B | null | undefined,
): (option: Option<A>) => Option<NonNullable<B>>

/** Returns `Some(value)` if `option` is `Some(value)` and the result of `predicateFn` is truthy, otherwise, returns `None`. */

export declare function filter<A>(
	option: Option<A>,
	predicateFn: (value: A) => boolean,
): Option<A>

export declare function filter<A>(
	predicateFn: (value: A) => boolean,
): (option: Option<A>) => Option<A>

/** Returns `value` if `option` is `Some(value)`, otherwise, returns a default value. */

export declare function getWithDefault<A extends NonNullable<any>>(
	option: Option<A>,
	defaultValue: A,
): A

export declare function getWithDefault<A extends NonNullable<any>>(
	defaultValue: A,
): (option: Option<A>) => A

/** Returns `value` if `option` is `Some(value)`, otherwise, throws an exception. */

export declare function getExn<A>(option: Option<A>): A | never

/** Returns `value` if `option` is `Some(value)`, otherwise, returns `null`. */

export declare function toNullable<A>(option: Option<A>): NonNullable<A> | null

/** Returns `value` if `option` is `Some(value)`, otherwise, returns `undefined`. */

export declare function toUndefined<A>(option: Option<A>): A | undefined

/** Returns `Ok(value)` if `option` is `Some(value)`, otherwise, returns `Error(errorValue)`, both `Ok` and `Error` come from the `Result` type. */

export declare function toResult<A, B>(
	option: Option<A>,
	errorValue: B,
): Result<A, B>

export declare function toResult<A, B>(
	errorValue: B,
): (option: Option<A>) => Result<A, B>

/** Returns the result of `someFn` if `option` is `Some(value)`, otherwise, returns the result of `noneFn`. */

export declare function match<A, B>(
	option: Option<A>,
	someFn: (value: A) => B,
	noneFn: () => B,
): B

export declare function match<A, B>(
	someFn: (value: A) => B,
	noneFn: () => B,
): (option: Option<A>) => B

/** Returns `true` if the provided `option` is `None`, otherwise, returns `false`. */

export declare function isNone<A>(option: Option<A>): option is None

/** Returns `true` if the provided `option` is `Some(value)`, otherwise, returns `false`. */

export declare function isSome<A>(option: Option<A>): option is Some<A>

/** Applies a side-effect function to the value in `Some`, and returns the original `option`. */

export declare function tap<A>(
	option: Option<A>,
	someFn: (value: A) => void,
): Option<A>

export declare function tap<A>(
	someFn: (value: A) => void,
): (option: Option<A>) => Option<A>

/** Checks if `option` is the `Some` variant and contains the given value. */

export declare function contains<A>(option: Option<A>, value: any): boolean

export declare function contains<A>(value: any): (option: Option<A>) => boolean

/** Combines two Options into a single Option containing a tuple of their values, if both Options are `Some` variants, otherwise, returns `None`. */

export declare function zip<A, B>(
	sndOption: Option<B>,
): (fstOption: Option<A>) => Option<readonly [A, B]>

export declare function zip<A, B>(
	fstOption: Option<A>,
	sndOption: Option<B>,
): Option<readonly [A, B]>

/** Combines two Options into a single Option. The new value is produced by applying the given function to both values, if both Options are `Some` variants, otherwise, returns `None`. */

export declare function zipWith<A, B, C>(
	fstOption: Option<A>,
	sndOption: Option<B>,
	mapFn: (arg0: A, arg1: B) => Option<C>,
): Option<C>

export declare function zipWith<A, B, C>(
	sndOption: Option<B>,
	mapFn: (arg0: A, arg1: B) => Option<C>,
): (fstOption: Option<A>) => Option<C>
export declare function fold<A, B>(
	option: Option<A>,
	someFn: (value: A) => B,
	errorFn: () => B,
): B
export declare function fold<A, B>(
	someFn: (value: A) => B,
	errorFn: () => B,
): (option: Option<A>) => B
export declare function all<T extends readonly [...Option<any>[]]>(
	xs: readonly [...T],
): Option<TypeOfOptionArray<T>>
