export declare type UnaryFunction<T, R> = (value: T) => R

export declare function pipe<T, R>(value: T, result: UnaryFunction<T, R>): R

export declare function pipe<T, A, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  result: UnaryFunction<A, R>,
): R

export declare function pipe<T, A, B, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  result: UnaryFunction<B, R>,
): R

export declare function pipe<T, A, B, C, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  result: UnaryFunction<C, R>,
): R

export declare function pipe<T, A, B, C, D, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  result: UnaryFunction<D, R>,
): R

export declare function pipe<T, A, B, C, D, E, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  result: UnaryFunction<E, R>,
): R

export declare function pipe<T, A, B, C, D, E, F, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  op6: UnaryFunction<E, F>,
  result: UnaryFunction<F, R>,
): R

export declare function pipe<T, A, B, C, D, E, F, G, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  op6: UnaryFunction<E, F>,
  op7: UnaryFunction<F, G>,
  result: UnaryFunction<G, R>,
): R

export declare function pipe<T, A, B, C, D, E, F, G, H, R>(
  value: T,
  op1: UnaryFunction<T, A>,
  op2: UnaryFunction<A, B>,
  op3: UnaryFunction<B, C>,
  op4: UnaryFunction<C, D>,
  op5: UnaryFunction<D, E>,
  op6: UnaryFunction<E, F>,
  op7: UnaryFunction<F, G>,
  op8: UnaryFunction<G, H>,
  result: UnaryFunction<H, R>,
): R
