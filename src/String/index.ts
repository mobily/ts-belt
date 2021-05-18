import type { Option } from '../Option'

export declare const head: (str: string) => Option<string>
export declare const slice: {
  (from: number): (to: number) => (xs: string) => string
  (from: number, to: number): (xs: string) => string
  (from: number, to: number, xs: string): string
}
export declare const sliceToEnd: {
  (from: number): (xs: string) => string
  (from: number, xs: string): string
}
