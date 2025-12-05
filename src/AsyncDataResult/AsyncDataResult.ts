import type { AsyncData, Complete, Reloading } from "../AsyncData";
import type { Option } from "../Option";
import type { Ok, Error, Result } from "../Result";

export declare type AsyncDataResult<A, B> = AsyncData<Result<A, B>>;

export declare const Init: import("../AsyncData").Init;
export declare const Loading: import("../AsyncData").Loading;
export declare const ReloadingOk: <T>(value: T) => Reloading<Ok<T>>;
export declare const ReloadingError: <T>(value: T) => Reloading<Error<T>>;

export declare const CompleteOk: <T>(value: T) => Complete<Ok<T>>;
export declare const CompleteError: <T>(value: T) => Complete<Error<T>>;

export declare type TypeOfAsyncDataResult<A> = A extends
	| Reloading<infer U>
	| Complete<infer U>
	? U extends Ok<infer A>
		? A
		: never
	: never;
export declare type TypeOfAsyncDataResultArray<T extends readonly [...any[]]> =
	T extends [infer Head, ...infer Tail]
		? readonly [
				TypeOfAsyncDataResult<Head>,
				...TypeOfAsyncDataResultArray<Tail>,
			]
		: readonly [];

export declare function makeInit<A, B>(): AsyncDataResult<A, B>;
export declare function makeLoading<A, B>(): AsyncDataResult<A, B>;
export declare function makeReloadingOk<A, B>(value: A): AsyncDataResult<A, B>;
export declare function makeReloadingError<A, B>(
	error: B,
): AsyncDataResult<A, B>;

export declare function makeCompleteOk<A, B>(value: A): AsyncDataResult<A, B>;
export declare function makeCompleteError<A, B>(
	error: B,
): AsyncDataResult<A, B>;

export declare function fromAsyncData<A>(
	data: AsyncData<A>,
): AsyncDataResult<A, undefined>;

export declare function isOk<A, B>(
	data: AsyncDataResult<A, B>,
): data is Complete<Ok<A>> | Reloading<Ok<A>>;

export declare function isError<A, B>(
	data: AsyncDataResult<A, B>,
): data is Complete<Error<B>> | Reloading<Error<B>>;

export declare function isReloadingOk<A, B>(
	data: AsyncDataResult<A, B>,
): data is Reloading<Ok<A>>;

export declare function isReloadingError<A, B>(
	data: AsyncDataResult<A, B>,
): data is Reloading<Error<B>>;

export declare function isCompleteOk<A, B>(
	data: AsyncDataResult<A, B>,
): data is Complete<Ok<A>>;

export declare function isCompleteError<A, B>(
	data: AsyncDataResult<A, B>,
): data is Complete<Error<B>>;

export declare function getOk<A, B>(data: AsyncDataResult<A, B>): Option<A>;
export declare function getReloadingOk<A, B>(
	data: AsyncDataResult<A, B>,
): Option<A>;
export declare function getCompleteOk<A, B>(
	data: AsyncDataResult<A, B>,
): Option<A>;

export declare function getError<A, B>(data: AsyncDataResult<A, B>): Option<B>;
export declare function getReloadingError<A, B>(
	data: AsyncDataResult<A, B>,
): Option<B>;
export declare function getCompleteError<A, B>(
	data: AsyncDataResult<A, B>,
): Option<B>;

export declare function map<A, B, C>(
	data: AsyncDataResult<A, B>,
	mapFn: (value: A) => C,
): AsyncDataResult<C, B>;
export declare function mapError<A, B, C>(
	data: AsyncDataResult<A, B>,
	mapFn: (error: B) => C,
): AsyncDataResult<A, C>;
export declare function flatMap<A, B, C, D = B>(
	data: AsyncDataResult<A, B>,
	mapFn: (value: A) => AsyncDataResult<C, D>,
): AsyncDataResult<C, D>;

export declare function tap<A, B>(
	data: AsyncDataResult<A, B>,
	okFn: (value: A) => void,
): AsyncDataResult<A, B>;
export declare function tapError<A, B>(
	data: AsyncDataResult<A, B>,
	errorFn: (error: B) => void,
): AsyncDataResult<A, B>;

export declare function fold<A, B, C>(
	data: AsyncDataResult<A, B>,
	okFn: (value: A) => C,
	errorFn: (error: B) => C,
	emptyFn: () => C,
): C;
export declare function foldOk<A, B, C>(
	data: AsyncDataResult<A, B>,
	okFn: (value: A) => C,
	otherFn: (data: AsyncDataResult<A, B>) => C,
): C;
export declare function foldError<A, B, C>(
	data: AsyncDataResult<A, B>,
	errorFn: (error: B) => C,
	otherFn: (data: AsyncDataResult<A, B>) => C,
): C;

export declare function toAsyncData<A, B>(
	data: AsyncDataResult<A, B>,
): AsyncData<A>;

export declare function all<
	A extends readonly [...AsyncDataResult<any, any>[]],
>(
	xs: readonly [...A],
): AsyncDataResult<TypeOfAsyncDataResultArray<A>, globalThis.Error>;
