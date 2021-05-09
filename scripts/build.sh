#!/usr/bin/env sh

yarn re:clean
yarn re:build
yarn clean
yarn esbuild
yarn tsc
yarn generate:flow
yarn test
