---
id: match
title: match
---

It returns a result of `someFn` if an `option` argument is in the form of `Some`, otherwise, returns a result of `noneFn`.

```ts
match<T, R>(someFn: (value: T) => R, noneFn: () => R, option: Option<T>): R
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    O.fromNullable('hello'),
    O.match(value => `${value} world!`, () => ':('),
  )

  return value
}
```
