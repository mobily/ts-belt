/** Subtracts `1` from the given number. */

export declare function pred(n: number): number

/** Adds `1` to the given number. */

export declare function succ(n: number): number

/** Returns the sum of two numbers. */

export declare function add(b: number): (a: number) => number

export declare function add(a: number, b: number): number

/** Returns the difference of two numbers. */

export declare function subtract(b: number): (a: number) => number

export declare function subtract(a: number, b: number): number

/** Multiplies two numbers. */

export declare function multiply(b: number): (a: number) => number

export declare function multiply(a: number, b: number): number

/** Divides two numbers. */

export declare function divide(b: number): (a: number) => number

export declare function divide(a: number, b: number): number

/** Returns the remainder of a number division. */

export declare function modulo(b: number): (a: number) => number

export declare function modulo(a: number, b: number): number

/** Returns the quotient and remainder of a number division. */

export declare function divideWithModulo(
  b: number,
): (a: number) => [number, number]

export declare function divideWithModulo(a: number, b: number): [number, number]
