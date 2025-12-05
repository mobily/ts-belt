import { Option } from '../Option'
export declare type Init = 0 & { __: 'Init' }
export declare type Loading = 1 & { __: 'Loading' }
export declare type Reloading<T> = {
	readonly TAG: 0
	readonly _0: T
} & { __: 'Reloading' }
export declare type Complete<T> = {
	readonly TAG: 1
	readonly _0: T
} & { __: 'Complete' }

export declare type AsyncData<T> = Init | Loading | Reloading<T> | Complete<T>

export declare type TypeOfAsyncData<T> = T extends
	| Reloading<infer U>
	| Complete<infer U>
	? U
	: never

export declare type TypeOfAsyncDataArray<T extends readonly [...any[]]> =
	T extends [infer Head, ...infer Tail]
		? readonly [TypeOfAsyncData<Head>, ...TypeOfAsyncDataArray<Tail>]
		: readonly []

export declare const Init: Init
export declare const Loading: Loading
export declare const Reloading: <T>(value: T) => Reloading<T>
export declare const Complete: <T>(value: T) => Complete<T>

export declare function makeInit<T>(): AsyncData<T>
export declare function makeLoading<T>(): AsyncData<T>
export declare function makeReloading<T>(value: T): AsyncData<T>
export declare function makeComplete<T>(value: T): AsyncData<T>

/** Checks if the provided `AsyncData` value is `Init`. */

export declare function isInit<A>(data: AsyncData<A>): data is Init

/** Checks if the provided `AsyncData` value is `Loading`. */

export declare function isLoading<A>(data: AsyncData<A>): data is Loading

/** Checks if the provided `AsyncData` value is `Reloading`. */

export declare function isReloading<A>(data: AsyncData<A>): data is Reloading<A>

/** Checks if the provided `AsyncData` value is `Complete`. */

export declare function isComplete<A>(data: AsyncData<A>): data is Complete<A>

/** Checks if the provided `AsyncData` value is working (`Loading` or `Reloading`). */

export declare function isBusy<A>(
	data: AsyncData<A>,
): data is Reloading<A> | Loading

/** Checks if the provided `AsyncData` value is not working (`Init` or `Complete`). */

export declare function isIdle<A>(
	data: AsyncData<A>,
): data is Init | Complete<A>

/** Checks if the provided `AsyncData` value is `Init` or `Loading`. */

export declare function isEmpty<A>(data: AsyncData<A>): data is Init | Loading

/** Checks if the provided `AsyncData` value is `Reloading` or `Complete`. */

export declare function isNotEmpty<A>(
	data: AsyncData<A>,
): data is Reloading<A> | Complete<A>

/** Creates a new `AsyncData` by transitioning the given `AsyncData` into a busy state (`Loading` or `Reloading`), and carrying over the internal data if available. */

export declare function toBusy<A>(data: AsyncData<A>): AsyncData<A>

/** Creates a new `AsyncData` by transitioning the given `AsyncData` into an idle state (`Init` or `Complete`), and carrying over the internal data if available. */

export declare function toIdle<A>(data: AsyncData<A>): AsyncData<A>

/** Get `Some(value)` from the `Complete` state if the `AsyncData` is complete, or the last known complete value in `Reloading`. */

export declare function getValue<A>(data: AsyncData<A>): Option<A>

/** Returns a value if the `AsyncData` is either in the `Complete` or `Reloading` state, otherwise, returns `defaultValue`. */

export declare function getWithDefault<A>(
	data: AsyncData<A>,
	defaultValue: A,
): A

export declare function getWithDefault<A>(
	defaultValue: A,
): (data: AsyncData<A>) => A

/** Get `Some(value)` only from the `Reloading` state, and `None` in all other cases, including `Complete`. */

export declare function getReloading<A>(data: AsyncData<A>): Option<A>

/** Get `Some(value)` only from the `Complete` state, and `None` in all other cases, including `Reloading`. */

export declare function getComplete<A>(data: AsyncData<A>): Option<A>

/** Maps a pure function over the value contained by `Reloading` or `Complete`. */

export declare function map<A, B>(
	data: AsyncData<A>,
	mapFn: (value: A) => B,
): AsyncData<B>

export declare function map<A, B>(
	mapFn: (value: A) => B,
): (data: AsyncData<A>) => AsyncData<B>

/** Maps the `AsyncData` into a new value by providing a strict value to use when there is no data, or function to handle when there is data. */

export declare function mapWithDefault<A, B>(
	data: AsyncData<A>,
	defaultValue: B,
	mapFn: (value: A) => B,
): B

export declare function mapWithDefault<A, B>(
	defaultValue: B,
	mapFn: (value: A) => B,
): (data: AsyncData<A>) => B

/** Applies a monadic function to the value contained by `Reloading` or `Complete`. */

export declare function flatMap<A, B>(
	data: AsyncData<A>,
	mapFn: (value: A) => AsyncData<B>,
): AsyncData<B>

export declare function flatMap<A, B>(
	mapFn: (value: A) => AsyncData<B>,
): (data: AsyncData<A>) => AsyncData<B>

/** Applies a side effect function if the value is `Init`. */

export declare function tapInit<A>(
	data: AsyncData<A>,
	initFn: () => void,
): AsyncData<A>

export declare function tapInit<A>(
	initFn: () => void,
): (data: AsyncData<A>) => AsyncData<A>

/** Applies a side effect function if the value is `Loading`. */

export declare function tapLoading<A>(
	data: AsyncData<A>,
	loadingFn: () => void,
): AsyncData<A>

export declare function tapLoading<A>(
	loadingFn: () => void,
): (data: AsyncData<A>) => AsyncData<A>

/** Applies a side effect function if the value is `Reloading`. */

export declare function tapReloading<A>(
	data: AsyncData<A>,
	reloadingFn: (value: A) => void,
): AsyncData<A>

export declare function tapReloading<A>(
	reloadingFn: (value: A) => void,
): (data: AsyncData<A>) => AsyncData<A>

/** Applies a side effect function if the value is `Complete`. */

export declare function tapComplete<A>(
	data: AsyncData<A>,
	completeFn: (value: A) => void,
): AsyncData<A>

export declare function tapComplete<A>(
	completeFn: (value: A) => void,
): (data: AsyncData<A>) => AsyncData<A>

/** Applies a side effect function if the value is `Init` or `Loading`. */

export declare function tapEmpty<A>(
	data: AsyncData<A>,
	emptyFn: () => void,
): AsyncData<A>

export declare function tapEmpty<A>(
	emptyFn: () => void,
): (data: AsyncData<A>) => AsyncData<A>

/** Applies a side effect function if the value is `Reloading` or `Complete`. */

export declare function tapNotEmpty<A>(
	data: AsyncData<A>,
	notEmptyFn: (value: A) => void,
): AsyncData<A>

export declare function tapNotEmpty<A>(
	notEmptyFn: (value: A) => void,
): (data: AsyncData<A>) => AsyncData<A>
export declare function all<T extends readonly [...AsyncData<any>[]]>(
	xs: readonly [...T],
): AsyncData<TypeOfAsyncDataArray<T>>
export declare function fold<A, B>(
	data: AsyncData<A>,
	notEmptyFn: (value: A) => B,
	emptyFn: () => B,
): B
export declare function fold<A, B>(
	notEmptyFn: (value: A) => B,
	emptyFn: () => B,
): (data: AsyncData<A>) => B
