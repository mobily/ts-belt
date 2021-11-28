<p align="center">
  <img src="https://raw.githubusercontent.com/mobily/ts-belt/master/assets/ts-belt-frame.png" width="480">
</p>

<p align="center">
  <a href="https://travis-ci.com/mobily/ts-belt">
    <img src="https://img.shields.io/travis/com/mobily/ts-belt.svg?style=flat-square&amp;logo=travis" alt="Build Status">
  </a>
  <a href="https://coveralls.io/github/mobily/ts-belt?branch=master">
    <img src="https://img.shields.io/coveralls/github/mobily/ts-belt.svg?style=flat-square&amp;logo=coveralls" alt="Coverage">
  </a>
  <a href="https://www.npmjs.com/package/@mobily/ts-belt">
    <img src="https://img.shields.io/npm/v/@mobily/ts-belt.svg?style=flat-square&amp;logo=npm" alt="npm">
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="#contributors">
    <img src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square" alt="All Contributors">
  </a>
  <a href="https://github.com/mobily/ts-belt/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="GitHub license">
  </a>
</p>

<p align="center">
  <strong>Belt (<code>ReScript</code>) implementation in TypeScript.</strong>
</p>

## Motivation

I pretty much like ReScript, its features, tooling are great developer experience (as well as `Belt` stdlib). I wish it was my main tool on a daily basis work. Unfortunately it isn't, since most of the commercial projects I have been working on recently are built with TypeScript, which at this point is fully understandable from the business perspective.

## Features

- better type inference because of the `data-first` implementation
- built on top of ReScript (interesting combination, isn't it?), which automatically generates most of TS signatures and performant JS code

- benchmark results are various, but in general `ts-belt` always takes either the first or second place (remeda/rambda/ramda/lodash-fp), and especially comparing to `remeda`, which also follows the `data-first` approach, `ts-belt` is much faster, you can find the benchmarks results here
- `ts-belt` provides `Option` and `Result` implementation instead of `null` and `undefined` (get rid of them in your project!)
- high tests coverage
- lightweight, no external dependencies
- tree-shakeable
- fully documented

- [lightweight](https://bundlephobia.com/result?p=@mobily/ts-belt), no dependencies
- type safety, full TypeScript support
- high tests coverage
- all functions are [curried](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983)
- get rid of `undefined` and `null` values in your project in a convenient, functional way (use either `Option` or `Result`)

## Installation

```shell
yarn add @mobily/ts-belt
```

or with `npm`

```shell
npm install @mobily/ts-belt --save
```

## Api Reference

Full documentation can be found [here](https://mobily.github.io/ts-belt/).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4" width="100px;" alt="Marcin Dziewulski"/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/ts-belt/commits?author=mobily" title="Documentation">📖</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
