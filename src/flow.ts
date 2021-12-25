import { UnaryFunction, AnyArityFunction } from './types'

export declare function flow<A extends ReadonlyArray<unknown>, B>(
  fn1: AnyArityFunction<A, B>,
): AnyArityFunction<A, B>

export declare function flow<A extends ReadonlyArray<unknown>, B, C>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
): AnyArityFunction<A, C>

export declare function flow<A extends ReadonlyArray<unknown>, B, C, D>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
): AnyArityFunction<A, D>

export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
): AnyArityFunction<A, E>

export declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
): AnyArityFunction<A, F>

export declare function flow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
): AnyArityFunction<A, G>

export declare function flow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
  fn7: UnaryFunction<G, H>,
): AnyArityFunction<A, H>

export declare function flow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
  fn7: UnaryFunction<G, H>,
  fn8: UnaryFunction<H, I>,
): AnyArityFunction<A, I>

export declare function flow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
>(
  fn1: AnyArityFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
  fn7: UnaryFunction<G, H>,
  fn8: UnaryFunction<H, I>,
  fn9: UnaryFunction<I, J>,
): AnyArityFunction<A, J>
