#!/usr/bin/env sh

find "$PWD/src" -iname "*.bs.js" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/codemods/make-data-first.ts
find "$PWD/src" -iname "*.bs.js" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/codemods/uncurry-rescript-functions.ts
find "$PWD/src" -iname "*.bs.js" -print | xargs node node_modules/.bin/jscodeshift -t $PWD/codemods/rename-identifiers.ts
