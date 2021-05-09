#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const globby = require('globby')

const { promisify } = require('util')
const { compiler, beautify } = require('flowgen')
const { pipe, fromPromise, switchMap, forEach } = require('wonka')

const cwd = process.cwd()
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

const pathToRoot = (...args) => path.resolve(__dirname, '..', ...args)
const pathToDist = (...args) => pathToRoot('dist', ...args)
const entry = pathToRoot('index.js.flow')
const defaultEncoding = { encoding: 'utf8' }

pipe(
  fromPromise(readFile(entry, defaultEncoding)),
  switchMap(entry => {
    const content = entry.replace(/.\/dist\//g, './')
    return fromPromise(
      Promise.all([
        writeFile(pathToDist('index.js.flow'), content, defaultEncoding),
        writeFile(pathToDist('index.mjs.flow'), content, defaultEncoding),
      ]),
    )
  }),
  switchMap(_ => {
    return fromPromise(globby('dist/types/**/*.d.ts'))
  }),
  switchMap(input => {
    console.log(`Compiling ${input.length} TS definitions to Flow…`)

    const defs = input.map(filename => {
      const fullpath = pathToRoot(filename)
      const flowdef = beautify(compiler.compileDefinitionFile(fullpath))
      const basename = path.basename(fullpath, '.d.ts')
      const filepath = path.dirname(fullpath)
      const definition = flowdef.replace(/import\s/g, 'import type ')

      return writeFile(
        path.join(filepath, `${basename}.js.flow`),
        ['// @flow', definition].join('\n\n'),
        defaultEncoding,
      )
    })

    return fromPromise(Promise.all(defs))
  }),
  forEach(_ => {
    process.exit(0)
  }),
)
