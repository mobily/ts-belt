import { A, F, D, pipe } from '../..'

const xs = [
  {
    name: 'Diana',
    type: 0,
  },
  {
    name: 'Beyonce',
    type: 0,
  },
  {
    name: 'Albert',
    type: 1,
  },
  {
    name: 'Doris',
    type: 1,
  },
  {
    name: 'Alvarez',
    type: 0,
  },
  {
    name: 'Bijou',
    type: 0,
  },
  {
    name: 'Zac',
    type: 0,
  },
  {
    name: 'Poke',
    type: 1,
  },
]

describe('sort (pipe)', () => {
  it('returns correctly sorted array', () => {
    const result = pipe(
      xs,
      A.sortWith([
        F.descend(D.getUnsafe('type')),
        F.descend(D.getUnsafe('name')),
      ]),
    )
    expect(result).toEqual([
      {
        name: 'Poke',
        type: 1,
      },
      {
        name: 'Doris',
        type: 1,
      },
      {
        name: 'Albert',
        type: 1,
      },
      {
        name: 'Zac',
        type: 0,
      },
      {
        name: 'Diana',
        type: 0,
      },
      {
        name: 'Bijou',
        type: 0,
      },
      {
        name: 'Beyonce',
        type: 0,
      },
      {
        name: 'Alvarez',
        type: 0,
      },
    ])
  })
})
