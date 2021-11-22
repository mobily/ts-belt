const _ = require('lodash/fp')
const ramda = require('ramda')
const rambda = require('rambda')
const remeda = require('remeda')
const belt = require('..')

exports.makeBenchmark = (title, ...rest) => {
  suite(`${title} (single function call)`, () => {
    rest.forEach(test => {
      benchmark(test.label, test.rawFn)
    })
  })

  suite(`${title} (function call within a pipeline)`, () => {
    rest.forEach(test => {
      benchmark(test.label, test.pipeFn)
    })
  })
}

const addBenchmarkSuite = (label, module) => mapFn => {
  const [rawFn, pipeFn] = mapFn(module)

  // console.log(label, title)
  // rawFn && console.log(rawFn())
  // pipeFn && console.log(pipeFn())

  return {
    label,
    rawFn,
    pipeFn,
  }
}

exports.addTsBelt = addBenchmarkSuite('@mobily/ts-belt', belt)
exports.addRamda = addBenchmarkSuite('ramda', ramda)
exports.addRambda = addBenchmarkSuite('rambda', rambda)
exports.addRemeda = addBenchmarkSuite('remeda', remeda)
exports.addLodashFp = addBenchmarkSuite('lodash/fp', _)
