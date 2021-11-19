const fs = require('fs')
const path = require('path')

const resolveFiles = (dir, arr) => {
  const files = fs.readdirSync(path.resolve(__dirname, dir), { encoding: 'utf-8' })
  return files
    .filter(file => {
      if (arr) {
        return arr.some(suite => file.includes(suite))
      }
      return true
    })
    .map(file => require(`./${dir}/${file}`))
}

const simple = resolveFiles('simple')
const complex = resolveFiles('complex')

complex.forEach(test => {
  suite(`${test.title} (single function call)`, () => {
    test.arr.forEach(lib => {
      benchmark(lib.label, lib.rawFn)
    })
  })
})

simple.forEach(test => {
  suite(`${test.title} (single function call)`, () => {
    test.arr.forEach(lib => {
      benchmark(lib.label, lib.rawFn)
    })
  })

  suite(`${test.title} (function call within pipe)`, () => {
    test.arr.forEach(lib => {
      benchmark(lib.label, lib.pipeFn)
    })
  })
})
