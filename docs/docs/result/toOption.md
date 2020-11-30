---
id: toOption
title: toOption
---

It returns `Some` if a `result` argument is in the form of `Ok`, otherwise, returns `None`.

```ts
toOption<A, B>(result: Result<A, B>): Option<A>
```

### Example

```jsx live
function() {
  const identity = value => value
  const value = pipe(
    // ⬇️ pass `null` or `undefined` below
    R.fromNullable('this is bad', 'hello'),
    R.toOption,
    O.match(value => `${value} world!`, () => ':('),
  )

  return value
}
```
