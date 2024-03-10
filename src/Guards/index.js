export * from './Guards.bs.js'

export const isFinite = value => Number.isFinite(value)
export const isInfinite = value => !Number.isFinite(value)