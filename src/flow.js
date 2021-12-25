export function flow() {
  let fns = arguments

  return function () {
    let x = fns[0].apply(null, arguments)

    for (let i = 1, l = fns.length; i < l; i++) {
      x = fns[i](x)
    }

    return x
  }
}
