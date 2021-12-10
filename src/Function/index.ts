/** Always returns the provided value, useful as a placeholder function. */

export declare function identity<A>(value: A): A

/** Returns `true` if provided values are equal, otherwise, returns `false`. */

export declare function equals(snd: any): (fst: any) => boolean

export declare function equals(fst: any, snd: any): boolean

/** Calls the two provided functions and returns `&&` of the results → `fn0(value) && fn1(value)`. */

export declare function both<A>(
  value: A,
  fn0: (_1: A) => boolean,
  fn1: (_1: A) => boolean,
): boolean

export declare function both<A>(
  fn0: (_1: A) => boolean,
  fn1: (_1: A) => boolean,
): (value: A) => boolean

/** Calls the two provided functions and returns `||` of the results → `fn0(value) || fn1(value)`. */

export declare function either<A>(
  value: A,
  fn0: (_1: A) => boolean,
  fn1: (_1: A) => boolean,
): boolean

export declare function either<A>(
  fn0: (_1: A) => boolean,
  fn1: (_1: A) => boolean,
): (value: A) => boolean

/** Returns a function that always returns the provided value. */

export declare function always<A>(value: A): () => A

/** Returns a default value if `value` is nullable. */

export declare function defaultTo<T>(
  defaultValue: NonNullable<T>,
  value: T | null | undefined,
): NonNullable<T>

export declare function defaultTo<T>(
  value: T | null | undefined,
): (defaultValue: NonNullable<T>) => NonNullable<T>

/** Always returns `false`. */

export declare function falsy(): boolean

/** Always returns `true`. */

export declare function truthy(): boolean

/** Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns the result of `falsyFn`. */

export declare function ifElse<A, B>(
  value: A,
  predicateFn: (_1: A) => boolean,
  truthyFn: (_1: A) => B,
  falsyFn: (_1: A) => B,
): B

export declare function ifElse<A, B>(
  predicateFn: (_1: A) => boolean,
  truthyFn: (_1: A) => B,
  falsyFn: (_1: A) => B,
): (value: A) => B

/** Always returns `void`, useful as a placeholder function. */

export declare function ignore(): void

/** Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns `value`, otherwise, returns the result of `falsyFn`. */

export declare function unless<A>(
  value: A,
  predicateFn: (_1: A) => boolean,
  falsyFn: (_1: A) => A,
): A

export declare function unless<A>(
  predicateFn: (_1: A) => boolean,
  falsyFn: (_1: A) => A,
): (value: A) => A

/** Tests the given value by passing it to the predicate, if the predicate is satisfied, the function returns the result of `truthyFn`, otherwise, returns `value`. */

export declare function when<A>(
  value: A,
  predicateFn: (_1: A) => boolean,
  truthyFn: (_1: A) => A,
): A

export declare function when<A>(
  predicateFn: (_1: A) => boolean,
  truthyFn: (_1: A) => A,
): (value: A) => A

/** Determines whether all the provided predicates return `true` for the given value. */

export declare function allPass<A>(
  value: A,
  fns: ReadonlyArray<(_1: A) => boolean>,
): boolean

export declare function allPass<A>(
  fns: ReadonlyArray<(_1: A) => boolean>,
): (value: A) => boolean

/** Determines whether at least one of the provided predicate returns `true` for the given value. */

export declare function anyPass<A>(
  value: A,
  fns: ReadonlyArray<(_1: A) => boolean>,
): boolean

export declare function anyPass<A>(
  fns: ReadonlyArray<(_1: A) => boolean>,
): (value: A) => boolean
