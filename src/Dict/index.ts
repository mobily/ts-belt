export declare const makeEmpty: <T>() => T
export declare const prop: {
  <T, K extends keyof T>(key: K): (obj: T) => T[K]
  <T, K extends keyof T>(key: K, obj: T): T[K]
}
