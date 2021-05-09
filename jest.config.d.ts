declare namespace jest {
  interface Matchers<R> {
    toBeNone(): R
    toBeSome<T>(value: T): R
    toBeOk<T>(value: T): R
    toBeError<T>(value: T): R
  }
}
