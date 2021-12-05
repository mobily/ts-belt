#!/usr/bin/env sh

yarn clean
yarn re:clean
yarn re:build
yarn transform:javascript
yarn transform:types
yarn generate:docs
yarn esbuild
yarn tsc --outDir ./dist/cjs
yarn tsc --outDir ./dist/esm
yarn generate:flow
yarn test
