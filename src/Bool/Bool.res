open Externals

let placeholder = () => Js.Undefined.empty

%comment(
  "Folds a boolean value into a value of a different type, using a function for the `true` and `false` cases."
)
export ifElse = (value, truthyFn, falsyFn) => value ? truthyFn() : falsyFn()

%comment("Negates the given boolean.")
export inverse = value => !value

%comment("Alias for inverse.")
export not_ = value => !value

%comment("Combines two boolean using `AND` → `a && b`.")
export and_ = (a, b) => a && b

%comment("Combines two boolean using `OR` → `a || b`.")
export or_ = (a, b) => a || b

%comment("Combines two booleans using `NAND` → `!(a && b)`.")
export nand = (a, b) => !(a && b)

%comment("Combines two booleans using `NOR` → `!(a || b)`.")
export nor = (a, b) => !(a || b)

%comment("Combines two booleans using `XOR` → `(!a && b) || (a && !b)`.")
export xor = (a, b) => (!a && b) || (a && !b)

%comment("Combines two booleans using `XNOR` → `!xor(a, b)`.")
export xnor = (a, b) => !xor(a, b)

%comment("Combines two booleans using an implication (`!a || b`).")
export implies = (a, b) => !a || b
