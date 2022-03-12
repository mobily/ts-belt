<p align="center">
  <img src="https://raw.githubusercontent.com/mobily/ts-belt/master/assets/ts-belt-frame.png" width="480">
</p>

<p align="center">
  <a href="https://app.circleci.com/pipelines/github/mobily/ts-belt">
    <img src="https://img.shields.io/circleci/build/github/mobily/ts-belt.svg?style=flat-square&amp;logo=circleci" alt="Build Status">
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
    <img src="https://img.shields.io/badge/all_contributors-11-orange.svg?style=flat-square" alt="All Contributors">
  </a>
  <a href="https://github.com/mobily/ts-belt/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="GitHub license">
  </a>
</p>

<p align="center">
  <strong>Fast, modern, and practical utility library for FP in TypeScript.</strong>
</p>

## Documentation

Full documentation can be found [here](https://mobily.github.io/ts-belt/).

## Features

- 🚀 built with `ReScript`, which generates highly performant JavaScript code (see the benchmark results [here](https://mobily.github.io/ts-belt/benchmarks/introduction))
- 👀 provides more readable code, due to the `data-first` approach
- ✨ supports `TypeScript` and `Flow`
- 🛡 helps you write safer code with `Option` and `Result` types
- 🎯 all functions return immutable data (no side-effects)
- 🌲 tree-shakeable
- 📝 fully documented

## Getting started

### Installation

```shell
yarn add @mobily/ts-belt
```

or with `npm`

```shell
npm install @mobily/ts-belt --save
```

### Usage

| Module | Namespace | Description |
|--|-----------|--|
| [Array](https://mobily.github.io/ts-belt/api/array) | A | Utility functions for `Array`. |
| [Boolean](https://mobily.github.io/ts-belt/api/boolean) | B | Utility functions for `Boolean`. |
| [Number](https://mobily.github.io/ts-belt/api/number) | N | Utility functions for `Number`. |
| [Object (Dict)](https://mobily.github.io/ts-belt/api/object) | D | Utility functions for `Object`. |
| [String](https://mobily.github.io/ts-belt/api/string) | S | Utility functions for `String`. |
| [Guards](https://mobily.github.io/ts-belt/api/guards) | G | Various TypeScript guards. |
| [Option](https://mobily.github.io/ts-belt/api/option) | O | Functions for handling the `Option` data type that represents the existence and nonexistence of a value. |
| [Result](https://mobily.github.io/ts-belt/api/result) | R | Functions for describing the result of a certain operation without relying on exceptions. |
| [Function](https://mobily.github.io/ts-belt/api/function) | F | Other useful functions. |

```typescript
import { A, O, N, pipe } from '@mobily/ts-belt'

pipe(
  [1, 2, 3, 4, 5], // → [1, 2, 3, 4, 5]
  A.dropExactly(2), // → Some([3, 4, 5])
  O.flatMap(A.head), // → Some(3)
  O.map(N.multiply(10)), // → Some(30)
  O.getWithDefault(0), // → 30
) // → 30
```


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/__marcin_"><img src="https://avatars1.githubusercontent.com/u/1467712?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcin Dziewulski</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=mobily" title="Code">💻</a> <a href="https://github.com/mobily/ts-belt/commits?author=mobily" title="Documentation">📖</a> <a href="https://github.com/mobily/ts-belt/commits?author=mobily" title="Tests">⚠️</a> <a href="#design-mobily" title="Design">🎨</a> <a href="#maintenance-mobily" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://github.com/foull"><img src="https://avatars.githubusercontent.com/u/902819?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Krzysztof Lenda</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=foull" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/panr"><img src="https://avatars.githubusercontent.com/u/1303365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Radek Kozieł</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=panr" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Fortidude"><img src="https://avatars.githubusercontent.com/u/8781462?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Artur</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=Fortidude" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/domeknn"><img src="https://avatars.githubusercontent.com/u/9402280?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dominik Łopaciński</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=domeknn" title="Code">💻</a> <a href="https://github.com/mobily/ts-belt/commits?author=domeknn" title="Documentation">📖</a> <a href="https://github.com/mobily/ts-belt/commits?author=domeknn" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/Eghizio"><img src="https://avatars.githubusercontent.com/u/32049761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jakub Wąsik</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=Eghizio" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Dilven"><img src="https://avatars.githubusercontent.com/u/26671751?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Krystian Mateusiak</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=Dilven" title="Code">💻</a> <a href="https://github.com/mobily/ts-belt/commits?author=Dilven" title="Documentation">📖</a> <a href="https://github.com/mobily/ts-belt/commits?author=Dilven" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://typeofweb.com/"><img src="https://avatars.githubusercontent.com/u/1338731?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michał Miszczyszyn</b></sub></a><br /><a href="#ideas-mmiszy" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/remnantkevin"><img src="https://avatars.githubusercontent.com/u/8270635?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=remnantkevin" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/anthony-khong"><img src="https://avatars.githubusercontent.com/u/12151757?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anthony Khong</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=anthony-khong" title="Code">💻</a> <a href="https://github.com/mobily/ts-belt/commits?author=anthony-khong" title="Documentation">📖</a> <a href="https://github.com/mobily/ts-belt/commits?author=anthony-khong" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://pyrolistical.github.com/"><img src="https://avatars.githubusercontent.com/u/463642?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pyrolistical</b></sub></a><br /><a href="https://github.com/mobily/ts-belt/commits?author=Pyrolistical" title="Documentation">📖</a> <a href="#maintenance-Pyrolistical" title="Maintenance">🚧</a> <a href="#ideas-Pyrolistical" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://zoontek.me/"><img src="https://avatars.githubusercontent.com/u/1902323?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mathieu Acthernoene</b></sub></a><br /><a href="#ideas-zoontek" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The MIT License.

See [LICENSE](LICENSE)
