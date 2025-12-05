import { AsyncResult } from '../AsyncResult'
import { Option, Some, None } from '../Option'
export declare type AsyncOption<A> = Promise<Option<A>>

export declare function make<A>(
	promise: Promise<A>,
): AsyncOption<NonNullable<A>>
export declare function map<A, B>(
	promise: AsyncOption<A>,
	mapFn: (value: A) => NonNullable<B>,
): AsyncOption<B>
export declare function map<A, B>(
	mapFn: (value: A) => NonNullable<B>,
): (promise: AsyncOption<A>) => AsyncOption<B>
export declare function flatMap<A, B>(
	promise: AsyncOption<A>,
	mapFn: (value: A) => AsyncOption<B>,
): AsyncOption<B>
export declare function flatMap<A, B>(
	mapFn: (value: A) => AsyncOption<B>,
): (promise: AsyncOption<A>) => AsyncOption<B>
export declare function fold<A, B>(
	promise: AsyncOption<A>,
	mapFn: (value: A) => Option<B>,
): AsyncOption<B>
export declare function fold<A, B>(
	mapFn: (value: A) => Option<B>,
): (promise: AsyncOption<A>) => AsyncOption<B>

export declare function mapWithDefault<A, B>(
	promise: AsyncOption<A>,
	defaultValue: NonNullable<B>,
	mapFn: (value: A) => B,
): Promise<B>

export declare function mapWithDefault<A, B>(
	defaultValue: NonNullable<B>,
	mapFn: (value: A) => B,
): (promise: AsyncOption<A>) => Promise<B>
export declare function getWithDefault<A>(
	promise: AsyncOption<A>,
	defaultValue: NonNullable<A>,
): Promise<NonNullable<A>>
export declare function getWithDefault<A>(
	defaultValue: NonNullable<A>,
): (promise: AsyncOption<A>) => Promise<NonNullable<A>>
export declare function filter<A>(
	promise: AsyncOption<A>,
	predicateFn: (value: A) => boolean,
): AsyncOption<A>
export declare function filter<A>(
	predicateFn: (value: A) => boolean,
): (promise: AsyncOption<A>) => AsyncOption<A>
export declare function match<A, B>(
	promise: AsyncOption<A>,
	someFn: (value: A) => B,
	noneFn: () => B,
): Promise<B>
export declare function match<A, B>(
	someFn: (value: A) => B,
	noneFn: () => B,
): (promise: AsyncOption<A>) => Promise<B>
export declare function toResult<A, B>(
	promise: AsyncOption<A>,
	errorValue: B,
): AsyncResult<A, B>
export declare function toResult<A, B>(
	errorValue: B,
): (promise: AsyncOption<A>) => AsyncResult<A, B>
export declare function toNullable<A>(
	promise: AsyncOption<A>,
): Promise<A | null>
export declare function toUndefined<A>(
	promise: AsyncOption<A>,
): Promise<A | undefined>
export declare function isSome<A>(
	promise: AsyncOption<A>,
): promise is Promise<Some<A>>
export declare function isNone<A>(
	promise: AsyncOption<A>,
): promise is Promise<None>
export declare function contains<A>(
	promise: AsyncOption<A>,
	value: any,
): Promise<boolean>
export declare function contains<A>(
	value: any,
): (promise: AsyncOption<A>) => Promise<boolean>
export declare function tap<A>(
	promise: AsyncOption<A>,
	someFn: (value: A) => void,
): AsyncOption<A>
export declare function tap<A>(
	someFn: (value: A) => void,
): (promise: AsyncOption<A>) => AsyncOption<A>
export declare function flatten<A>(
	promise: AsyncOption<Option<A>>,
): AsyncOption<A>
export declare function reject(): Promise<None>
export declare function resolve<A>(value: A): Promise<Some<A>>
