---
id: fromNullable
title: fromNullable
---

It returns `Error` if a value is either `null` or `undefined`, otherwise, returns that value wrapped in `Ok`.

```ts
fromNullable<A, B>(error: B, value: A | null | undefined): Result<A, B>
```

### Example

```jsx live
function() {
  const error = new Error(':(')
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    R.fromNullable(error, 'hello'),
    R.match(value => `${value} world!`, err => err.message),
  )

  return value
}
```
