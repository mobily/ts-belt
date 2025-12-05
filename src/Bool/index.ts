/** Folds a boolean value into a value of a different type, using a function for the `true` and `false` cases. */

export declare function ifElse<A>(
	value: boolean,
	truthyFn: () => A,
	falsyFn: () => A,
): A

export declare function ifElse<A>(
	truthyFn: () => A,
	falsyFn: () => A,
): (value: boolean) => A

/** Negates the given boolean. */

export declare function inverse(value: boolean): boolean

/** Alias for `inverse`. */

export declare function not(value: boolean): boolean

/** Combines two booleans using `AND` → `a && b`. */

export declare function and(b: boolean): (a: boolean) => boolean

export declare function and(a: boolean, b: boolean): boolean

/** Combines two booleans using `OR` → `a || b`. */

export declare function or(b: boolean): (a: boolean) => boolean

export declare function or(a: boolean, b: boolean): boolean

/** Combines two booleans using `NAND` → `!(a && b)`. */

export declare function nand(b: boolean): (a: boolean) => boolean

export declare function nand(a: boolean, b: boolean): boolean

/** Combines two booleans using `NOR` → `!(a || b)`. */

export declare function nor(b: boolean): (a: boolean) => boolean

export declare function nor(a: boolean, b: boolean): boolean

/** Combines two booleans using `XOR` → `(!a && b) || (a && !b)`. */

export declare function xor(b: boolean): (a: boolean) => boolean

export declare function xor(a: boolean, b: boolean): boolean

/** Combines two booleans using `XNOR` → `!xor(a, b)`. */

export declare function xnor(b: boolean): (a: boolean) => boolean

export declare function xnor(a: boolean, b: boolean): boolean

/** Combines two booleans using an implication (`!a || b`). */

export declare function implies(b: boolean): (a: boolean) => boolean

export declare function implies(a: boolean, b: boolean): boolean
