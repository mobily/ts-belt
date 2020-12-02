type Constructor<T> = {
  readonly value: NonNullable<T>
  readonly __type: symbol
}

export type Some<T> = Constructor<NonNullable<T>> & { __: 'Some' }
export type None = Constructor<never> & { __: 'None' }
export type Ok<T> = Constructor<NonNullable<T>> & { __: 'Ok' }
export type Error<T> = Constructor<NonNullable<T>> & { __: 'Error' }

export type Option<T> = Some<T> | None
export type Result<A, B> = Ok<A> | Error<B>

export type UnaryFunction<T, R> = (value: T) => R
export type MapFn<T, R> = (value: T) => R
export type Predicate<T extends any[]> = (...args: T) => boolean
