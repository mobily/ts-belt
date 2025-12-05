import { Array, Mutable } from '../types'
import { Result } from '../Result'
export declare type Controlled<A extends any[]> = {
	readonly cancel: () => void
	readonly invoke: (...args: A) => void
	readonly isScheduled: () => boolean
	readonly schedule: (...args: A) => void
}
export declare type Options = {
	readonly delay: number
	readonly leading: boolean
}

/** Always returns the provided value, useful as a placeholder function. */

export declare function identity<A>(value: A): A

/** Returns `true` if provided values are equal, otherwise, returns `false`. */

export declare function equals<A, B = A>(snd: A): (fst: B) => boolean

/** Returns `true` if provided values are equal, otherwise, returns `false`. */

export declare function equals<A, B = A>(fst: A, snd: B): boolean

export declare function equals<A, B = A>(snd: B): (fst: A) => boolean

/** Returns `true` if provided values are equal, otherwise, returns `false`. */

export declare function equals(): boolean

/** Calls the two provided functions and returns `&&` of the results → `fn0(value) && fn1(value)`. */

export declare function both<A>(
	value: A,
	fn0: (_1: A) => boolean,
	fn1: (_1: A) => boolean,
): boolean

export declare function both<A>(
	fn0: (_1: A) => boolean,
	fn1: (_1: A) => boolean,
): (value: A) => boolean

/** Calls the two provided functions and returns `||` of the results → `fn0(value) || fn1(value)`. */

export declare function either<A>(
	value: A,
	fn0: (_1: A) => boolean,
	fn1: (_1: A) => boolean,
): boolean

export declare function either<A>(
	fn0: (_1: A) => boolean,
	fn1: (_1: A) => boolean,
): (value: A) => boolean

/** Returns a function that always returns the provided value. */

export declare function always<A>(value: A): () => A

/** Returns a default value if `value` is nullable. */

export declare function defaultTo<A, B extends NonNullable<A>>(
	value: A,
	defaultValue: B,
): B

export declare function defaultTo<A, B extends NonNullable<A>>(
	defaultValue: B,
): (value: A) => B

/** Always returns `false`. */

export declare function falsy(): boolean

/** Always returns `true`. */

export declare function truthy(): boolean

/** Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns the result of `falsyFn`. */

export declare function ifElse<A, B>(
	value: A,
	predicateFn: (_1: A) => boolean,
	truthyFn: (_1: A) => B,
	falsyFn: (_1: A) => B,
): B

export declare function ifElse<A, B>(
	predicateFn: (_1: A) => boolean,
	truthyFn: (_1: A) => B,
	falsyFn: (_1: A) => B,
): (value: A) => B

/** Always returns `void`, useful as a placeholder function. */

export declare function ignore(): void

/** Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns `value`, otherwise, returns the result of `falsyFn`. */

export declare function unless<A, B>(
	value: A,
	predicateFn: (value: A) => boolean,
	falsyFn: (value: A) => B,
): A | B

export declare function unless<A, B>(
	predicateFn: (value: A) => boolean,
	falsyFn: (value: A) => B,
): (value: A) => A | B

/** Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns `value`. */

export declare function when<A, B>(
	value: A,
	predicateFn: (value: A) => boolean,
	truthyFn: (value: A) => B,
): A | B

export declare function when<A, B>(
	predicateFn: (value: A) => boolean,
	truthyFn: (value: A) => B,
): (value: A) => A | B

/** Determines whether all the provided predicates return `true` for the given value. */

export declare function allPass<A>(
	value: A,
	fns: Array<(_1: A) => boolean>,
): boolean

export declare function allPass<A>(
	fns: Array<(_1: A) => boolean>,
): (value: A) => boolean

/** Determines whether at least one of the provided predicate returns `true` for the given value. */

export declare function anyPass<A>(
	value: A,
	fns: Array<(_1: A) => boolean>,
): boolean

export declare function anyPass<A>(
	fns: Array<(_1: A) => boolean>,
): (value: A) => boolean

/** Applies a side-effect function on the given value and returns the original value. */

export declare function tap<A>(value: A, fn: (_1: A) => void): A

export declare function tap<A>(fn: (_1: A) => void): (value: A) => A

/** Takes a function and returns a new function (and other control values) which when used, suppresses calls to the given function to only once within the given `delay`. If `leading` is set to `true`, the function will be allowed to run on the first call before the throttling starts. */

export declare function makeControlledThrottle<A extends any[]>(
	fn: (...args: A) => void,
	options: Options,
): Controlled<A>

export declare function makeControlledThrottle<A extends any[]>(
	options: Options,
): (fn: (...args: A) => void) => Controlled<A>

/** Takes a function and returns a new function (no control values) which when used, suppresses calls to the given function to only once within the given `delay`. */

export declare function throttle<A extends any[]>(
	fn: (...args: A) => void,
	delay: number,
): (...args: A) => void

export declare function throttle<A extends any[]>(
	delay: number,
): (fn: (...args: A) => void) => (...args: A) => void

/** Takes a function, and returns a new function (and other control values) which when called, will only invoke the given input function after a period of inactivity. If `leading` is set to `true`, the function will be invoked immediately. */

export declare function makeControlledDebounce<A extends any[]>(
	fn: (...args: A) => void,
	options: Options,
): Controlled<A>

export declare function makeControlledDebounce<A extends any[]>(
	options: Options,
): (fn: (...args: A) => void) => Controlled<A>

/** Takes a function, and returns a new function (no control values) which when called, will only invoke the given input function after a period of inactivity. */

export declare function debounce<A extends any[]>(
	fn: (...args: A) => void,
	delay: number,
): (...args: A) => void

export declare function debounce<A extends any[]>(
	delay: number,
): (fn: (...args: A) => void) => (...args: A) => void

/** Takes a function, which is called in the `try/catch` block, and returns the `Result` data type. */

export declare function tryCatch<A, B>(
	value: A,
	fn: (value: A) => B,
): Result<B, globalThis.Error>

export declare function tryCatch<A, B>(
	fn: (value: A) => B,
): (value: A) => Result<B, globalThis.Error>

/** Takes a function and returns a new function which when called, will allow the first `times` calls to invoke the given function, and any successive calls will be suppressed and the last result will be returned. */

export declare function before<A extends any[], B>(
	times: number,
	fn: (...args: A) => B,
): (...args: A) => B

export declare function before<A extends any[], B>(
	fn: (...args: A) => B,
): (times: number) => (...args: A) => B

/** Takes a function and returns a new function that when called, will suppress the first `times` invocations. */

export declare function after<A extends any[], B>(
	times: number,
	fn: (...args: A) => B,
): (...args: A) => B

export declare function after<A extends any[], B>(
	fn: (...args: A) => B,
): (times: number) => (...args: A) => B

/** Takes a function and returns a new function which will invoke the given function once, and any successive calls will be suppressed, returning the value of the first call. */

export declare function once<A extends any[], B>(
	fn: (...args: A) => B,
): (...args: A) => B

/** Alias for `once`. */

export declare function memoize<A extends any[], B>(
	fn: (...args: A) => B,
): (...args: A) => B

/** Takes a function and returns a new function which once called, stores the result produced by the given function in a closure-based cache, using a cache key created by the function `makeKeyFn`. */

export declare function memoizeWithKey<A extends any[], B>(
	fn: (...args: A) => B,
): (makeKeyFn: (...args: A) => string) => (...args: A) => B

export declare function memoizeWithKey<A extends any[], B>(
	makeKeyFn: (...args: A) => string,
	fn: (...args: A) => B,
): (...args: A) => B

/** Takes a value and converts its immutable type to a mutable one. */

export declare function toMutable<T>(value: T): Mutable<T>

/** Takes a value and coerces a new type. */

export declare function coerce<T>(value: any): T

export declare function andThen<A, B>(value: A, fn: (value: A) => B): B
export declare function andThen<A, B>(fn: (value: A) => B): (value: A) => B
