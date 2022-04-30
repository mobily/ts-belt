---
id: config
title: Configuration
---

### TypeScript

Update the following options in your `tsconfig.json` (highly recommended):

```json
{
  "compilerOptions": {
    …
    "strict": true,
    "strictNullChecks": true,
    "noUncheckedIndexedAccess": true
  }
}
```

Other options you may find useful:

```json
{
  "compilerOptions": {
    …
    "noImplicitAny": true,
    "allowUnreachableCode": false,
    "allowUnusedLabels": false,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```


### ESLint

You may also want to add [`eslint-plugin-functional`](https://github.com/jonaskello/eslint-plugin-functional) to your `ESLint` config. **TS Belt** returns immutable data, so enabling the `functional/prefer-readonly-type` rule is recommended.

```json
{
  "plugins": ["functional"],
  "rules": {
    "functional/prefer-readonly-type": "error"
  }
}
```

### Immutable vs Mutable

`ts-belt` supports immutable arrays by default since it follows the functional programming paradigm. However, starting from `v3.11.0` it also gives you the possibility to control whether to use immutable or mutable arrays.

Therefore, if you want to use mutable arrays by default, add [`global.d.ts`](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-d-ts.html) in your project and add the following:

```ts
declare namespace Belt {
  type UseMutableArrays = 1
}
```

You can also use `F.toMutable` (`v3.11.0`) if you want to quickly coerce a mutable type:

```ts
// let's assume that the `numbers` type is `readonly number[]`
const xs = F.toMutable(number) // now `xs` is `number[]`
```
