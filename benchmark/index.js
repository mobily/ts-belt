const { A, F, pipe } = require('..')

const Ramda = require('ramda')
const Remeda = require('remeda')
const lodash = require('lodash/fp')
const Rambda = require('rambda')

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const input2 = [1, 2, 2, 3, 3, 5, 4, 3, 2, 1]

suite('[1, 2, 3, 4, 5, 6, 7, 8, 9] → map → filter → reduce', () => {
  benchmark('@mobily/ts-belt', () => {
    return pipe(
      input,
      A.map(x => x * 2),
      A.filter(x => x > 4),
      A.reduce((acc, x) => acc + x, 0),
    )
  })

  benchmark('ramda', () => {
    return Ramda.pipe(
      Ramda.map(x => x * 2),
      Ramda.filter(x => x > 4),
      Ramda.reduce((acc, x) => acc + x, 0),
    )(input)
  })

  benchmark('remeda', () => {
    return Remeda.pipe(
      input,
      Remeda.map(x => x * 2),
      Remeda.filter(x => x > 4),
      Remeda.reduce((acc, x) => acc + x, 0),
    )
  })

  benchmark('lodash/fp', () => {
    return lodash.pipe(
      lodash.map(x => x * 2),
      lodash.filter(x => x > 4),
      lodash.reduce((acc, x) => acc + x, 0),
    )(input)
  })

  benchmark('rambda', () => {
    return Rambda.pipe(
      Rambda.map(x => x * 2),
      Rambda.filter(x => x > 4),
      Rambda.reduce((acc, x) => acc + x, 0),
    )(input)
  })
})

suite('[1, 2, 2, 3, 3, 5, 4, 3, 2, 1] → uniq → take', () => {
  benchmark('@mobily/ts-belt', () => {
    return pipe(input2, A.uniq, A.take(3))
  })

  benchmark('ramda', () => {
    return Ramda.pipe(Ramda.uniq, Ramda.take(3))(input2)
  })

  benchmark('remeda', () => {
    return Remeda.pipe(input2, Remeda.uniq(), Remeda.take(3))
  })

  benchmark('lodash/fp', () => {
    return lodash.pipe(lodash.uniq, lodash.take(3))(input2)
  })

  benchmark('rambda', () => {
    return Rambda.pipe(Rambda.uniq, Rambda.take(3))(input2)
  })
})

suite('equals [1, 2, 3, 4, 5] [1, 2, 3, 4, 5]', () => {
  benchmark('@mobily/ts-belt', () => {
    return F.equals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
  })

  benchmark('ramda', () => {
    return Ramda.equals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
  })

  benchmark('remeda', () => {
    return Remeda.equals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
  })

  benchmark('lodash', () => {
    return lodash.equals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
  })

  benchmark('rambda', () => {
    return Rambda.equals([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
  })
})

suite('equals (objects)', () => {
  benchmark('@mobily/ts-belt', () => {
    return F.equals(
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
    )
  })

  benchmark('ramda', () => {
    return Ramda.equals(
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
    )
  })

  benchmark('remeda', () => {
    return Remeda.equals(
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
    )
  })

  benchmark('lodash', () => {
    return lodash.equals(
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
    )
  })

  benchmark('rambda', () => {
    return Rambda.equals(
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
      [
        { key: 'key', value: 'value' },
        { key: 'key', value: 'value' },
      ],
    )
  })
})
