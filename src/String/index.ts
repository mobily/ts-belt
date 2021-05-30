import type { Array } from '../types'

export declare const length: (str: string) => number
export declare const head: (str: string) => string
export declare const slice: {
  (from: number): (to: number) => (str: string) => string
  (from: number, to: number): (str: string) => string
  (from: number, to: number, str: string): string
}
export declare const sliceToEnd: {
  (from: number): (str: string) => string
  (from: number, str: string): string
}
export declare const toLowerCase: (str: string) => string
export declare const toUpperCase: (str: string) => string
export declare const trim: (str: string) => string
export declare const isEmpty: (str: string) => boolean
export declare const split: {
  (delimiter: string): (str: string) => Array<string>
  (delimiter: string, str: string): Array<string>
}
export declare const includes: {
  (value: string): (str: string) => boolean
  (value: string, str: string): boolean
}
export declare const replace: {
  (oldValue: string): (newValue: string) => (str: string) => string
  (oldValue: string, newValue: string): (str: string) => string
  (oldValue: string, newValue: string, str: string): string
}
export declare const replaceByRe: {
  (regex: RegExp): (value: string) => (str: string) => string
  (regex: RegExp, value: string): (str: string) => string
  (regex: RegExp, value: string, str: string): string
}
