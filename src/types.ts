export declare type EmptyObject = Record<string, any>
export declare type ExtractValue<T> = Exclude<T, null | undefined>
export declare type ExtractNested<T> = T extends ReadonlyArray<infer K> ? ExtractNested<K> : T
