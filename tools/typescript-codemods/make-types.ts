import {
  API,
  Identifier,
  TSTypeAnnotation,
  VariableDeclarator,
  TSTypeParameterDeclaration,
  Collection,
  ASTPath,
  ExportNamedDeclaration,
} from 'jscodeshift'

import * as path from 'path'
import * as fs from 'fs'

const defaultEncoding = { encoding: 'utf-8' } as const

const transform = (
  source: string,
  j: API['jscodeshift'],
  ctx: Record<string, any>,
): string => {
  const root = j(source)
  const dirname = path.dirname(ctx.file.path)
  const basename = path.basename(ctx.file.path, '.gen.tsx')
  const genTSXFile = path.resolve(dirname, `${basename}.ts`)
  const bsJSFile = path.resolve(dirname, `${basename}.bs.js`)

  const genTSX: Collection<any> | undefined = fs.existsSync(genTSXFile)
    ? j(fs.readFileSync(genTSXFile, defaultEncoding))
    : undefined

  const bsJS: Collection<any> | undefined = fs.existsSync(bsJSFile)
    ? j(fs.readFileSync(bsJSFile, defaultEncoding))
    : undefined

  const makeDeclareFunction = (
    name: string,
    parameters: any[],
    typeParameters: TSTypeParameterDeclaration,
    returnType: any,
  ) => {
    const declareFunction = j.tsDeclareFunction(j.identifier(name), parameters)

    declareFunction.declare = true
    declareFunction.typeParameters = typeParameters
    declareFunction.returnType = j.tsTypeAnnotation(returnType)

    return declareFunction
  }
  const takeExportIdentifier = (p: ASTPath<ExportNamedDeclaration>) => {
    const { declaration } = p.value

    if (declaration.type === 'VariableDeclaration') {
      const declarator = declaration.declarations[0] as VariableDeclarator
      const identifier = declarator.id as Identifier

      if (identifier.name.endsWith('_')) {
        // @ts-expect-error
        declarator.id.name = declarator.id.name.replace('_', '')
      }

      return identifier
    } else if (
      declaration.type === 'TSDeclareFunction' ||
      declaration.type === 'ClassDeclaration' ||
      declaration.type === 'TSTypeAliasDeclaration'
    ) {
      return declaration.id
    }

    throw new Error('Unexpected identifier')
  }

  const findComments = (id: string) => {
    let comments = undefined

    bsJS
      ?.find(j.FunctionDeclaration)
      .filter(p => {
        return (
          p.parent.value.type === 'Program' &&
          (p.value.id.name === id ||
            p.value.id.name === `${id}_` ||
            p.value.id.name === `_${id}` ||
            p.value.id.name === `_${id}_`) &&
          p.value.comments?.length > 0
        )
      })
      .forEach(p => {
        comments = p.value.comments
      })

    if (!comments) {
      bsJS
        ?.find(j.VariableDeclaration)
        .filter(p => {
          const [declarator] = p.value.declarations
          return (
            p.parent.value.type === 'Program' &&
            declarator.type === 'VariableDeclarator' &&
            declarator.id.type === 'Identifier' &&
            (declarator.id.name === id || declarator.id.name === `_${id}`) &&
            p.value.comments?.length > 0
          )
        })
        .forEach(p => {
          comments = p.value.comments
        })
    }

    return comments
  }

  root
    .find(j.ExportNamedDeclaration, {
      declaration: {
        type: 'VariableDeclaration',
      },
    })
    .replaceWith(p => {
      const identifier = takeExportIdentifier(p)

      let genTSXTypeAnnotation = undefined

      genTSX
        ?.find(j.VariableDeclarator, {
          id: {
            name: identifier.name,
          },
        })
        .forEach(p => {
          ctx.alreadyAddedExports.push(identifier.name)
          // @ts-expect-error
          genTSXTypeAnnotation = p.value.id.typeAnnotation?.typeAnnotation
        })

      const typeAnnotation =
        genTSXTypeAnnotation ??
        (identifier.typeAnnotation?.typeAnnotation as
          | TSTypeAnnotation
          | undefined)

      if (typeAnnotation) {
        const signatures = []
        const {
          typeParameters,
          parameters = [],
          typeAnnotation: returnType,
        } = typeAnnotation
        const comments = findComments(identifier.name)

        let hasSameParamsType = false

        const original = j.exportNamedDeclaration(
          makeDeclareFunction(
            identifier.name,
            parameters,
            typeParameters,
            returnType.typeAnnotation,
          ),
        )

        signatures.push(original)

        if (parameters.length > 1) {
          const firstParam = parameters.slice(0, 1)
          const otherParams = parameters.slice(1)
          const returnFunction = j.tsFunctionType(firstParam)

          returnFunction.typeAnnotation = returnType

          const dataLastAnnotation = j.exportNamedDeclaration(
            makeDeclareFunction(
              identifier.name,
              otherParams,
              typeParameters,
              returnFunction,
            ),
          )

          hasSameParamsType = parameters.every(param => {
            const fst = parameters[0]?.typeAnnotation?.typeAnnotation
            const annotation = param?.typeAnnotation?.typeAnnotation

            if (
              fst?.type === 'TSTypeReference' &&
              annotation?.type === 'TSTypeReference'
            ) {
              return fst.typeName.name === annotation.typeName.name
            }

            return fst?.type === annotation?.type
          })

          signatures.push(dataLastAnnotation)
        }

        if (hasSameParamsType) {
          const [fst, snd] = signatures
          signatures.length = 0
          signatures.push(snd, fst)
        }

        if (comments) {
          signatures[0].comments = comments
        }

        return signatures
      }

      throw new Error('Something went wrong…')
    })

  const recreatedRoot = j(root.toSource())

  genTSX
    ?.find(j.ExportNamedDeclaration)
    .filter(p => {
      const identifier = takeExportIdentifier(p)
      return !ctx.alreadyAddedExports.includes(identifier.name)
    })
    .forEach(p => {
      ctx.currentExports.push(p.value)
    })

  recreatedRoot
    .find(j.ExportNamedDeclaration, {
      declaration: {
        type: 'TSDeclareFunction',
      },
    })
    .forEach(p => {
      ctx.currentExports.push(p.value)
    })

  return recreatedRoot.toSource()
}

export default transform
