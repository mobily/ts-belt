export declare type Controlled<A extends any[]> = {
  readonly cancel: () => void
  readonly invoke: (...args: A) => void
  readonly isScheduled: () => boolean
  readonly schedule: (...args: A) => void
}
export declare type Options = {
  readonly delay: number
  readonly leading: boolean
}
export declare const defaultTo: <T>(
  defaultValue: NonNullable<T>,
  value: T | null | undefined,
) => NonNullable<T>
export declare const equals: (fst: any, snd: any) => boolean
export declare const makeControlledDebounce: <A extends any[]>(
  fn: (...args: A) => void,
  options: Options,
) => Controlled<A>
export declare const debounce: <A extends any[]>(
  fn: (...args: A) => void,
  delay: number,
) => (...args: A) => void
export declare const makeControlledThrottle: <A extends any[]>(
  fn: (...args: A) => void,
  options: Options,
) => Controlled<A>
export declare const throttle: <A extends any[]>(
  fn: (...args: A) => void,
  delay: number,
) => (...args: A) => void
