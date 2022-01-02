---
id: config
title: TypeScript and ESLint configs
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
