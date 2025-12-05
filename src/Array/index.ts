import { UnpackArray, Array } from '../types'
/** Creates an empty array. Alternative for `const xs = [] as ReadonlyArray<A>`. */

export declare function makeEmpty<A>(): Array<A>

/** Returns a new array of size `n` populated by `mapFn(index)`, or an empty array if `n` is negative. */

export declare function makeWithIndex<A>(
	n: number,
	mapFn: (_1: number) => A,
): Array<A>

export declare function makeWithIndex<A>(
	mapFn: (_1: number) => A,
): (n: number) => Array<A>

/** Returns a new array of size `n` populated by `element`, or an empty array if `n` is negative. */

export declare function make<A>(n: number, element: A): Array<A>

export declare function make<A>(element: A): (n: number) => Array<A>

/** Alias for `make`. */

export declare function repeat<A>(n: number, element: A): Array<A>

export declare function repeat<A>(element: A): (n: number) => Array<A>

/** Returns the size of the provided array. */

export declare function length<A>(xs: Array<A>): number

/** Determines whether the given array is empty. */

export declare function isEmpty<A>(xs: Array<A>): boolean

/** Determines whether the given array is not empty. */

export declare function isNotEmpty<A>(xs: Array<A>): boolean

/** Returns a new array with the elements of the provided array in reverse order. */

export declare function reverse<A>(xs: Array<A>): Array<A>

/** Adds a single element to the end of an array. */

export declare function append<A>(xs: Array<A>, element: A): Array<A>

export declare function append<A>(element: A): (xs: Array<A>) => Array<A>

/** Prepends a single element to the start of the given array. */

export declare function prepend<A>(xs: Array<A>, element: A): Array<A>

export declare function prepend<A>(element: A): (xs: Array<A>) => Array<A>

/** Returns a new array which contains the given delimiter inserted before every element in the provided array. */

export declare function prependToAll<A>(xs: Array<A>, delimiter: A): Array<A>

export declare function prependToAll<A>(
	delimiter: A,
): (xs: Array<A>) => Array<A>

/** Creates a new array with the separator interposed between elements. */

export declare function intersperse<A>(xs: Array<A>, delimiter: A): Array<A>

export declare function intersperse<A>(delimiter: A): (xs: Array<A>) => Array<A>

/** Returns `Some(value)` at the given index, or `None` if the given index is out of range. */

export declare function get<A>(xs: Array<A>, index: number): undefined | A

export declare function get<A>(index: number): (xs: Array<A>) => undefined | A

/** Alias for `get`. */

export declare function at<A>(xs: Array<A>, index: number): undefined | A

export declare function at<A>(index: number): (xs: Array<A>) => undefined | A

/** Returns `value` at the given index (use only if you're entirely sure that a value exists at the given index). */

export declare function getUnsafe<A>(xs: Array<A>, index: number): A

export declare function getUnsafe<A>(index: number): (xs: Array<A>) => A

/** Returns `value` at the given index, or `undefined` if the given index is out of range. */

export declare function getUndefined<A>(
	xs: Array<A>,
	index: number,
): undefined | A

export declare function getUndefined<A>(
	index: number,
): (xs: Array<A>) => undefined | A

/** Returns `Some(value)` for the first element in the array that satisifies the given predicate function, or `None` if no element satisifies the predicate. */

export declare function getBy<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): undefined | A

export declare function getBy<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => undefined | A

/** Alias for `getBy`. */

export declare function find<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): undefined | A

export declare function find<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => undefined | A

/** Returns `Some(value)` where `value` is the first element of the array, or `None` if the given array is empty. */

export declare function head<A>(xs: Array<A>): undefined | A

/** Returns the last element (`Some(value)`) in the array, or `None` if the given array is empty. */

export declare function last<A>(xs: Array<A>): undefined | A

/** Returns a new array containing all but the the first element of the provided array, or `None` if the given array is empty (has no tail). */

export declare function tail<A>(xs: Array<A>): undefined | Array<A>

/** Returns a new array containing all but the first element of the provided array, or an empty array if the given array is empty (has no tail). */

export declare function tailOrEmpty<A>(xs: Array<A>): Array<A>

/** Returns a new array (`Some(xs)`) with all elements except the last of the provided array. */

export declare function init<A>(xs: Array<A>): undefined | Array<A>

/** Returns a new array with all elements except the last of the provided array, or an empty array if the given array is empty. */

export declare function initOrEmpty<A>(xs: Array<A>): Array<A>

/** Returns a new array including the first `n` elements of the provided array, or an empty array if `n` is either negative or greater than the length of the provided array. */

export declare function take<A>(xs: Array<A>, n: number): Array<A>

export declare function take<A>(n: number): (xs: Array<A>) => Array<A>

/** Returns a new array (`Some(xs)`) with the first `n` elements of the provided array, or `None` if `n` is either negative or greater than the length of the provided array. */

export declare function takeExactly<A>(
	xs: Array<A>,
	n: number,
): undefined | Array<A>

export declare function takeExactly<A>(
	n: number,
): (xs: Array<A>) => undefined | Array<A>

/** Returns a new array, filled with elements from the provided array until an element doesn't pass the provided predicate. */

export declare function takeWhile<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): Array<A>

export declare function takeWhile<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Returns a new array that does not contain the first `n` elements of the provided array, or an empty array if `n` is either less than `0` or greater than the length of the provided array. */

export declare function drop<A>(xs: Array<A>, n: number): Array<A>

export declare function drop<A>(n: number): (xs: Array<A>) => Array<A>

/** Returns a new array (`Some(xs)`) that does not contain the first `n` elements of the provided array, or `None` if `n` is either less than `0` or greater than the length of the provided array. */

export declare function dropExactly<A>(
	xs: Array<A>,
	n: number,
): undefined | Array<A>

export declare function dropExactly<A>(
	n: number,
): (xs: Array<A>) => undefined | Array<A>

/** Drops elements from the beginning of the array until an element is reached which does not satisfy the given predicate. */

export declare function dropWhile<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): Array<A>

export declare function dropWhile<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Splits the provided array into head and tail parts (as a tuple), but only if the array is not empty. */

export declare function uncons<A>(
	xs: Array<A>,
): undefined | readonly [A, Array<A>]

/** Returns a new array by calling `mapFn` for each element of the provided array. */

export declare function map<A, B>(xs: Array<A>, mapFn: (_1: A) => B): Array<B>

export declare function map<A, B>(
	mapFn: (_1: A) => B,
): (xs: Array<A>) => Array<B>

/** Returns a new array by calling `mapFn` (which takes two arguments: the element from array and its index) for each element of the provided array. */

export declare function mapWithIndex<A, B>(
	xs: Array<A>,
	mapFn: (_1: number, _2: A) => B,
): Array<B>

export declare function mapWithIndex<A, B>(
	mapFn: (_1: number, _2: A) => B,
): (xs: Array<A>) => Array<B>

/** Returns a new array that keep all elements satisfy the given predicate. */

export declare function filter<A, B extends A>(
	xs: Array<A>,
	predicateFn: (value: A) => value is B,
): Array<B>

export declare function filter<A, B extends A>(
	predicateFn: (value: A) => value is B,
): (xs: Array<A>) => Array<B>

/** Returns a new array that keep all elements satisfy the given predicate. */

export declare function filter<A>(
	xs: Array<A>,
	predicateFn: (value: A) => boolean,
): Array<A>

export declare function filter<A>(
	predicateFn: (value: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Alias for `filter`. */

export declare function keep<A, B extends A>(
	xs: Array<A>,
	predicateFn: (value: A) => value is B,
): Array<B>

export declare function keep<A, B extends A>(
	predicateFn: (value: A) => value is B,
): (xs: Array<A>) => Array<B>

/** Alias for `filter`. */

export declare function keep<A>(
	xs: Array<A>,
	predicateFn: (value: A) => boolean,
): Array<A>

export declare function keep<A>(
	predicateFn: (value: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Returns a new array that keep all elements satisfy the given predicate (which take two arguments: the element for the array and its index). */

export declare function filterWithIndex<A, B extends A>(
	xs: Array<A>,
	predicateFn: (index: number, value: A) => value is B,
): Array<B>

export declare function filterWithIndex<A, B extends A>(
	predicateFn: (index: number, value: A) => value is B,
): (xs: Array<A>) => Array<B>

/** Returns a new array that keep all elements satisfy the given predicate (which take two arguments: the element for the array and its index). */

export declare function filterWithIndex<A>(
	xs: Array<A>,
	predicateFn: (index: number, value: A) => boolean,
): Array<A>

export declare function filterWithIndex<A>(
	predicateFn: (index: number, value: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Alias for `filterWithIndex`. */

export declare function keepWithIndex<A, B extends A>(
	xs: Array<A>,
	predicateFn: (index: number, value: A) => value is B,
): Array<B>

export declare function keepWithIndex<A, B extends A>(
	predicateFn: (index: number, value: A) => value is B,
): (xs: Array<A>) => Array<B>

/** Alias for `filterWithIndex`. */

export declare function keepWithIndex<A>(
	xs: Array<A>,
	predicateFn: (index: number, value: A) => boolean,
): Array<A>

export declare function keepWithIndex<A>(
	predicateFn: (index: number, value: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Returns a new array of elements from the provided array which do not satisfy the given predicate. */

export declare function reject<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): Array<A>

export declare function reject<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Returns a new array of elements from the provided array which do not satisfy the given predicate (which take two arguments: the element for the array and its index). */

export declare function rejectWithIndex<A>(
	xs: Array<A>,
	predicateFn: (_1: number, _2: A) => boolean,
): Array<A>

export declare function rejectWithIndex<A>(
	predicateFn: (_1: number, _2: A) => boolean,
): (xs: Array<A>) => Array<A>

/** Applies `reduceFn` (which has two parameters: an `accumulator` which starts with a value of `initialValue` and the next value from the array) to each element of the provided array, and eventually it returns the final value of the accumulator. */

export declare function reduce<A, B>(
	xs: Array<A>,
	initialValue: B,
	reduceFn: (_1: B, _2: A) => B,
): B

export declare function reduce<A, B>(
	initialValue: B,
	reduceFn: (_1: B, _2: A) => B,
): (xs: Array<A>) => B

/** Works like A.reduce, except that the function `reduceFn` is applied to each item of `xs` from the last back to the first. */

export declare function reduceReverse<A, B>(
	xs: Array<A>,
	initialValue: B,
	reduceFn: (_1: B, _2: A) => B,
): B

export declare function reduceReverse<A, B>(
	initialValue: B,
	reduceFn: (_1: B, _2: A) => B,
): (xs: Array<A>) => B

/** Applies `reduceFn` (which has three parameters: an `accumulator` which starts with a value of `initialValue`, the next value from the array and its index) to each element of the provided array, and eventually it returns the final value of the accumulator. */

export declare function reduceWithIndex<A, B>(
	xs: Array<A>,
	initialValue: B,
	reduceFn: (_1: B, _2: A, _3: number) => B,
): B

export declare function reduceWithIndex<A, B>(
	initialValue: B,
	reduceFn: (_1: B, _2: A, _3: number) => B,
): (xs: Array<A>) => B

/** Returns two arrays (`Some([xs, ys])`), with the original array divided at the given index, or `None` if the index is out of range. */

export declare function splitAt<A>(
	xs: Array<A>,
	offset: number,
): undefined | readonly [Array<A>, Array<A>]

export declare function splitAt<A>(
	offset: number,
): (xs: Array<A>) => undefined | readonly [Array<A>, Array<A>]

/** Returns an array of arrays, where each of the inner arrays has length equal to the provided `size` parameter. */

export declare function splitEvery<A>(
	xs: Array<A>,
	size: number,
): Array<Array<A>>

export declare function splitEvery<A>(
	size: number,
): (xs: Array<A>) => Array<Array<A>>

/** Returns a new array with elements in the original array randomly shuffled. */

export declare function shuffle<A>(xs: Array<A>): Array<A>

/** Splits the provided array into two separate arrays - one containing elements which satisfy the predicate, and the other array containing the elements which do not satisfy the predicate. */

export declare function partition<A, B extends A>(
	xs: Array<A>,
	predicateFn: (value: A) => value is B,
): readonly [Array<B>, Array<Exclude<A, B>>]

export declare function partition<A, B extends A>(
	predicateFn: (value: A) => value is B,
): (xs: Array<A>) => readonly [Array<B>, Array<Exclude<A, B>>]

/** Splits the provided array into two separate arrays - one containing elements which satisfy the predicate, and the other array containing the elements which do not satisfy the predicate. */

export declare function partition<A>(
	xs: Array<A>,
	predicateFn: (value: A) => boolean,
): readonly [Array<A>, Array<A>]

export declare function partition<A>(
	predicateFn: (value: A) => boolean,
): (xs: Array<A>) => readonly [Array<A>, Array<A>]

/** Returns a new array containing the concatenation of two provided arrays. */

export declare function concat<A>(xs1: Array<A>): (xs0: Array<A>) => Array<A>

export declare function concat<A>(xs0: Array<A>, xs1: Array<A>): Array<A>

/** Returns a new array as the concatenation of the provided array of arrays. */

export declare function concatMany<A>(xs: Array<Array<A>>): Array<A>

/** Returns `true`` if all elements satisfy the given predicate. */

export declare function every<A>(xs: Array<A>, fn: (_1: A) => boolean): boolean

export declare function every<A>(
	fn: (_1: A) => boolean,
): (xs: Array<A>) => boolean

/** Returns `true` if at least one of the elements in the given array satifies the predicate. */

export declare function some<A>(xs: Array<A>, fn: (_1: A) => boolean): boolean

export declare function some<A>(
	fn: (_1: A) => boolean,
): (xs: Array<A>) => boolean

/** Returns a new array with the `len` elements of the given array starting at `offset` (offset can be negative). */

export declare function slice<A>(
	xs: Array<A>,
	offset: number,
	len: number,
): Array<A>

export declare function slice<A>(
	offset: number,
	len: number,
): (xs: Array<A>) => Array<A>

/** Returns a new array with the elements of the given array starting at `offset` (offset can be negative). */

export declare function sliceToEnd<A>(xs: Array<A>, offset: number): Array<A>

export declare function sliceToEnd<A>(
	offset: number,
): (xs: Array<A>) => Array<A>

/** Returns `false` if length of both arrays is not the same, otherwise compares elements one by one using the comparator. */

export declare function eq<A>(
	xs0: Array<A>,
	xs1: Array<A>,
	comparatorFn: (_1: A, _2: A) => boolean,
): boolean

export declare function eq<A>(
	xs1: Array<A>,
	comparatorFn: (_1: A, _2: A) => boolean,
): (xs0: Array<A>) => boolean

/** Returns a new inclusive array of numbers from `start` to `finish` (it returns an empty array when `start` > `finish`). */

export declare function range(finish: number): (start: number) => Array<number>

export declare function range(start: number, finish: number): Array<number>

/** Returns a new inclusive array of numbers from `start` to `finish` (it returns an empty array when `step` is 0 or negative, it also returns an empty array when `start` > `finish`). */

export declare function rangeBy(
	finish: number,
	step: number,
): (start: number) => Array<number>

export declare function rangeBy(
	start: number,
	finish: number,
	step: number,
): Array<number>

/** Returns a copy of the provided array. */

export declare function copy<A>(xs: Array<A>): Array<A>

/** Creates a new array of pairs from corresponding elements of two provided arrays. */

export declare function zip<A, B>(
	xs1: Array<B>,
): (xs0: Array<A>) => Array<readonly [A, B]>

export declare function zip<A, B>(
	xs0: Array<A>,
	xs1: Array<B>,
): Array<readonly [A, B]>

/** Creates a new array by applying `zipFn` to corresponding elements of two provided arrays. */

export declare function zipWith<A, B, C>(
	xs0: Array<A>,
	xs1: Array<B>,
	zipFn: (_1: A, _2: B) => C,
): Array<C>

export declare function zipWith<A, B, C>(
	xs1: Array<B>,
	zipFn: (_1: A, _2: B) => C,
): (xs0: Array<A>) => Array<C>

/** Takes an array of pairs and creates a pair of arrays. The first array contains all the first elements of the pairs and the other one contains all the second elements. */

export declare function unzip<A, B>(
	xs: Array<readonly [A, B]>,
): readonly [Array<A>, Array<B>]

/** Creates a new array by replacing the value at the given index with the given value (no replacement is made if the index is out of range). */

export declare function replaceAt<A>(
	xs: Array<A>,
	targetIndex: number,
	element: A,
): Array<A>

export declare function replaceAt<A>(
	targetIndex: number,
	element: A,
): (xs: Array<A>) => Array<A>

/** Creates a new array that inserts the given value at the given index (no insertion is made if the index is out of range). */

export declare function insertAt<A>(
	xs: Array<A>,
	targetIndex: number,
	element: A,
): Array<A>

export declare function insertAt<A>(
	targetIndex: number,
	element: A,
): (xs: Array<A>) => Array<A>

/** Creates a new array that replaces the value at the given index with the value returned by the provided function (the original array if the index is out of range). */

export declare function updateAt<A>(
	xs: Array<A>,
	targetIndex: number,
	fn: (_1: A) => A,
): Array<A>

export declare function updateAt<A>(
	targetIndex: number,
	fn: (_1: A) => A,
): (xs: Array<A>) => Array<A>

/** Creates a new array with the elements at the two given indexes swapped (the original array if the index is out of range). */

export declare function swapAt<A>(
	xs: Array<A>,
	targetIndex: number,
	swapIndex: number,
): Array<A>

export declare function swapAt<A>(
	targetIndex: number,
	swapIndex: number,
): (xs: Array<A>) => Array<A>

/** Creates a new array without the element at the given index (the original array if the index is out of range). */

export declare function removeAt<A>(xs: Array<A>, targetIndex: number): Array<A>

export declare function removeAt<A>(
	targetIndex: number,
): (xs: Array<A>) => Array<A>

/** Returns a new array containing only one copy of each element in the provided array, based upon the value returned by applying the function to each element. */

export declare function uniqBy<A, B>(
	xs: Array<A>,
	uniqFn: (_1: A) => B,
): Array<A>

export declare function uniqBy<A, B>(
	uniqFn: (_1: A) => B,
): (xs: Array<A>) => Array<A>

/** Returns a new array containing only one copy of each element in the provided array. */

export declare function uniq<A>(xs: Array<A>): Array<A>

/** Calls `fn` on each element of the provided array. */

export declare function forEach<A>(xs: Array<A>, fn: (_1: A) => void): void

export declare function forEach<A>(fn: (_1: A) => void): (xs: Array<A>) => void

/** Calls `fn` (which takes two arguments: the element from array and its index) on each element of the provided array. */

export declare function forEachWithIndex<A>(
	xs: Array<A>,
	fn: (_1: number, _2: A) => void,
): void

export declare function forEachWithIndex<A>(
	fn: (_1: number, _2: A) => void,
): (xs: Array<A>) => void

/** Returns `Some(index)` for the first value in the provided array that satisifies the predicate function. */

export declare function getIndexBy<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): undefined | number

export declare function getIndexBy<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => undefined | number

/** Returns `true` if the provided value is equal to at least one element of the given array. */

export declare function includes<A>(xs: Array<A>, value: A): boolean

export declare function includes<A>(value: A): (xs: Array<A>) => boolean

/** Converts each element of the array to a string and concatenates them, separated by the given string. */

export declare function join<A>(xs: Array<A>, delimiter: string): string

export declare function join<A>(delimiter: string): (xs: Array<A>) => string

/** Returns a new array, sorted according to the comparator function. */

export declare function sort<A>(
	xs: Array<A>,
	sortFn: (_1: A, _2: A) => number,
): Array<A>

export declare function sort<A>(
	sortFn: (_1: A, _2: A) => number,
): (xs: Array<A>) => Array<A>

/** Returns a new array, sorted according to the provided function. */

export declare function sortBy<A, B>(
	xs: Array<A>,
	sortFn: (_1: A) => B,
): Array<A>

export declare function sortBy<A, B>(
	sortFn: (_1: A) => B,
): (xs: Array<A>) => Array<A>

/** Splits the given array into sub-arrays in an object, grouped by the result of running each value through the provided function. */

export declare function groupBy<A>(
	xs: Array<A>,
	groupFn: (item: A) => PropertyKey,
): Record<PropertyKey, readonly [A, ...A[]]>

export declare function groupBy<A>(
	groupFn: (item: A) => PropertyKey,
): (xs: Array<A>) => Record<PropertyKey, readonly [A, ...A[]]>

/** Creates a new array with all sub-array elements concatenated into it (the single level depth). */

export declare function flat<A>(
	xs: Array<A>,
): Array<A extends Array<infer B> ? B : A>

/** Creates a new array with all sub-array elements concatenated into it recursively up to the `Infinite` depth. */

export declare function deepFlat<A>(xs: Array<A>): Array<UnpackArray<A>>

/** Converts the given array to the TypeScript's tuple. */

export declare function toTuple<T extends Array<any>>(
	xs: readonly [...T],
): readonly [...T]

/** Applies a side-effect function on each element of the provided array. */

export declare function tap<A>(xs: Array<A>, fn: (_1: A) => void): Array<A>

export declare function tap<A>(fn: (_1: A) => void): (xs: Array<A>) => Array<A>

/** Returns a new tuple with the reverse order of the elements. */

export declare function flip<A, B>(xs: readonly [A, B]): readonly [B, A]

/** Returns a new array that keep all elements that return `Some(value)` applied within `predicateFn`. */

export declare function filterMap<A, B>(
	xs: Array<A>,
	predicateFn: (_1: A) => undefined | B,
): Array<B>

export declare function filterMap<A, B>(
	predicateFn: (_1: A) => undefined | B,
): (xs: Array<A>) => Array<B>

/** Alias for `filterMap`. */

export declare function keepMap<A, B>(
	xs: Array<A>,
	predicateFn: (_1: A) => undefined | B,
): Array<B>

export declare function keepMap<A, B>(
	predicateFn: (_1: A) => undefined | B,
): (xs: Array<A>) => Array<B>

/** Removes the first occurrence of the given value from the array, using the given equality function. */

export declare function removeFirstBy<A, B>(
	xs: Array<A>,
	value: B,
	predicateFn: (_1: A, _2: B) => boolean,
): Array<A>

export declare function removeFirstBy<A, B>(
	value: B,
	predicateFn: (_1: A, _2: B) => boolean,
): (xs: Array<A>) => Array<A>

/** Creates a copy of the given array with the first occurrence of the given element removed */

export declare function removeFirst<A>(xs: Array<A>, value: A): Array<A>

export declare function removeFirst<A>(value: A): (xs: Array<A>) => Array<A>

/** Creates a new array of each value paired with its index in a tuple. */

export declare function zipWithIndex<A>(
	xs: Array<A>,
): Array<readonly [A, number]>

/** Returns `true` if all elements of the array match the predicate function, otherwise, returns `false`. */

export declare function all<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): boolean

export declare function all<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => boolean

/** Returns `true` if at least one of the elements of the array match the predicate function, otherwise, returns `false`. */

export declare function any<A>(
	xs: Array<A>,
	predicateFn: (_1: A) => boolean,
): boolean

export declare function any<A>(
	predicateFn: (_1: A) => boolean,
): (xs: Array<A>) => boolean

/** Returns elements from the first array, not existing in the second array. */

export declare function difference<A>(ys: Array<A>): (xs: Array<A>) => Array<A>

export declare function difference<A>(xs: Array<A>, ys: Array<A>): Array<A>

/** Returns union of two arrays. */

export declare function union<A>(ys: Array<A>): (xs: Array<A>) => Array<A>

export declare function union<A>(xs: Array<A>, ys: Array<A>): Array<A>

/** Returns intersection of two arrays. */

export declare function intersection<A>(
	ys: Array<A>,
): (xs: Array<A>) => Array<A>

export declare function intersection<A>(xs: Array<A>, ys: Array<A>): Array<A>
export declare function sample<A>(xs: Array<A>): A
export declare function flatMap<A, B>(
	xs: Array<A>,
	fn: (value: A) => B | Array<B>,
): Array<B>
export declare function flatMap<A, B>(
	fn: (value: A) => B | Array<B>,
): (xs: Array<A>) => Array<B>
