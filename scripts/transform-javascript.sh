#!/usr/bin/env sh

find "$PWD/src" -iname "*.bs.js" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/tools/codemods/make-data-first.ts
find "$PWD/src" -iname "*.bs.js" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/tools/codemods/uncurry-functions.ts
find "$PWD/src" -iname "*.bs.js" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/tools/codemods/rename-identifiers.ts
