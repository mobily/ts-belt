exports.uncurryFunctions = (j, source) => {
  const curryRe = /^_{1,}(\d)$/

  return j(source)
    .find(j.CallExpression)
    .filter(p => {
      const prop = p.value.callee.property
      return curryRe.test(prop && prop.name)
    })
    .replaceWith(p => {
      const callFn = p.value.arguments[0]
      const callArgs = p.value.arguments.slice(1)

      return p.value.callee.property.name.includes('__')
        ? callFn
        : j.callExpression(callFn, callArgs)
    })
    .toSource()
}
