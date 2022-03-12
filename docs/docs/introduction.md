---
id: introduction
title: Introduction
slug: /
---

### Motivation

I have to say it: I like [ReScript](https://rescript-lang.org/). Its features and tooling provide a great developer experience. I wish it was my main tool at work, however…it isn't, since most of the commercial projects I have worked on recently have been built with TypeScript. This is fully understandable from a business perspective because it is easier to find developers who are familiar with TypeScript ¯\\\_(ツ)\_/¯.

I like the functional programming (FP) paradigm, and I follow FP principles in almost every project I work on. Therefore, in the past few years I have been able to test and use some JavaScript/TypeScript libraries that follow these principles.

:::info

Below are my opinions and thoughts on FP libraries that I have previously used on a daily basis at work, and I fully understand if you disagree with them.

:::

#### Ramda ⬇️

**Pros:**
`Ramda` is a mature project, it contains tons of utility functions, and has great, detailed documentation.

**Cons:**
Using the `pipe` function feels unnatural (for example: `pipe(fn1, fn2)(value)`), TypeScript support is neglected (the type inference simply doesn’t work well), and the `data-last` approach makes code less readable.

**Comment:**
Since `Ramda` doesn't play well with TypeScript, I only found it useful in JavaScript-based projects.

#### Rambda ⬇️

**Pros:**
`Rambda` is super fast, and I really mean it: it’s difficult (but not impossible) to beat `rambda` in terms of overall performance!

**Cons:**
Similar problems to `ramda`.

#### Remeda ⬇️

**Pros:**
`Remeda` provides a `data-first` approach, which is more natural and developer friendly. `remeda` has good documentation, and its TypeScript support is great.

**Cons:**
According to my [benchmark results](/benchmarks/introduction), `remeda` is the slowest compared to the other libraries. Its use of lazy evaluation also makes it unclear how to use some utility functions within a pipeline.

**Comment:**
It's been my first choice for a long time.

#### TS Belt ⬇️

Until…I decided to build `ts-belt`. `ts-belt` combines all of the good things you can find in other similar libraries: the developer friendly `data-first` approach, good documentation, great TypeScript support, and last but not least, it's as fast as `rambda` (actually, it's even faster 🙊). Under the hood it uses ReScript and the `Belt` standard library. The ReScript compiler generates highly performant JavaScript code, and with [`genType`](https://rescript-lang.org/docs/gentype/latest/introduction) it automatically generates TypeScript signatures. `ts-belt` is also easily extendable because most of the build process is done automatically.

### Features

- 🚀 built with ReScript, which generates highly performant JavaScript code (see [benchmark results](/benchmarks/introduction))
- 👀 provides more readable code, due to the `data-first` approach
- ✨ supports `TypeScript` and `Flow`
- 🛡 helps you write safer code with `Option` and `Result` types
- 🎯 all functions return immutable data (no side-effects)
- 🌲 tree-shakeable
- 📝 fully documented
