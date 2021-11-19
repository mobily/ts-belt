const {
  makeBenchmark,
  addTsBelt,
  addLodashFp,
  addRambda,
  addRamda,
  addRemeda,
} = require('../utils')
const { A } = require('../..')

const input = A.range(0, 1000)
const mapFn = x => x * 2
const filterFn = x => x > 1000
const reduceFn = (acc, x) => {
  return acc + x
}

module.exports = makeBenchmark(
  'map → filter → reduce',
  addTsBelt(tsBelt => {
    const { A, pipe } = tsBelt

    return [
      () => {
        return pipe(input, A.map(mapFn), A.filter(filterFn), A.reduce(0, reduceFn))
      },
    ]
  }),
  addRemeda(remeda => {
    const { pipe, map, filter, reduce } = remeda

    return [
      () => {
        return pipe(input, map(mapFn), filter(filterFn), reduce(reduceFn, 0))
      },
    ]
  }),
  addRamda(ramda => {
    const { pipe, map, filter, reduce } = ramda

    return [
      () => {
        return pipe(map(mapFn), filter(filterFn), reduce(reduceFn, 0))(input)
      },
    ]
  }),
  addRambda(rambda => {
    const { pipe, map, filter, reduce } = rambda

    return [
      () => {
        return pipe(map(mapFn), filter(filterFn), reduce(reduceFn, 0))(input)
      },
    ]
  }),
  addLodashFp(_ => {
    return [
      () => {
        return _.pipe(_.map(mapFn), _.filter(filterFn), _.reduce(reduceFn, 0))(input)
      },
    ]
  }),
)
