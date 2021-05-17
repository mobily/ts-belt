exports.replaceIdentifiers = (j, source) => {
  const literals = [['when_', 'when']]
  const check = p => ([search]) => {
    return p.value.name === search
  }

  return j(source)
    .find(j.Identifier)
    .filter(p => {
      return literals.some(check(p))
    })
    .replaceWith(p => {
      const [, value] = literals.find(check(p))
      return j.identifier(value)
    })
    .toSource()
}
