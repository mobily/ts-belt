import type { Ok, Error, Result } from "../Result";
import type { Option } from "../Option";

export declare type AsyncResult<A, B> = Promise<Result<A, B>>;

export declare function make<A, B = globalThis.Error>(
	promise: Promise<A>,
): AsyncResult<A, B>;

export declare function flatMap<A, B, C, D = B>(
	promise: AsyncResult<A, B>,
	mapFn: (value: A) => AsyncResult<C, D>,
): AsyncResult<C, B | D>;

export declare function fold<A, B, C, D = B>(
	promise: AsyncResult<A, B>,
	mapFn: (value: A) => Result<C, D>,
): AsyncResult<C, D>;

export declare function map<A, B, C>(
	promise: AsyncResult<A, B>,
	mapFn: (value: A) => C,
): AsyncResult<C, B>;

export declare function mapWithDefault<A, B, C>(
	promise: AsyncResult<A, B>,
	defaultValue: C,
	mapFn: (value: A) => C,
): Promise<C>;

export declare function getWithDefault<A, B>(
	promise: AsyncResult<A, B>,
	defaultValue: A,
): Promise<A>;

export declare function filter<A, B>(
	promise: AsyncResult<A, B>,
	predicateFn: (value: A) => boolean,
): AsyncResult<A, B | globalThis.Error>;

export declare function match<A, B, C>(
	promise: AsyncResult<A, B>,
	okFn: (value: A) => C,
	errorFn: (value: B) => C,
): Promise<C>;

export declare function toNullable<A, B>(
	promise: AsyncResult<A, B>,
): Promise<A | null>;

export declare function toOption<A, B>(
	promise: AsyncResult<A, B>,
): Promise<Option<A>>;

export declare function toUndefined<A, B>(
	promise: AsyncResult<A, B>,
): Promise<A | undefined>;

export declare function isOk<A, B>(
	promise: AsyncResult<A, B>,
): promise is Promise<Ok<A>>;

export declare function isError<A, B>(
	promise: AsyncResult<A, B>,
): promise is Promise<Error<B>>;

export declare function tap<A, B>(
	promise: AsyncResult<A, B>,
	okFn: (value: A) => void,
): AsyncResult<A, B>;

export declare function tapError<A, B>(
	promise: AsyncResult<A, B>,
	errorFn: (err: B) => void,
): AsyncResult<A, B>;

export declare function handleError<A, B>(
	promise: AsyncResult<A, B>,
	mapFn: (err: B) => A,
): Promise<Result<A, void>>;

export declare function mapError<A, B, C>(
	promise: AsyncResult<A, B>,
	mapFn: (err: B) => C,
): Promise<Result<A, C>>;

export declare function catchError<A, B, C>(
	promise: AsyncResult<A, B>,
	mapFn: (err: B) => Result<A, C>,
): Promise<Result<A, C>>;

export declare function recover<A, B>(
	promise: AsyncResult<A, B>,
	defaultValue: NonNullable<A>,
): AsyncResult<A, B>;

export declare function flip<A, B>(
	result: AsyncResult<A, B>,
): Promise<Result<B, A>>;

export declare function flatten<A, B, C>(
	result: AsyncResult<Result<A, B>, C>,
): AsyncResult<A, B | C>;

export declare function resolve<A>(value: A): Promise<Ok<A>>;
export declare function reject<A>(error: A): Promise<Error<A>>;
