export declare const head: (str: string) => string
export declare const slice: {
  (from: number): (to: number) => (xs: string) => string
  (from: number, to: number): (xs: string) => string
  (from: number, to: number, xs: string): string
}
export declare const sliceToEnd: {
  (from: number): (xs: string) => string
  (from: number, xs: string): string
}
export declare const toLowerCase: (str: string) => string
export declare const toUpperCase: (str: string) => string
export declare const trim: (str: string) => string
