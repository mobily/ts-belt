import { API, FileInfo } from 'jscodeshift'

import * as path from 'path'
import * as fs from 'fs'

import tuples from './make-readonly-tuples'
import readonlyArray from './make-readonly-array'
import types from './make-types'
import rescript from './remove-rescript-types'
import option from './make-option'
import generics from './rename-generics'

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const dirname = path.dirname(file.path)
  const basename = path.basename(file.path, '.gen.tsx')
  const ctx = {
    file,
    currentExports: [],
  }
  const source = [
    rescript,
    tuples,
    readonlyArray,
    generics,
    option,
    types,
  ].reduce((acc, fn) => {
    return fn(acc, j, ctx)
  }, file.source)

  const root = j(source)

  const addImport = (name: string, path?: string) => {
    if (name === basename) {
      return
    }

    let hasType = false

    root
      .find(j.TSTypeReference, {
        typeName: {
          name,
        },
      })
      .forEach(_p => {
        hasType = true
      })

    if (hasType) {
      return j.importDeclaration(
        [j.importSpecifier(j.identifier(name))],
        j.literal(path ?? `../${name}`),
      )
    }
  }

  fs.writeFileSync(
    path.resolve(dirname, 'index.ts'),
    root
      .find(j.Program)
      .replaceWith(_p => {
        return j.program(
          [
            addImport('Option'),
            addImport('Result'),
            addImport('ExtractValue', '../types'),
            addImport('ExtractNested', '../types'),
            addImport('GuardValue', '../types'),
            addImport('GuardObject', '../types'),
            addImport('GuardPromise', '../types'),
            addImport('GuardArray', '../types'),
            ...ctx.currentExports,
          ].filter(Boolean),
        )
      })
      .toSource(),
    { encoding: 'utf-8' },
  )

  return root.toSource()
}

export default transform
