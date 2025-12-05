import type { Option } from "../Option";

export declare type Init = 0 & { __: "Init" };
export declare type Loading = 1 & { __: "Loading" };
export declare type Reloading<T> = {
	readonly TAG: 0;
	readonly _0: T;
} & { __: "Reloading" };
export declare type Complete<T> = {
	readonly TAG: 1;
	readonly _0: T;
} & { __: "Complete" };

export declare type AsyncData<T> = Init | Loading | Reloading<T> | Complete<T>;

export declare type TypeOfAsyncData<T> = T extends
	| Reloading<infer U>
	| Complete<infer U>
	? U
	: never;

export declare type TypeOfAsyncDataArray<T extends readonly [...any[]]> =
	T extends [infer Head, ...infer Tail]
		? readonly [TypeOfAsyncData<Head>, ...TypeOfAsyncDataArray<Tail>]
		: readonly [];

export declare const Init: Init;
export declare const Loading: Loading;
export declare const Reloading: <T>(value: T) => Reloading<T>;
export declare const Complete: <T>(value: T) => Complete<T>;

export declare function makeInit<T>(): AsyncData<T>;
export declare function makeLoading<T>(): AsyncData<T>;
export declare function makeReloading<T>(value: T): AsyncData<T>;
export declare function makeComplete<T>(value: T): AsyncData<T>;

export declare function isInit<A>(data: AsyncData<A>): data is Init;
export declare function isLoading<A>(data: AsyncData<A>): data is Loading;
export declare function isReloading<A>(
	data: AsyncData<A>,
): data is Reloading<A>;
export declare function isComplete<A>(data: AsyncData<A>): data is Complete<A>;

export declare function isBusy<A>(
	data: AsyncData<A>,
): data is Reloading<A> | Loading;
export declare function isIdle<A>(
	data: AsyncData<A>,
): data is Init | Complete<A>;

export declare function isEmpty<A>(data: AsyncData<A>): data is Init | Loading;
export declare function isNotEmpty<A>(
	data: AsyncData<A>,
): data is Reloading<A> | Complete<A>;

export declare function toBusy<A>(data: AsyncData<A>): AsyncData<A>;
export declare function toIdle<A>(data: AsyncData<A>): AsyncData<A>;

export declare function getValue<A>(data: AsyncData<A>): Option<A>;
export declare function getWithDefault<A>(
	data: AsyncData<A>,
	defaultValue: A,
): A;
export declare function getReloading<A>(data: AsyncData<A>): Option<A>;
export declare function getComplete<A>(data: AsyncData<A>): Option<A>;

export declare function map<A, B>(
	data: AsyncData<A>,
	mapFn: (value: A) => B,
): AsyncData<B>;
export declare function mapWithDefault<A, B>(
	data: AsyncData<A>,
	defaultValue: B,
	mapFn: (value: A) => B,
): B;
export declare function flatMap<A, B>(
	data: AsyncData<A>,
	mapFn: (value: A) => AsyncData<B>,
): AsyncData<B>;

export declare function tapInit<A>(
	data: AsyncData<A>,
	initFn: () => void,
): AsyncData<A>;
export declare function tapLoading<A>(
	data: AsyncData<A>,
	loadingFn: () => void,
): AsyncData<A>;
export declare function tapReloading<A>(
	data: AsyncData<A>,
	reloadingFn: (value: A) => void,
): AsyncData<A>;
export declare function tapComplete<A>(
	data: AsyncData<A>,
	completeFn: (value: A) => void,
): AsyncData<A>;
export declare function tapEmpty<A>(
	data: AsyncData<A>,
	emptyFn: () => void,
): AsyncData<A>;
export declare function tapNotEmpty<A>(
	data: AsyncData<A>,
	notEmptyFn: (value: A) => void,
): AsyncData<A>;
export declare function all<T extends readonly [...AsyncData<any>[]]>(
	xs: readonly [...T],
): AsyncData<TypeOfAsyncDataArray<T>>;
export declare function fold<A, B>(
	data: AsyncData<A>,
	notEmptyFn: (value: A) => B,
	emptyFn: () => B,
): B;
