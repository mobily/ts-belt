#!/usr/bin/env sh

yarn clean
yarn re:clean
yarn re:build
yarn transform:js
yarn generate:ts
yarn esbuild
yarn tsc
# yarn generate:flow
# yarn test
