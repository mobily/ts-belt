import { UnaryFunction } from './types'

export declare function pipe<A, B>(value: A, fn1: UnaryFunction<A, B>): B

export declare function pipe<A, B, C>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
): C

export declare function pipe<A, B, C, D>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
): D

export declare function pipe<A, B, C, D, E>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
): E

export declare function pipe<A, B, C, D, E, F>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
): F

export declare function pipe<A, B, C, D, E, F, G>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
): G

export declare function pipe<A, B, C, D, E, F, G, H>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
  fn7: UnaryFunction<G, H>,
): H

export declare function pipe<A, B, C, D, E, F, G, H, I>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
  fn7: UnaryFunction<G, H>,
  fn8: UnaryFunction<H, I>,
): I

export declare function pipe<A, B, C, D, E, F, G, H, I, J>(
  value: A,
  fn1: UnaryFunction<A, B>,
  fn2: UnaryFunction<B, C>,
  fn3: UnaryFunction<C, D>,
  fn4: UnaryFunction<D, E>,
  fn5: UnaryFunction<E, F>,
  fn6: UnaryFunction<F, G>,
  fn7: UnaryFunction<G, H>,
  fn8: UnaryFunction<H, I>,
  fn9: UnaryFunction<I, J>,
): J
