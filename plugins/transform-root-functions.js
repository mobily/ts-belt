exports.transformRootFunctions = (j, source, path) => {
  if (/src\/(utils|pipe|index)/.test(path)) {
    return source
  }

  return j(source)
    .find(j.Program)
    .replaceWith(p => {
      const body = p.value.body.map(p => {
        if (p.type === 'FunctionDeclaration') {
          return j.variableDeclaration('const', [
            j.variableDeclarator(
              j.identifier(p.id.name),
              p.params.length > 1
                ? j.callExpression(
                    j.memberExpression(j.identifier('C'), j.identifier(`__${p.params.length}`)),
                    [j.arrowFunctionExpression(p.params, p.body)],
                  )
                : j.arrowFunctionExpression(p.params, p.body),
            ),
          ])
        }

        if (p.type === 'ExportNamedDeclaration' && p.declaration) {
          const declarations = p.declaration.declarations.map(declaration => {
            return declaration.init.type === 'ArrowFunctionExpression'
              ? j.variableDeclarator(
                  j.identifier(declaration.id.name),
                  declaration.init.params.length > 1
                    ? j.callExpression(
                        j.memberExpression(
                          j.identifier('C'),
                          j.identifier(`__${declaration.init.params.length}`),
                        ),
                        [j.arrowFunctionExpression(declaration.init.params, declaration.init.body)],
                      )
                    : j.arrowFunctionExpression(declaration.init.params, declaration.init.body),
                )
              : declaration
          })

          return j.exportNamedDeclaration(j.variableDeclaration('const', declarations))
        }

        return p
      })

      return j.program([
        j.importDeclaration(
          [j.importNamespaceSpecifier(j.identifier('C'))],
          j.literal('../utils.js'),
        ),
        ...body,
      ])
    })
    .toSource()
}
