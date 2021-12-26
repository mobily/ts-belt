open Externals

let placeholder = () => Js.Undefined.empty

%comment("Subtracts `1` from the given number.")
@gentype
let pred = n => pred(n)

%comment("Adds `1` to the given number.")
@gentype
let succ = n => succ(n)

%comment("Returns the sum of two numbers.")
@gentype
let add = (a, b) => a +. b

%comment("Returns the difference of two numbers.")
@gentype
let subtract = (a, b) => a -. b

%comment("Multiplies two numbers.")
@gentype
let multiply = (a, b) => a *. b

%comment("Divides two numbers.")
@gentype
let divide = (a, b) => a /. b

%comment("Returns the remainder of a number division.")
@gentype
let modulo = (a, b) => mod(a, b)

%comment("Returns the quotient and remainder of a number division.")
@gentype
let divideWithModulo = (a, b) => (a /. b, mod(int_of_float(a), int_of_float(b)))

%comment("Returns `true` if the first argument is greater than second argument. Otherwise it returns `false`")
@gentype
let gt = (a: float, b: float) => a > b

%comment("Returns `true` if the first argument is greater or equal than second argument. Otherwise it returns `false`")
@gentype
let gte = (a: float, b: float) => a >= b

%comment("Returns `true` if the first argument is lower than second argument. Otherwise it returns `false`")
@gentype
let lt = (a: float, b: float) => a < b

%comment("Returns `true` if the first argument is lower or equal than second argument. Otherwise it returns `false`")
@gentype
let lte = (a: float, b: float) => a <= b

%comment("Clamps a value between an upper and lower bound")
@gentype
let clamp = (num, min, max) => Js.Math.min_float(Js.Math.max_float(num, min), max)
