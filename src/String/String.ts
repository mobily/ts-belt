/** Returns `true` if the given string starts with `substr`. */

export declare function startsWith<A extends string>(
	str: string,
	substr: A,
): str is `${A}${string}`

export declare function endsWith<A extends string>(
	str: string,
	substr: A,
): str is `${string}${A}`
