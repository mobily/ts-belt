export const SymbolSome = Symbol('Some')
export const SymbolNone = Symbol('None')
export const SymbolOk = Symbol('Ok')
export const SymbolError = Symbol('Error')

export const withinRange = <T>(index: number, list: T[]) => {
  return index >= 0 && index <= list.length
}

export const curry2 = <A, B, C>(fn: (arg0: A, arg1: B) => C) => {
  return function curry(arg0: A, arg1?: B) {
    if (arguments.length === 1) {
      return (arg: B) => curry(arg0, arg)
    }

    return fn(arg0, arg1 as B)
  }
}

export const curry3 = <A, B, C, D>(fn: (arg0: A, arg1: B, arg2: C) => D) => {
  return function curry(arg0: A, arg1?: B, arg2?: C) {
    if (arguments.length === 1) {
      return (x: B) => curry(arg0, x)
    }

    if (arguments.length === 2) {
      return (y: C) => curry(arg0, arg1, y)
    }

    return fn(arg0, arg1 as B, arg2 as C)
  }
}

export const curry4 = <A, B, C, D, E>(
  fn: (arg0: A, arg1: B, arg2: C, arg3: D) => E,
) => {
  return function curry(arg0: A, arg1?: B, arg2?: C, arg3?: D) {
    if (arguments.length === 1) {
      return (x: B) => curry(arg0, x)
    }

    if (arguments.length === 2) {
      return (y: C) => curry(arg0, arg1, y)
    }

    if (arguments.length === 3) {
      return (z: D) => curry(arg0, arg1, arg2, z)
    }

    return fn(arg0, arg1 as B, arg2 as C, arg3 as D)
  }
}
