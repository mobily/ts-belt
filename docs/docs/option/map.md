---
id: map
title: map
---

It returns a result of `fn` wrapped in `Some` if an `option` argument is in the form of `Some`, otherwise,
returns `None` and `fn` is not called.

```ts
map<T, R>(fn: (value: T) => R, option: Option<T>): Option<R>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    O.fromNullable('hello'),
    O.map(value => {
      return `${value} world!`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
