export declare function length(str: string): number
export declare function head(str: string): string
export declare function slice(str: string, start: number, end: number): string
export declare function slice(
  start: number,
  end: number,
): (str: string) => string
export declare function sliceToEnd(str: string, start: number): string
export declare function sliceToEnd(start: number): (str: string) => string
export declare function toLowerCase(str: string): string
export declare function toUpperCase(str: string): string
export declare function trim(str: string): string
export declare function isEmpty(str: string): boolean
export declare function split(
  str: string,
  delimiter: string,
): ReadonlyArray<string>
export declare function split(
  delimiter: string,
): (str: string) => ReadonlyArray<string>
export declare function includes(str: string, value: string): boolean
export declare function includes(value: string): (str: string) => boolean
export declare function replace(
  str: string,
  oldValue: string,
  newValue: string,
): string
export declare function replace(
  oldValue: string,
  newValue: string,
): (str: string) => string
export declare function replaceByRe(
  str: string,
  regex: RegExp,
  value: string,
): string
export declare function replaceByRe(
  regex: RegExp,
  value: string,
): (str: string) => string
