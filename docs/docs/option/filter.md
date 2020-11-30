---
id: filter
title: filter
---

It returns a value wrapped in `Some` if an `option` argument is in the form of `Some` and a result of `fn` is truthy, otherwise, it returns `None`.

```ts
filter<T>(predicate: (value: T) => boolean, option: Option<T>): Option<T>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ remove the exclamation mark below
    O.fromNullable('hello world!'),
    O.filter(str => {
      return str.includes('!')
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
