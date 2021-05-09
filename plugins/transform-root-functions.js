exports.transformRootFunctions = (j, source) => {
  const root = j(source)

  root.find(j.Program).replaceWith(p => {
    return j.program([
      j.importDeclaration([j.importNamespaceSpecifier(j.identifier('C'))], j.literal('./utils.js')),
      ...p.value.body,
    ])
  })

  root.find(j.FunctionDeclaration).replaceWith(p => {
    return j.variableDeclaration('const', [
      j.variableDeclarator(
        j.identifier(p.value.id.name),
        p.value.params.length > 1
          ? j.callExpression(
              j.memberExpression(j.identifier('C'), j.identifier(`__${p.value.params.length}`)),
              [j.arrowFunctionExpression(p.value.params, p.value.body)],
            )
          : j.arrowFunctionExpression(p.value.params, p.value.body),
      ),
    ])
  })

  return root.toSource()
}
