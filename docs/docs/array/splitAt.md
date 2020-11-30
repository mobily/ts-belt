---
id: splitAt
title: splitAt
---

It returns `None` when the length of an array is less than `index`, otherwise, split the array at position `index.

```ts
splitAt<T>(index: number, arr: T[]): Option<[T[], T[]]>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ update the array elements below
    A.splitAt(2, [1, 3, 5, 7, 9]),
    O.map(tuple => {
      const [fst, snd] = tuple
      return `fst: ${fst.join(', ')}, snd: ${snd.join(', ')}`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
