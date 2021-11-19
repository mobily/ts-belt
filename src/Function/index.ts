export declare function identity<A>(value: A): A
export declare function equals<A>(fst: A, snd: A): boolean
export declare function equals<A>(snd: A): (fst: A) => boolean
export declare function both<A>(value: A, fn0: (_1: A) => boolean, fn1: (_1: A) => boolean): boolean
export declare function both<A>(
  fn0: (_1: A) => boolean,
  fn1: (_1: A) => boolean,
): (value: A) => boolean
export declare function either<A>(
  value: A,
  fn0: (_1: A) => boolean,
  fn1: (_1: A) => boolean,
): boolean
export declare function either<A>(
  fn0: (_1: A) => boolean,
  fn1: (_1: A) => boolean,
): (value: A) => boolean
export declare function always<A>(value: A): () => A
export declare function defaultTo<T>(
  defaultValue: NonNullable<T>,
  value: T | null | undefined,
): NonNullable<T>
export declare function defaultTo<T>(
  value: T | null | undefined,
): (defaultValue: NonNullable<T>) => NonNullable<T>
export declare function falsy(): boolean
export declare function truthy(): boolean

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

export declare function ignore(): void
export declare function unless<A>(
  value: A,
  predicateFn: (_1: A) => boolean,
  falsyFn: (_1: A) => A,
): A
export declare function unless<A>(
  predicateFn: (_1: A) => boolean,
  falsyFn: (_1: A) => A,
): (value: A) => A
export declare function when<A>(
  value: A,
  predicateFn: (_1: A) => boolean,
  truthyFn: (_1: A) => A,
): A
export declare function when<A>(
  predicateFn: (_1: A) => boolean,
  truthyFn: (_1: A) => A,
): (value: A) => A
export declare function allPass<A>(value: A, fns: Array<(_1: A) => boolean>): boolean
export declare function allPass<A>(fns: Array<(_1: A) => boolean>): (value: A) => boolean
export declare function anyPass<A>(value: A, fns: Array<(_1: A) => boolean>): boolean
export declare function anyPass<A>(fns: Array<(_1: A) => boolean>): (value: A) => boolean
export declare function pred(n: number): number
export declare function succ(n: number): number
