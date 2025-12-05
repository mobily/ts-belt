import type { Result } from '../Result'
import type { ExtractValue } from '../types'

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

export declare function fromNullable<A>(value: A): Option<NonNullable<A>>
export declare function fromFalsy<A>(value: A): Option<NonNullable<A>>
export declare function fromPredicate<A>(
	value: A,
	predicateFn: (value: NonNullable<A>) => boolean,
): Option<NonNullable<A>>
export declare function fromExecution<A>(fn: () => A): Option<NonNullable<A>>
export declare function fromPromise<A>(
	promise: Promise<A>,
): Promise<Option<NonNullable<A>>>
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
): Option<NonNullable<B>>
export declare function mapWithDefault<A, B extends NonNullable<any>>(
	option: Option<A>,
	defaultValue: B,
	mapFn: (value: A) => B,
): B
export declare function match<A, B>(
	option: Option<A>,
	someFn: (value: A) => B,
	noneFn: () => B,
): B
export declare function toNullable<A>(option: Option<A>): NonNullable<A> | null
export declare function toUndefined<A>(option: Option<A>): A | undefined
export declare function toResult<A, B>(
	option: Option<A>,
	errorValue: B,
): Result<A, B>
export declare function getExn<A>(option: Option<A>): A | never
export declare function getWithDefault<A extends NonNullable<any>>(
	option: Option<A>,
	defaultValue: A,
): A
export declare function isNone<A>(option: Option<A>): option is None
export declare function isSome<A>(option: Option<A>): option is Some<A>
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
export declare function fold<A, B>(
	option: Option<A>,
	someFn: (value: A) => B,
	errorFn: () => B,
): B
export declare function all<T extends readonly [...Option<any>[]]>(
	xs: readonly [...T],
): Option<TypeOfOptionArray<T>>
