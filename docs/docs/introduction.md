---
id: introduction
title: Introduction
slug: /
---

### Motivation

I have to say this, I like [ReScript](https://rescript-lang.org/), its features and tooling provide a great developer experience. I wish it was my main tool on a daily basis work, however… it isn't, since most of the commercial projects I have been working on recently are built with TypeScript, which at this point is fully understandable from the business perspective (basically you can find more devs who are familiar with TypeScript ¯\\\_(ツ)\_/¯).

I like the functional programming. I follow FP principles in almost every project. Therefore, in the past few years I was able to test and use some JavaScript/TypeScript libraries that follow those principles.

:::info

Disclaimer: these are my private opinions and feelings about libraries I used to use on a daily basis work, and obviously, you can disagree with them and I fully understand this! 😊

:::

#### Ramda ⬇️

**Pros:**
`Ramda` is a mature project, it contains tons of utility functions, and great, much detailed documentation.

**Cons:**
Using the `pipe` function feels unnatural (for example: `pipe(fn1, fn2)(value)`), TypeScript support is neglected (the type inference simply doesn’t work well) and the `data-last` approach makes code less readable.

**Comment:**
Since Ramda doesn't play well with TypeScript, I found it useful only in JavaScript based projects.

#### Rambda ⬇️

**Pros:**
`Rambda` is super fast and I really mean it, it’s difficult (but not impossible) to beat `rambda` in terms of the overall performance!

**Cons:**
Pretty much similar problems as you can find in `ramda`.

#### Remeda ⬇️

**Pros:**
`Remeda` provides the `data-first` approach, which is more natural and developer friendly, `remeda` has a nice documentation and TypeScript support is great as well.

**Cons:**
According to the benchmark results, `remeda` is the slowest compared to other libraries (benchmarks can be found [here](/benchmarks/introduction)). Due to the lazy evaluation, it’s also unclear how to use some utility functions within the pipeline.

**Comment:**
It's been my first choice for a long time, until…

#### TS Belt ⬇️

Until I have decided to build `ts-belt`. It combines all of the good things you can find in other similar libraries: the developer friendly `data-first` approach, good looking and detailed documentation, great TypeScript support, and last but not least, it's as fast as `rambda` (actually, it's even faster 🙊). Under the hood it uses ReScript and `Belt` stdlib. The ReScript compiler generates highly performant JS code, and with [`genType`](https://rescript-lang.org/docs/gentype/latest/introduction) it automatically generates TypeScript signatures. **TS Belt** is also easily extendable because most of the build process is done automatically.

### Features

- 🚀 built in `ReScript`, which generates highly performant JavaScript code (see the benchmark results [here](/benchmarks/introduction))
- 👀 provide more readable code, due to the `data-first` approach
- ✨ support for `TypeScript` and `Flow`
- 🛡 write safer code with `Option` and `Result` types
- 🎯 all functions return immutable data (no side-effects)
- 🌲 tree-shakeable
- 📝 fully documented
