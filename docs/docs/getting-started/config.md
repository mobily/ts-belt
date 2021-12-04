---
id: config
title: TS and ESLint config
---

### TypeScript

Update `strictNullChecks` and `strict` in your `tsconfig.json` (optional but recommended):

```json
{
  "compilerOptions": {
    …
    "strict": true,
    "strictNullChecks": true
  }
}
```

### ESLint

You may also want to add [`eslint-plugin-functional`](https://github.com/jonaskello/eslint-plugin-functional) to your `ESLint` config. **TS Belt** returns immutable data, so enabling the `functional/prefer-readonly-type` rule is highly recommended.

```json
{
  "plugins": ["functional"],
  "rules": {
    "functional/prefer-readonly-type": "error"
  }
}
```
