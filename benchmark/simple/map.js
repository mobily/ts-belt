const {
  makeBenchmark,
  addTsBelt,
  addLodashFp,
  addRambda,
  addRamda,
  addRemeda,
} = require('../utils')

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const fn = x => x * 2

module.exports = makeBenchmark(
  'map',
  addTsBelt(tsBelt => {
    const { A, pipe } = tsBelt

    return [
      () => {
        return A.map(input, fn)
      },
      () => {
        return pipe(input, A.map(fn))
      },
    ]
  }),
  addRemeda(remeda => {
    const { pipe, map } = remeda

    return [
      () => {
        return map(input, fn)
      },
      () => {
        return pipe(input, map(fn))
      },
    ]
  }),
  addRamda(ramda => {
    const { pipe, map } = ramda

    return [
      () => {
        return map(fn, input)
      },
      () => {
        return pipe(map(fn))(input)
      },
    ]
  }),
  addRambda(rambda => {
    const { pipe, map } = rambda

    return [
      () => {
        return map(fn, input)
      },
      () => {
        return pipe(map(fn))(input)
      },
    ]
  }),
  addLodashFp(_ => {
    return [
      () => {
        return _.map(fn, input)
      },
      () => {
        return _.pipe(_.map(fn))(input)
      },
    ]
  }),
)
