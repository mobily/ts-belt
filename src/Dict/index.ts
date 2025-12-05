import { Array } from '../types'
import { Option } from '../Option'
/** Creates an empty object. Alternative for `const obj = {} as SomeObjectType`. */

export declare function makeEmpty<T>(): T

/** Returns the value if the given key exists, otherwise returns `undefined`. */

export declare function getUnsafe<T, K extends keyof T>(dict: T, key: K): T[K]

export declare function getUnsafe<T, K extends keyof T>(
	key: K,
): (dict: T) => T[K]

/** Returns `Some(value)` if the given key exists, otherwise returns `None`. */

export declare function get<T, K extends keyof T>(
	dict: T,
	key: K,
): Option<NonNullable<T[K]>>

export declare function get<T, K extends keyof T>(
	key: K,
): (dict: T) => Option<NonNullable<T[K]>>

/** @deprecated Use either `D.get` or `D.getUnsafe` instead. */

export declare function prop<T, K extends keyof T>(dict: T, key: K): T[K]

export declare function prop<T, K extends keyof T>(key: K): (dict: T) => T[K]

/** Converts an object into an array of `[key, value]` tuples. */

export declare function toPairs<T, K extends string | number>(
	dict: Record<K, T>,
): Array<readonly [string, T]>

/** Returns a new array that contains all values of the provided object. */

export declare function values<T extends string | number, R>(
	dict: Record<T, R>,
): Array<R>

/** Returns a new array that contains all keys of the provided object. */

export declare function keys<T extends Record<string, unknown>>(
	dict: T,
): Array<`${Extract<keyof T, string | number>}`>

/** Creates a new object from an array of tuples (`[key, value]`). */

export declare function fromPairs<T, K extends string | number>(
	xs: Array<readonly [K, T]>,
): Record<string, T>

/** Merges two provided objects. */

export declare function merge<A, B>(fst: A, snd: B): A & B

export declare function merge<A, B>(snd: B): (fst: A) => A & B

/** Adds a property. Equivalent to merging with `{key: value}` */

export declare function set<T, K extends string | number, V>(
	dict: T,
	key: K,
	value: V,
): T & Record<K, V>

export declare function set<T, K extends string | number, V>(
	key: K,
	value: V,
): (dict: T) => T & Record<K, V>

/** Updates a property by applying the provided function to the corresponding optional value. */

export declare function update<T, K extends keyof T, R>(
	dict: T,
	key: K,
	fn: (value: Option<T[K]>) => R,
): T & Record<K, R>

export declare function update<T, K extends keyof T, R>(
	key: K,
	fn: (value: Option<T[K]>) => R,
): (dict: T) => T & Record<K, R>

/** Updates a property by applying the provided function to the corresponding value. */

export declare function updateUnsafe<T, K extends keyof T, R>(
	dict: T,
	key: K,
	fn: (value: T[K]) => R,
): T & Record<K, R>

export declare function updateUnsafe<T, K extends keyof T, R>(
	key: K,
	fn: (value: T[K]) => R,
): (dict: T) => T & Record<K, R>

/** Returns a new object with the provided key deleted. */

export declare function deleteKey<T, K extends keyof T>(
	dict: T,
	key: K,
): Omit<T, K>

export declare function deleteKey<T, K extends keyof T>(
	key: K,
): (dict: T) => Omit<T, K>

/** Returns a new object with the provided keys deleted. */

export declare function deleteKeys<T, K extends keyof T>(
	dict: T,
	keys: ReadonlyArray<K>,
): Omit<T, K>

export declare function deleteKeys<T, K extends keyof T>(
	keys: ReadonlyArray<K>,
): (dict: T) => Omit<T, K>

/** Transforms each value in the object to a new value using the provided function. */

export declare function map<T extends Record<string, any>, R>(
	dict: T,
	mapFn: (value: T[keyof T]) => R,
): Record<keyof T, R>

export declare function map<T extends Record<string, any>, R>(
	mapFn: (value: T[keyof T]) => R,
): (dict: T) => Record<keyof T, R>

/** Transforms each value in the object to a new value using the provided function (which takes two arguments: a property value and key). */

export declare function mapWithKey<T extends Record<string, any>, R>(
	dict: T,
	mapFn: (key: keyof T, value: T[keyof T]) => R,
): Record<keyof T, R>

export declare function mapWithKey<T extends Record<string, any>, R>(
	mapFn: (key: keyof T, value: T[keyof T]) => R,
): (dict: T) => Record<keyof T, R>

/** Removes each property that doesn't satisfy the given predicate function. */

export declare function filter<T extends Record<string, any>>(
	dict: T,
	predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>

export declare function filter<T extends Record<string, any>>(
	predicateFn: (value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>

/** Removes each property that doesn't satisfy the given predicate function (which takes two arguments: a property value and key). */

export declare function filterWithKey<T extends Record<string, any>>(
	dict: T,
	predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
): Partial<T>

export declare function filterWithKey<T extends Record<string, any>>(
	predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>

/** Removes each property that satisfies the given predicate function. */

export declare function reject<T extends Record<string, any>>(
	dict: T,
	predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>

export declare function reject<T extends Record<string, any>>(
	predicateFn: (value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>

/** Removes each property that satisfies the given predicate function (which takes two arguments: a property value and key). */

export declare function rejectWithKey<T extends Record<string, any>>(
	dict: T,
	predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
): Partial<T>

export declare function rejectWithKey<T extends Record<string, any>>(
	predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
): (dict: T) => Partial<T>

/** Returns a new object with the provided keys selected. */

export declare function selectKeys<T, K extends keyof T>(
	dict: T,
	keys: ReadonlyArray<K>,
): Pick<T, K>

export declare function selectKeys<T, K extends keyof T>(
	keys: ReadonlyArray<K>,
): (dict: T) => Pick<T, K>

/** Determines whether the given object is empty. */

export declare function isEmpty<T extends Record<string, any>>(dict: T): boolean

/** Determines whether the given object is not empty. */

export declare function isNotEmpty<T extends Record<string, any>>(
	dict: T,
): boolean
