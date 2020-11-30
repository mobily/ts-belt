---
id: flatMap
title: flatMap
---

It returns a result of `fn` (it must have a return type of `Option`) if an `option` argument is in the form of `Some`, otherwise, returns `None`.

```ts
flatMap<T, R>(fn: (value: T) => Option<R>, option: Option<T>): Option<R>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ remove the exclamation mark below
    O.fromNullable('world!'),
    O.flatMap(value => {
      return value.includes('!') ? O.Some(`hello ${value}`) : O.None
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
