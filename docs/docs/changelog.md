---
id: changelog
title: Changelog
---

### `v3.8.0`

- 🐛 fixed `O.fromPredicate` implementation
- ♻️ the `Option` type is now `type Option<T> = T | undefined | null` (due to this update, adding `noUncheckedIndexedAccess` to your `tsconfig` is mandatory, you can see other recommended options [here](getting-started/config.md))

### `v3.7.0`

- ✨ added `R.catchError`
- ✨ added `R.handleError`
- ✨ added `R.mapError`
- ✨ added `R.tapError`
- ✨ added `R.recover`
- ✨ added `R.flip`

### `v3.6.0`

- ✨ added `flow` ([#17](https://github.com/mobily/ts-belt/issues/17), learn more [here](/api/pipe-flow))
- ✨ added `D.selectKeys` ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added `D.deleteKey` ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added `D.deleteKeys` ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added `N.clamp` ([@domeknn](https://github.com/domeknn))
- ✨ added `N.gt` ([@domeknn](https://github.com/domeknn))
- ✨ added `N.lt` ([@domeknn](https://github.com/domeknn))
- ✨ added `N.gte` ([@domeknn](https://github.com/domeknn))
- ✨ added `N.lte` ([@domeknn](https://github.com/domeknn))
- 🐛 fixed `A.prependToAll` (the order of elements was incorrect after calling `prependToAll`)

### `v3.5.0`

- ✨ added `D.update` ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added `D.updateUnsafe` ([@anthony-khong](https://github.com/anthony-khong))
- ✨ added `D.isEmpty`
- ✨ added `D.isNotEmpty`
- ✨ added `A.reduceReverse`
- ✨ added `A.filterMap` (alias: `A.keepMap`)

### `v3.4.1`

- 🐛 fixed `F.makeControlledThrottle`
- 🐛 fixed `F.makeControlledDebounce`

⬆️ The `invoke` method was accepting only one argument.

### `v3.4.0`

- 🐛 fixed the internal implementation for comparing objects ([#10](https://github.com/mobily/ts-belt/issues/10))
- ✨ added `D.set` ([@anthony-khong](https://github.com/anthony-khong))

### `v3.3.0`

- ♻️ all tuples are now `readonly`
- 🗑 `D.prop` has been deprecated (please use either `D.get` or `D.getUnsafe`)
- ✨ added `A.flip`
- ✨ added `F.tap`
- ✨ added `F.debounce`
- ✨ added `F.makeControlledDebounce`
- ✨ added `F.throttle`
- ✨ added `F.makeControlledThrottle`

### `v3.2.0`

This version provides much better support for the point-free style. For instance, the following should not throw an error in TypeScript:

```typescript
A.reduce([1, 2, 3], 0, N.add)
A.reduce(['hello', 'world'], '', S.concat)
A.filter(['hello', 'world'], S.startsWith('h'))
```

- ✨ added `O.tap`
- ✨ added `R.tap`
- ✨ added `A.tap`

### `v3.1.1`

- 🐛 fixed arguments order of `A.*WithIndex` → `(index, value)` and `D.*WithKey` → `(key, value)`  functions

### `v3.1.0`

- 🐛 fixed `S.head` return type
- ✨ added `S.trimEnd` ([@Dilven](https://github.com/Dilven))
- ✨ added `S.trimStart` ([@Dilven](https://github.com/Dilven))
- ✨ added `S.last` ([@Dilven](https://github.com/Dilven))

### `v3.0.1`

- 🐛 fixed `A.uniqBy` signature ([#1](https://github.com/mobily/ts-belt/issues/1))

### `v3.0.0`

Initial `v3` implementation.
