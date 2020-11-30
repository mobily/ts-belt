---
id: take
title: take
---

It returns `None` if an array has fewer than `n` elements, otherwise, returns a new array with the first `n` elements.

```ts
take<T>(n: number, arr: T[]): Option<T[]>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ update the first two elements in the array below
    A.take(2, [1, 3, 5]),
    O.map(arr => {
      return `array: ${arr.join(', ')}`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
