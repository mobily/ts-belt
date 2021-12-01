import { API, FileInfo, Identifier } from 'jscodeshift'

const transformer = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const root = j(file.source)
  const literals: [string, string][] = [
    ['when_', 'when'],
    ['not_', 'not'],
    ['or_', 'or'],
    ['and_', 'and'],
  ]
  const equalName =
    (p: Identifier) =>
    ([search]: [string, string]) => {
      return p.name === search
    }

  root
    .find(j.Identifier)
    .filter(p => {
      return literals.some(equalName(p.value))
    })
    .replaceWith(p => {
      const [, value] = literals.find(equalName(p.value))
      return j.identifier(value)
    })

  return root.toSource()
}

export default transformer
