---
id: introduction
title: Introduction
---

### Competitors

| Library | Version |
|--|---------|
| ramda | `v0.27.1` |
| rambda | `v6.9.0` |
| remeda | `v0.0.32` |
| lodash/fp | `v4.17.21` |
| @mobily/ts-belt | `v3.0.0` |

### How to run benchmarks?

Clone the repo:

```bash
git clone https://github.com/mobily/ts-belt.git
```

Install all dependencies and build `ts-belt`:

```bash
yarn
yarn build
```

Go to the `benchmarks` directory and install all dependencies as well:

```bash
cd ./benchmarks
yarn
```

Then, run the following command in order to run benchmark suites:

```bash
yarn start
# or
yarn generate # in order to generate a markdown file
```

:::info

All results are saved to file in the `benchmarks/.results` directory. Don't hesitate to send the results file to me! 😊 (DM me on [Twitter](https://twitter.com/__marcin_) to get more details)

:::
