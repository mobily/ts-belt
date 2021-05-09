const expect = require('expect')
const matchers = require('expect/build/matchers')

expect.extend({
  toBeNone(received) {
    const pass = received === void 0 || (received && received.BS_PRIVATE_NESTED_SOME_NONE >= 0)

    if (pass) {
      return {
        message: () => `expected ${received} not to be None`,
        pass: true,
      }
    } else {
      return {
        message: () => `expected ${received} to be None`,
        pass: false,
      }
    }
  },
  toBeSome(received, value) {
    return matchers.default.toEqual(received, value)
  },
  toBeOk(received, value) {
    return matchers.default.toEqual(received, {
      TAG: 0,
      _0: value,
    })
  },
  toBeError(received, value) {
    return matchers.default.toEqual(received, {
      TAG: 1,
      _0: value,
    })
  },
})
