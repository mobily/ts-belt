---
id: changelog
title: Changelog
---

### `v3.13.0`

- ✨ added [`R.fromExecution`](/api/result/#fromexecution)
- ✨ added [`R.fromPromise`](/api/result/#frompromise)
- ✨ added [`O.fromExecution`](/api/option/#fromexecution)
- ✨ added [`O.fromPromise`](/api/option/#frompromise)
- ✨ added [`S.append`](/api/string/#append) (alias for [`S.concat`](/api/string/#concat))
- ✨ added [`S.prepend`](/api/string/#prepend)
- ♻️ various tweaks to function signatures ([`F.equals`](/api/function/#equals), [`D.toPairs`](/api/object/#topairs), [`F.fromPairs`](/api/object/#frompairs))

### `v3.12.0`

- ✨ added [`A.all`](/api/array/#all)
- ✨ added [`A.any`](/api/array/#any)
- ✨ added [`A.difference`](/api/array/#difference)
- ✨ added [`A.intersection`](/api/array/#intersection)
- ✨ added [`A.union`](/api/array/#union)
- ♻️ various tweaks to function signatures ([`F.defaultTo`](/api/function/#defaultto), [`F.when`](/api/function/#when), [`F.unless`](/api/function/#unless))

### `v3.11.0`

- ✨ added a possibility for using either immutable or mutable arrays by default (read more [here](/docs/getting-started/config#immutable-vs-mutable))
- ✨ added [`F.toMutable`](/api/function/#tomutable)
- ✨ added [`F.coerce`](/api/function/#coerce)

### `v3.10.0`

- ✨ added [`F.tryCatch`](/api/function/#trycatch)
- ✨ added [`F.once`](/api/function/#once)
- ✨ added [`F.before`](/api/function/#before)
- ✨ added [`F.after`](/api/function/#after)
- ✨ added [`F.memoize`](/api/function/#memoize)
- ✨ added [`F.memoizeWithKey`](/api/function/#memoizewithkey)

### `v3.9.1`

- ✨ make [`A.filter`](/api/array#filter), [`A.filterWithIndex`](/api/array#filterwithindex), [`A.keep`](/api/array#keep), [`A.keepWithIndex`](/api/array#keepwithindex), [`A.partition`](/api/array#partition) and [`G.isNot`](/api/guards#isnot) types aware of type guards ([#25](https://github.com/mobily/ts-belt/issues/25))

### `v3.9.0`

- 🐛 fixed [`R.fromPredicate`](/api/result#frompredicate)
- ✨ added [`O.contains`](/api/option#contains)
- ✨ added [`O.zip`](/api/option#zip)
- ✨ added [`O.zipWith`](/api/option#zipwith)
- ✨ added [`A.removeFirst`](/api/array#removefirst)
- ✨ added [`A.removeFirstBy`](/api/array#removefirstby)
- ✨ added [`A.zipWithIndex`](/api/array#zipwithindex)

### `v3.8.0`

- 🐛 fixed [`O.fromPredicate`](/api/option#frompredicate)
- ♻️ the `Option` type is now `type Option<T> = T | undefined | null` (due to this update, adding `noUncheckedIndexedAccess` to your `tsconfig` is mandatory, you can see other recommended options [here](getting-started/config.md))

### `v3.7.0`

- ✨ added [`R.catchError`](/api/result#catcherror)
- ✨ added [`R.handleError`](/api/result#handleerror)
- ✨ added [`R.mapError`](/api/result#maperror)
- ✨ added [`R.tapError`](/api/result#taperror)
- ✨ added [`R.recover`](/api/result#recover)
- ✨ added [`R.flip`](/api/result#flip)

### `v3.6.0`

- ✨ added [`flow`](/api/pipe-flow#flow) ([#17](https://github.com/mobily/ts-belt/issues/17)
- ✨ added [`D.selectKeys`](/api/number#selectkeys) ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added [`D.deleteKey`](/api/number#deletekey) ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added [`D.deleteKeys`](/api/number#deletekeys) ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added [`N.clamp`](/api/number#clamp) ([@domeknn](https://github.com/domeknn))
- ✨ added [`N.gt`](/api/number#gt) ([@domeknn](https://github.com/domeknn))
- ✨ added [`N.lt`](/api/number#lt) ([@domeknn](https://github.com/domeknn))
- ✨ added [`N.gte`](/api/number#gte) ([@domeknn](https://github.com/domeknn))
- ✨ added [`N.lte`](/api/number#lte) ([@domeknn](https://github.com/domeknn))
- 🐛 fixed [`A.prependToAll`](/api/array#prependtoall) (the order of elements was incorrect after calling `prependToAll`)

### `v3.5.0`

- ✨ added [`D.update`](/api/object#update) ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added [`D.updateUnsafe`](/api/object#updateunsafe) ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added [`D.isEmpty`](/api/object#isempty)
- ✨ added [`D.isNotEmpty`](/api/object#isnotempty)
- ✨ added [`A.reduceReverse`](/api/array#reducereverse)
- ✨ added [`A.filterMap`](/api/array#filtermap) (alias: [`A.keepMap`](/api/array#keepmap))

### `v3.4.1`

- 🐛 fixed [`F.makeControlledThrottle`](/api/function#makecontrolledthrottle)
- 🐛 fixed [`F.makeControlledDebounce`](/api/function#makecontrolleddebounce)

⬆️ The `invoke` method was accepting only one argument.

### `v3.4.0`

- 🐛 fixed the internal implementation for comparing objects ([#10](https://github.com/mobily/ts-belt/issues/10))
- ✨ added [`D.set`](/api/object#set) ([@anthony-khong](https://github.com/anthony-khong))

### `v3.3.0`

- ♻️ all tuples are now `readonly`
- 🗑 `D.prop` has been deprecated (please use either [`D.get`](/api/object#get) or [`D.getUnsafe`](/api/object#getunsafe))
- ✨ added [`A.flip`](/api/array#flip)
- ✨ added [`F.tap`](/api/function#tap)
- ✨ added [`F.debounce`](/api/function#debounce)
- ✨ added [`F.makeControlledDebounce`](/api/function#makecontrolleddebounce)
- ✨ added [`F.throttle`](/api/function#throttle)
- ✨ added [`F.makeControlledThrottle`](/api/function#makecontrolledthrottle)

### `v3.2.0`

This version provides much better support for the point-free style. For instance, the following should not throw an error in TypeScript:

```typescript
A.reduce([1, 2, 3], 0, N.add)
A.reduce(['hello', 'world'], '', S.concat)
A.filter(['hello', 'world'], S.startsWith('h'))
```

- ✨ added [`O.tap`](/api/option#tap)
- ✨ added [`R.tap`](/api/result#tap)
- ✨ added [`A.tap`](/api/array#tap)

### `v3.1.1`

- 🐛 fixed arguments order of `A.*WithIndex` → `(index, value)` and `D.*WithKey` → `(key, value)`  functions

### `v3.1.0`

- 🐛 fixed [`S.head`](/api/string#head) return type
- ✨ added [`S.trimEnd`](/api/string#trimEnd) ([@Dilven](https://github.com/Dilven))
- ✨ added [`S.trimStart`](/api/string#trimStart) ([@Dilven](https://github.com/Dilven))
- ✨ added [`S.last`](/api/string#last) ([@Dilven](https://github.com/Dilven))

### `v3.0.1`

- 🐛 fixed [`A.uniqBy`](/api/array#uniqby) signature ([#1](https://github.com/mobily/ts-belt/issues/1))

### `v3.0.0`

Initial `v3` implementation.
