export declare type ArrayGuard<T> = Extract<T, Array<any>> extends never
	? Array<unknown>
	: Extract<T, Array<any>>;
export declare type PromiseGuard<T> = Extract<T, Promise<any>> extends never
	? Promise<unknown>
	: Extract<T, Promise<any>>;
export declare type ObjectGuard<T> = Exclude<
	Extract<T, object>,
	Function | Array<any>
> extends never
	? { [k: string]: unknown }
	: Exclude<Extract<T, object>, Function | Array<any>>;
export declare type Guard<T, V> = Extract<T, V> extends never
	? V
	: Extract<T, V> extends any
		? V
		: Extract<T, V>;

export declare function isString<A>(
	value: A | string,
): value is Guard<A, string>;
export declare function isNumber<A>(
	value: A | number,
): value is Guard<A, number>;
export declare function isBoolean<A>(
	value: A | boolean,
): value is Guard<A, boolean>;
export declare function isPromise<A>(
	value: A | Promise<unknown>,
): value is PromiseGuard<A>;
export declare function isArray<A>(
	value: A | ReadonlyArray<unknown>,
): value is ArrayGuard<A>;
export declare function isObject<A>(value: A | object): value is ObjectGuard<A>;
export declare function isFunction<A>(
	value: A | Function,
): value is Guard<A, Function>;
export declare function isError<A>(
	value: A | globalThis.Error,
): value is Guard<A, globalThis.Error>;
export declare function isNullable<A>(
	value: A,
): value is Extract<A, null | undefined>;
export declare function isNotNullable<A>(value: A): value is NonNullable<A>;
export declare function isUndefined<A>(
	value: A | null | undefined,
): value is undefined;
export declare function isNull<A>(value: A | null | undefined): value is null;
export declare function isNot<A, B extends A>(
	value: A,
	predicateFn: (value: A) => value is B,
): value is Exclude<A, B>;
export declare function isNot<A>(
	value: A,
	predicateFn: (value: A) => any,
): boolean;
export declare function isDate<A>(value: A): value is Extract<A, Date>;
