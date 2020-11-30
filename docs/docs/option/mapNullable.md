---
id: mapNullable
title: mapNullable
---

It returns `None` if a result of `fn` is `null` or `undefined`, otherwise, returns a result of `fn` wrapped in `Some`.

```ts
mapNullable<T, R>(fn: (value: T) => R | null | undefined, option: Option<T>): Option<R>
```

### Example

```jsx live
function() {
  const value = pipe(
    // ⬇️ remove a property below
    O.fromNullable({ prop: 'hello' }),
    O.mapNullable(obj => {
      return obj.prop && `${obj.prop} world!`
    }),
    O.getWithDefault('default value'),
  )

  return value
}
```
