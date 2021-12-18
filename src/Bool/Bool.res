open Externals

let placeholder = () => Js.Undefined.empty

%comment(
  "Folds a boolean value into a value of a different type, using a function for the `true` and `false` cases."
)
@gentype
let ifElse = (value, truthyFn, falsyFn) => value ? truthyFn() : falsyFn()

%comment("Negates the given boolean.")
@gentype
let inverse = value => !value

%comment("Alias for inverse.")
@gentype
let not_ = value => !value

%comment("Combines two boolean using `AND` → `a && b`.")
@gentype
let and_ = (a, b) => a && b

%comment("Combines two boolean using `OR` → `a || b`.")
@gentype
let or_ = (a, b) => a || b

%comment("Combines two booleans using `NAND` → `!(a && b)`.")
@gentype
let nand = (a, b) => !(a && b)

%comment("Combines two booleans using `NOR` → `!(a || b)`.")
@gentype
let nor = (a, b) => !(a || b)

%comment("Combines two booleans using `XOR` → `(!a && b) || (a && !b)`.")
@gentype
let xor = (a, b) => (!a && b) || (a && !b)

%comment("Combines two booleans using `XNOR` → `!xor(a, b)`.")
@gentype
let xnor = (a, b) => !xor(a, b)

%comment("Combines two booleans using an implication (`!a || b`).")
@gentype
let implies = (a, b) => !a || b
