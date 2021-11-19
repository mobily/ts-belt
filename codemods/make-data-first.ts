import { API, FileInfo, FunctionDeclaration } from 'jscodeshift'

import * as path from 'path'
import * as fs from 'fs'

const transformer = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const root = j(file.source)
  const exportedFunctions = []
  const isImportNeeded = {
    current: false,
  }
  const dataFirstIdentifier = j.identifier('t')

  const readExternalFunction = (
    module: string,
    functionName: string,
  ): FunctionDeclaration | undefined => {
    const beltModule = {
      current: undefined,
    }
    const beltFunction = {
      current: undefined,
    }
    root
      .find(j.ImportDeclaration)
      .filter(p => {
        const importValue = p.value.source.value

        if (typeof importValue === 'string') {
          return importValue.toLowerCase().includes(module.toLowerCase())
        }

        return false
      })
      .forEach(p => {
        beltModule.current = p.value.source.value as string
      })

    if (beltModule.current) {
      const belt = j(
        fs.readFileSync(path.resolve(__dirname, '..', 'node_modules', beltModule.current), {
          encoding: 'utf-8',
        }),
      )

      belt
        .find(j.FunctionDeclaration, {
          id: {
            name: functionName,
          },
        })
        .forEach(p => {
          beltFunction.current = p.value
        })

      return beltFunction.current
    }
  }

  root.find(j.ExportNamedDeclaration).forEach(p => {
    p.value.specifiers.forEach(exportSpecifier => {
      exportedFunctions.push(exportSpecifier.local.name)
    })
  })

  root
    .find(j.FunctionDeclaration)
    .filter(p => {
      return exportedFunctions.includes(p.value.id.name)
    })
    .replaceWith(p => {
      if (p.value.params.length > 1) {
        const id = `_${p.value.id.name}`
        const dataFirst = j.functionDeclaration(
          j.identifier(p.value.id.name),
          [],
          j.blockStatement([
            j.returnStatement(
              j.callExpression(dataFirstIdentifier, [j.identifier(id), j.identifier('arguments')]),
            ),
          ]),
        )

        isImportNeeded.current = true
        p.value.id.name = id

        return [p.value, dataFirst]
      }

      return p.value
    })

  root
    .find(j.VariableDeclaration)
    .filter(p => {
      const declarator = p.value.declarations[0]

      if (declarator.type === 'VariableDeclarator' && declarator.id.type === 'Identifier') {
        return exportedFunctions.includes(declarator.id.name)
      }

      return false
    })
    .replaceWith(p => {
      const declarator = p.value.declarations[0]

      const memberExpression =
        declarator.type === 'VariableDeclarator' &&
        declarator.id.type === 'Identifier' &&
        declarator.init

      if (
        declarator.type === 'VariableDeclarator' &&
        declarator.id.type === 'Identifier' &&
        memberExpression.type === 'MemberExpression' &&
        memberExpression.object.type === 'Identifier' &&
        memberExpression.property.type === 'Identifier'
      ) {
        const beltFunction = readExternalFunction(
          memberExpression.object.name,
          memberExpression.property.name,
        )

        if (beltFunction.params.length > 1) {
          const id = `_${declarator.id.name}`
          const dataFirst = j.functionDeclaration(
            j.identifier(declarator.id.name),
            [],
            j.blockStatement([
              j.returnStatement(
                j.callExpression(dataFirstIdentifier, [
                  j.identifier(id),
                  j.identifier('arguments'),
                ]),
              ),
            ]),
          )

          isImportNeeded.current = true
          declarator.id.name = id

          return [p.value, dataFirst]
        }
      }

      return p.value
    })

  root
    .find(j.Program)
    .filter(_p => {
      return isImportNeeded.current
    })
    .forEach(p => {
      p.value.body = [
        j.importDeclaration([j.importSpecifier(dataFirstIdentifier)], j.literal('../utils.js')),
        ...p.value.body,
      ]
    })

  return root.toSource()
}

export default transformer
