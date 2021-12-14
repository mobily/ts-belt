import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const generics = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

  // T1, T2, T3 to A, B, C and so on
  return j(source)
    .find(j.Identifier)
    .filter(p => {
      return /^T[0-9]$/.test(p.value.name)
    })
    .replaceWith(p => {
      const [, index] = p.value.name.split('')
      return j.identifier(generics[parseInt(index, 10) - 1])
    })
    .toSource()
}

export default transform
