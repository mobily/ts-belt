export function t(fn, args) {
  if (fn.length - args.length === 0) {
    switch (args.length) {
      case 1:
        return fn(args[0])
      case 2:
        return fn(args[0], args[1])
      case 3:
        return fn(args[0], args[1], args[2])
      default:
        throw new Error('invalid number of arguments')
    }
  } else if (fn.length - args.length === 1) {
    switch (args.length) {
      case 1:
        return function(data) {
          return fn(data, args[0])
        }
      case 2:
        return function(data) {
          return fn(data, args[0], args[1])
        }
      case 3:
        return function(data) {
          return fn(data, args[0], args[1], args[2])
        }
      default:
        throw new Error('invalid number of arguments')
    }
  }

  throw new Error('invalid number of arguments')
}
