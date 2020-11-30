---
id: getBy
title: getBy
---

It returns `None` if no element satisfies a predicate function, otherwise, returns the first value wrapped in `Some`, which satisfies `predicate`.

```ts
getBy<T>(predicate: (value: T, index: number) => boolean, arr: T[]): Option<T>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ update the predicate function below
    A.getBy(str => str.length === 2, ['A', 'AB', 'BC']),
    O.map(value => {
      return `${value}CDE`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
