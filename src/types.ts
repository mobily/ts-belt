/// <reference path="global.d.ts" />

export declare type Array<T> = Belt.UseMutableArrays extends 1
	? T[]
	: readonly T[];
export declare type Mutable<T> = { -readonly [P in keyof T]-?: T[P] };
export declare type ExtractValue<T> = Exclude<T, null | undefined | void>;
export declare type UnpackArray<T> = T extends Array<infer K>
	? UnpackArray<K>
	: T;
