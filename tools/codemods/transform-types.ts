import {
  API,
  FileInfo,
  Identifier,
  TSTypeAnnotation,
  VariableDeclarator,
  TSTypeParameterDeclaration,
  Collection,
  TSTypeReference,
  ASTPath,
  ExportNamedDeclaration,
} from 'jscodeshift'

import * as path from 'path'
import * as fs from 'fs'

const transformer = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const root = j(file.source)
  const dirname = path.dirname(file.path)
  const basename = path.basename(file.path, '.gen.tsx')
  const tsFilePath = path.resolve(dirname, `${basename}.ts`)
  const jsFilePath = path.resolve(dirname, `${basename}.bs.js`)

  const tsRoot = {
    current: undefined as Collection<any> | undefined,
  }
  const jsRoot = {
    current: undefined as Collection<any> | undefined,
  }
  const alreadyAddedExports = []
  const generics = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

  if (fs.existsSync(tsFilePath)) {
    tsRoot.current = j(fs.readFileSync(tsFilePath, { encoding: 'utf-8' }))
  }

  if (fs.existsSync(jsFilePath)) {
    jsRoot.current = j(fs.readFileSync(jsFilePath, { encoding: 'utf-8' }))
  }

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
    const comments = {
      current: undefined,
    }

    jsRoot.current
      ?.find(j.FunctionDeclaration)
      .filter(p => {
        return (
          p.parent.value.type === 'Program' &&
          (p.value.id.name === id ||
            p.value.id.name === `_${id}` ||
            p.value.id.name === `_${id}_`) &&
          p.value.comments?.length > 0
        )
      })
      .forEach(p => {
        comments.current = p.value.comments
      })

    if (!comments.current) {
      jsRoot.current
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
          comments.current = p.value.comments
        })
    }

    return comments.current
  }

  // update T[] to ReadonlyArray<T>
  root.find(j.TSArrayType).replaceWith(p => {
    const elementType = p.value.elementType as TSTypeReference

    if (elementType) {
      return j.tsTypeReference(
        j.identifier('ReadonlyArray'),
        j.tsTypeParameterInstantiation([elementType]),
      )
    }

    return p.value
  })

  // rename generics, T1/T2/T3 to A/B/C
  root
    .find(j.Identifier)
    .filter(p => {
      return /^T[0-9]$/.test(p.value.name)
    })
    .replaceWith(p => {
      const [, index] = p.value.name.split('')
      return j.identifier(generics[parseInt(index, 10) - 1])
    })

  // rename Js_re_t to RegExp
  root
    .find(j.Identifier, {
      name: 'Js_re_t',
    })
    .replaceWith(_p => {
      return j.identifier('RegExp')
    })

  // update null | undefined | T to Option<T>
  root
    .find(j.TSUnionType)
    .filter(p => {
      return (
        p.value.types.some(value => value.type === 'TSNullKeyword') &&
        p.value.types.some(value => value.type === 'TSUndefinedKeyword')
      )
    })
    .replaceWith(p => {
      const typeReference = p.value.types.find(
        value =>
          value.type !== 'TSUndefinedKeyword' && value.type !== 'TSNullKeyword',
      )

      if (typeReference) {
        return j.tsTypeReference(
          j.identifier('Option'),
          j.tsTypeParameterInstantiation([typeReference]),
        )
      }

      return p.value
    })

  // update Js_undefined<T> to T | undefined
  root
    .find(j.TSTypeReference, {
      typeName: {
        name: 'Js_undefined',
      },
    })
    .replaceWith(p => {
      const params = p.value.typeParameters.params
      const [type] = params

      if (type) {
        return j.tsUnionType([type, j.tsUndefinedKeyword()])
      }

      return p.value
    })

  root.find(j.ExportNamedDeclaration).replaceWith(p => {
    const identifier = takeExportIdentifier(p)

    const tsTypeAnnotation = {
      current: undefined,
    }

    tsRoot.current
      ?.find(j.VariableDeclarator, {
        id: {
          name: identifier.name,
        },
      })
      .forEach(p => {
        alreadyAddedExports.push(identifier.name)
        // @ts-expect-error
        tsTypeAnnotation.current = p.value.id.typeAnnotation?.typeAnnotation
      })

    const typeAnnotation =
      tsTypeAnnotation.current ??
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

      const original = j.exportNamedDeclaration(
        makeDeclareFunction(
          identifier.name,
          parameters,
          typeParameters,
          returnType.typeAnnotation,
        ),
      )

      if (comments) {
        original.comments = comments
      }

      signatures.push(original)

      if (parameters.length > 1) {
        const firstParam = parameters.slice(0, 1)
        const otherParams = parameters.slice(1)
        const returnFunction = j.tsFunctionType(firstParam)

        returnFunction.typeAnnotation = returnType

        const dataLast = makeDeclareFunction(
          identifier.name,
          otherParams,
          typeParameters,
          returnFunction,
        )

        signatures.push(j.exportNamedDeclaration(dataLast))
      }

      return signatures
    }

    throw new Error('Something went wrong…')
  })

  const rootSource = root.toSource()
  const ts = j(rootSource)
  const currentExports = []

  tsRoot.current
    ?.find(j.ExportNamedDeclaration)
    .filter(p => {
      const identifier = takeExportIdentifier(p)
      return !alreadyAddedExports.includes(identifier.name)
    })
    .forEach(p => {
      currentExports.push(p.value)
    })

  ts.find(j.ExportNamedDeclaration).forEach(p => {
    currentExports.push(p.value)
  })

  const addImport = (name: string, path?: string) => {
    if (name === basename) {
      return undefined
    }

    const hasType = {
      current: false,
    }

    ts.find(j.TSTypeReference, {
      typeName: {
        name,
      },
    }).forEach(_p => {
      hasType.current = true
    })

    if (hasType.current) {
      return j.importDeclaration(
        [j.importSpecifier(j.identifier(name))],
        j.literal(path ?? `../${name}`),
      )
    }

    return undefined
  }

  fs.writeFileSync(
    path.resolve(dirname, 'index.ts'),
    ts
      .find(j.Program)
      .replaceWith(_p => {
        return j.program(
          [
            addImport('Option'),
            addImport('Result'),
            addImport('ExtractValue', '../types'),
            addImport('ExtractNested', '../types'),
            ...currentExports,
          ].filter(Boolean),
        )
      })
      .toSource(),
    { encoding: 'utf-8' },
  )

  return rootSource
}

export default transformer
