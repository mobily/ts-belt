import { Array } from '../types'
/** Converts the given value to a string. */

export declare function make<A>(value: A): string

/** Returns the length of the given string. */

export declare function length(str: string): number

/** Returns a new string with `appendValue` added after `str`. */

export declare function concat(appendValue: string): (str: string) => string

export declare function concat(str: string, appendValue: string): string

/** Alias for `concat`. */

export declare function append(appendValue: string): (str: string) => string

export declare function append(str: string, appendValue: string): string

/** Returns a new string with `prependValue` added before `str`. */

export declare function prepend(prependValue: string): (str: string) => string

export declare function prepend(str: string, prependValue: string): string

/** Returns the substring of `str` starting at character `start` up to but not including `end`. */

export declare function slice(str: string, start: number, end: number): string

export declare function slice(
	start: number,
	end: number,
): (str: string) => string

/** Returns the substring of `str` starting at character `start` to the end of the string. */

export declare function sliceToEnd(str: string, start: number): string

export declare function sliceToEnd(start: number): (str: string) => string

/** Converts `str` to lower case. */

export declare function toLowerCase(str: string): string

/** Converts `str` to upper case. */

export declare function toUpperCase(str: string): string

/** Returns a new string with leading and trailing whitespace removed from `str`. */

export declare function trim(str: string): string

/** Returns a new string with leading whitespace removed from `str`. */

export declare function trimStart(str: string): string

/** Returns a new string with trailing whitespace removed from `str`. */

export declare function trimEnd(str: string): string

/** Returns `true` if the provided string is empty. */

export declare function isEmpty(str: string): boolean

/** Returns `true` if the provided string is not empty. */

export declare function isNotEmpty(str: string): boolean

/** Splits the given string at every occurrence of `delimiter` and returns an array of the resulting substrings. */

export declare function split(delimiter: string): (str: string) => Array<string>

export declare function split(str: string, delimiter: string): Array<string>

/** Splits the given string at every occurrence of `regex` and returns an array of the resulting substrings. */

export declare function splitByRe(
	str: string,
	regex: RegExp,
): Array<undefined | string>

export declare function splitByRe(
	regex: RegExp,
): (str: string) => Array<undefined | string>

/** Splits the string at the given index, returning a tuple of the parts. */

export declare function splitAt(
	str: string,
	index: number,
): readonly [string, string]

export declare function splitAt(
	index: number,
): (str: string) => readonly [string, string]

/** Returns `true` if `searchValue` appears anywhere in the given string. */

export declare function includes(searchValue: string): (str: string) => boolean

export declare function includes(str: string, searchValue: string): boolean

/** Replaces the first occurrence of `oldValue` with `newValue` in the given string and returns a new string. */

export declare function replace(
	oldValue: string,
	newValue: string,
): (str: string) => string

export declare function replace(
	str: string,
	oldValue: string,
	newValue: string,
): string

/** Replaces each occurrence of `oldValue` with `newValue` in the given string and returns a new string. */

export declare function replaceAll(
	oldValue: string,
	newValue: string,
): (str: string) => string

export declare function replaceAll(
	str: string,
	oldValue: string,
	newValue: string,
): string

/** Replaces the matched regular expression with `newValue` in the given string and returns a new string. */

export declare function replaceByRe(
	str: string,
	regex: RegExp,
	value: string,
): string

export declare function replaceByRe(
	regex: RegExp,
	value: string,
): (str: string) => string

/** Returns a new string with the first occurrence of `value` removed from `str`. */

export declare function remove(value: string): (str: string) => string

export declare function remove(str: string, value: string): string

/** Returns a new string with every occurrence of `value` removed from `str`. */

export declare function removeAll(value: string): (str: string) => string

export declare function removeAll(str: string, value: string): string

/** Returns `Some(index)`, where `index` is the starting position of the first match of regular expression in the given string. */

export declare function search(str: string, regex: RegExp): undefined | number

export declare function search(
	regex: RegExp,
): (str: string) => undefined | number

/** Matches the given string against the provided regular expression, ir returns `None` if there is no match. */

export declare function match(
	str: string,
	regex: RegExp,
): undefined | Array<undefined | string>

export declare function match(
	regex: RegExp,
): (str: string) => undefined | Array<undefined | string>

/** Returns a string consisting of `n` repetitions of `str`. */

export declare function repeat(str: string, n: number): string

export declare function repeat(n: number): (str: string) => string

/** Returns `Some(index)`, where `index` is the starting position of the first occurrence of `searchValue` within `str`. */

export declare function indexOf(
	searchValue: string,
): (str: string) => undefined | number

export declare function indexOf(
	str: string,
	searchValue: string,
): undefined | number

/** Returns `Some(index)`, where `index` is the starting position of the last occurrence of `searchValue` within `str`. */

export declare function lastIndexOf(
	searchValue: string,
): (str: string) => undefined | number

export declare function lastIndexOf(
	str: string,
	searchValue: string,
): undefined | number

/** Returns `true` if the given string ends with `substr`. */

export declare function endsWith<A extends string>(
	str: string,
	substr: A,
): str is `${string}${A}`

export declare function endsWith<A extends string>(
	substr: A,
): (str: string) => str is `${string}${A}`

/** Returns `true` if the given string starts with `substr`. */

export declare function startsWith<A extends string>(
	str: string,
	substr: A,
): str is `${A}${string}`

export declare function startsWith<A extends string>(
	substr: A,
): (str: string) => str is `${A}${string}`

/** Returns `value`, where `value` is a string consisting of the character at location `n` in the string, or `undefined` if the `n` is out of range. */

export declare function getUnsafe(str: string, n: number): string

export declare function getUnsafe(n: number): (str: string) => string

/** Returns `Some(value)`, where `value` is a string consisting of the character at location `n` in the string, or `None` if the `n` is out of range. */

export declare function get(str: string, n: number): undefined | string

export declare function get(n: number): (str: string) => undefined | string

/** Creates an array with one character of `str` per element. */

export declare function toArray(str: string): Array<string>

/** Returns `Some(value)` where `value` is the first character of the string, or `None` if the given string is empty. */

export declare function head(str: string): undefined | string

/** Returns `Some(value)` where `value` is the last character of the string, or `None` if the given string is empty. */

export declare function last(str: string): undefined | string
