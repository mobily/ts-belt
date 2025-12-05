import type { Option } from "../Option";
import type { Array, NonNullable } from "../types";

export declare function makeEmpty<T>(): T;
export declare function get<T, K extends keyof T>(
	dict: T,
	key: K,
): Option<NonNullable<T[K]>>;
export declare function getUnsafe<T, K extends keyof T>(dict: T, key: K): T[K];
export declare function prop<T, K extends keyof T>(dict: T, key: K): T[K];
export declare function values<T extends string | number, R>(
	dict: Record<T, R>,
): Array<R>;
export declare function keys<T extends Record<string, unknown>>(
	dict: T,
): Array<`${Extract<keyof T, string | number>}`>;
export declare function merge<A, B>(fst: A, snd: B): A & B;
export declare function set<T, K extends string | number, V>(
	dict: T,
	key: K,
	value: V,
): T & Record<K, V>;
export declare function update<T, K extends keyof T, R>(
	dict: T,
	key: K,
	fn: (value: Option<T[K]>) => R,
): T & Record<K, R>;
export declare function updateUnsafe<T, K extends keyof T, R>(
	dict: T,
	key: K,
	fn: (value: T[K]) => R,
): T & Record<K, R>;
export declare function deleteKey<T, K extends keyof T>(
	dict: T,
	key: K,
): Omit<T, K>;
export declare function deleteKeys<T, K extends keyof T>(
	dict: T,
	keys: ReadonlyArray<K>,
): Omit<T, K>;
export declare function map<T extends Record<string, any>, R>(
	dict: T,
	mapFn: (value: T[keyof T]) => R,
): Record<keyof T, R>;
export declare function mapWithKey<T extends Record<string, any>, R>(
	dict: T,
	mapFn: (key: keyof T, value: T[keyof T]) => R,
): Record<keyof T, R>;
export declare function filter<T extends Record<string, any>>(
	dict: T,
	predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>;
export declare function filterWithKey<T extends Record<string, any>>(
	dict: T,
	predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
): Partial<T>;
export declare function reject<T extends Record<string, any>>(
	dict: T,
	predicateFn: (value: T[keyof T]) => boolean,
): Partial<T>;
export declare function rejectWithKey<T extends Record<string, any>>(
	dict: T,
	predicateFn: (key: keyof T, value: T[keyof T]) => boolean,
): Partial<T>;
export declare function selectKeys<T, K extends keyof T>(
	dict: T,
	keys: ReadonlyArray<K>,
): Pick<T, K>;
export declare function fromPairs<T, K extends string | number>(
	xs: Array<readonly [K, T]>,
): Record<string, T>;
export declare function toPairs<T, K extends string | number>(
	dict: Record<K, T>,
): Array<readonly [string, T]>;
export declare function isEmpty<T extends Record<string, any>>(
	dict: T,
): boolean;
export declare function isNotEmpty<T extends Record<string, any>>(
	dict: T,
): boolean;
