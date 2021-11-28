#!/usr/bin/env sh

yarn clean
yarn re:clean
yarn re:build
yarn transform:javascript
yarn transform:types
yarn generate:docs
yarn esbuild
yarn tsc
# yarn generate:flow
# yarn test
