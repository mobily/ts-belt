export const pipe = (value, ...fns) => {
  return fns.reduce((prev, fn) => fn(prev), value)
}
