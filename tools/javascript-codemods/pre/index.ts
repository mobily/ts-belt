import { API, FileInfo } from 'jscodeshift'

import dataFirst from './make-data-first'
import spreadRest from './spread-rest-args'
import uncurry from './uncurry-functions'
import rename from './rename-identifiers'

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const source = [spreadRest, dataFirst, uncurry, rename].reduce((acc, fn) => {
    return fn(acc, j)
  }, file.source)

  return j(source).toSource()
}

export default transform
