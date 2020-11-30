---
id: tail
title: tail
---

It returns `None` if an array is empty, otherwise, returns everything except the first element.


```ts
tail<T>(arr: T[]): Option<T[]>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ remove all elements in the array below
    A.tail([1, 3, 5]),
    O.map(arr => {
      return `array: ${arr.join(', ')}`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
