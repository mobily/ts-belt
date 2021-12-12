import { API, FileInfo } from 'jscodeshift'

const transformer = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const root = j(file.source)

  root
    .find(j.Identifier, {
      name: 'restArgs',
    })
    .filter(p => {
      return p.parent.value.type === 'FunctionExpression'
    })
    .replaceWith(p => {
      return j.restElement(p.value)
    })
    .toSource()

  root
    .find(j.Identifier, {
      name: 'restArgs',
    })
    .filter(p => {
      return p.parent.value.type === 'CallExpression'
    })
    .replaceWith(p => {
      return j.spreadElement(p.value)
    })
    .toSource()

  return root.toSource()
}

export default transformer
