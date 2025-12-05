---
id: introduction
title: Introduction
---

### Competitors

| Library | Version |
|--|---------|
| [ramda](https://github.com/ramda/ramda) | `v0.27.1` |
| [rambda](https://github.com/selfrefactor/rambda) | `v6.9.0` |
| [remeda](https://github.com/remeda/remeda) | `v0.0.32` |
| [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) | `v4.17.21` |
| [@mobily/ts-belt](https://github.com/mobily/ts-belt) | `v3.0.0` |

### How to run benchmarks?

Clone the repo:

```bash
git clone https://github.com/mobily/ts-belt.git
```

Install all dependencies and build `ts-belt`:

```bash
bun
bun build dist -t
```

Go to the `benchmarks` directory and install all dependencies as well:

```bash
cd ./benchmarks
bun
```

Then, run the following command in order to run benchmark suites:

```bash
bun start
# or
bun generate # if you want to generate a markdown file
```

:::info

Both commands generate a new results file, which is saved in the `benchmarks/.results` directory. Don't hesitate to send the results file to me! 😊 (DM me on [Twitter](https://twitter.com/__marcin_) to get more details)

:::
