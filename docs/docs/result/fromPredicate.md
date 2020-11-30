---
id: fromPredicate
title: fromPredicate
---

It returns `Error` if the predicate function returns `false`, otherwise, returns a value wrapped in `Ok`.

```ts
fromPredicate<A, B>(predicate: (value: A) => boolean, error: B, value: A): Result<A, B>
```

### Example

```jsx live
function() {
  const hasExclamationMark = str => str.includes('!')
  const value = pipe(
    // ⬇️ remove the exclamation mark below
    R.fromPredicate(hasExclamationMark, 'this is bad', 'world!'),
    R.match(value => `hello ${value}`, err => err),
  )

  return value
}
```
