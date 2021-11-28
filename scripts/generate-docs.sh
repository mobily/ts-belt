#!/usr/bin/env sh

mkdir -p $PWD/docs/docs/generated
find "$PWD/src" -iname "index.ts" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/tools/codemods/generate-docs.ts --extensions=ts --parser=ts
