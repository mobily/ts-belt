import type { Result } from "../Result";
import type { Mutable } from "../types";

export declare type Controlled<A extends any[]> = {
	readonly cancel: () => void;
	readonly invoke: (...args: A) => void;
	readonly isScheduled: () => boolean;
	readonly schedule: (...args: A) => void;
};
export declare type Options = {
	readonly delay: number;
	readonly leading: boolean;
};
export declare function defaultTo<A, B extends NonNullable<A>>(
	value: A,
	defaultValue: B,
): B;
export declare function equals<A, B = A>(snd: A): (fst: B) => boolean;
export declare function equals<A, B = A>(fst: A, snd: B): boolean;
export declare function equals(): boolean;
export declare function makeControlledDebounce<A extends any[]>(
	fn: (...args: A) => void,
	options: Options,
): Controlled<A>;
export declare function debounce<A extends any[]>(
	fn: (...args: A) => void,
	delay: number,
): (...args: A) => void;
export declare function makeControlledThrottle<A extends any[]>(
	fn: (...args: A) => void,
	options: Options,
): Controlled<A>;
export declare function throttle<A extends any[]>(
	fn: (...args: A) => void,
	delay: number,
): (...args: A) => void;
export declare function tryCatch<A, B>(
	value: A,
	fn: (value: A) => B,
): Result<B, globalThis.Error>;
export declare function once<A extends any[], B>(
	fn: (...args: A) => B,
): (...args: A) => B;
export declare function before<A extends any[], B>(
	times: number,
	fn: (...args: A) => B,
): (...args: A) => B;
export declare function after<A extends any[], B>(
	times: number,
	fn: (...args: A) => B,
): (...args: A) => B;
export declare function memoize<A extends any[], B>(
	fn: (...args: A) => B,
): (...args: A) => B;
export declare function memoizeWithKey<A extends any[], B>(
	makeKeyFn: (...args: A) => string,
	fn: (...args: A) => B,
): (...args: A) => B;
export declare function toMutable<T>(value: T): Mutable<T>;
export declare function coerce<T>(value: any): T;
export declare function when<A, B>(
	value: A,
	predicateFn: (value: A) => boolean,
	truthyFn: (value: A) => B,
): A | B;
export declare function unless<A, B>(
	value: A,
	predicateFn: (value: A) => boolean,
	falsyFn: (value: A) => B,
): A | B;
export declare function andThen<A, B>(value: A, fn: (value: A) => B): B;
