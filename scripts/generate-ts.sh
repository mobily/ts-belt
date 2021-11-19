#!/usr/bin/env sh

find "$PWD/src" -iname "*.gen.tsx" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/codemods/rewrite-typescript-signatures.ts --extensions=ts --parser=ts
yarn prettier --write $PWD/src/**/index.ts
