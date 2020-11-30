---
id: fromPredicate
title: fromPredicate
---

It returns `None` if the predicate function returns `false`, otherwise, returns a value wrapped in `Some`.

```ts
fromPredicate<T>(predicate: (value: T) => boolean, value: T): Option<T>
```

### Example

```jsx live
function() {
  const hasExclamationMark = str => str.includes('!')
  const value = pipe(
    // ⬇️ remove the exclamation mark below
    O.fromPredicate(hasExclamationMark, 'hello world!'),
    O.getWithDefault('default value'),
  )

  return value
}
```
