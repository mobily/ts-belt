---
id: drop
title: drop
---

It returns `None` if an array has fewer than `n` elements, otherwise returns a new array dropping the first `n` elements.

```ts
drop<T>(n: number, arr: T[]): Option<T[]>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ update the array below
    A.drop(3, [1, 3, 5, 7, 9, 11]),
    O.map(arr => {
      return `array: ${arr.join(', ')}`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
