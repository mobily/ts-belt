import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)

  root
    .find(j.TSFunctionType, {
      typeAnnotation: {
        typeAnnotation: {
          type: 'TSArrayType',
        },
      },
    })
    .replaceWith(p => {
      if (p.value.typeAnnotation.typeAnnotation.type === 'TSArrayType') {
        const fn = j.tsFunctionType(p.value.parameters)
        fn.typeParameters = p.value.typeParameters
        fn.typeAnnotation = j.tsTypeAnnotation(
          p.value.typeAnnotation.typeAnnotation,
        )
        return fn
      }

      return p.value
    })

  // T[] to ReadonlyArray<T>
  root.find(j.TSArrayType).replaceWith(p => {
    const elementType = p.value.elementType

    if (elementType) {
      return j.tsTypeReference(
        j.identifier('ReadonlyArray'),
        j.tsTypeParameterInstantiation([elementType]),
      )
    }

    return p.value
  })

  // Array<T> to ReadonlyArray<T>
  root
    .find(j.TSTypeReference, {
      typeName: {
        name: 'Array',
        type: 'Identifier',
      },
    })
    .forEach(p => {
      if (p.value.typeName.type === 'Identifier') {
        p.value.typeName.name = 'ReadonlyArray'
      }
    })

  return root.toSource()
}

export default transform
