open Externals

let placeholder = () => Js.Undefined.empty

%comment("Subtracts `1` from the given number.")
export pred = n => pred(n)

%comment("Adds `1` to the given number.")
export succ = n => succ(n)

%comment("Returns the sum of two numbers.")
export add = (a, b) => a +. b

%comment("Returns the difference of two numbers.")
export subtract = (a, b) => a -. b

%comment("Multiplies two numbers.")
export multiply = (a, b) => a *. b

%comment("Divides two numbers.")
export divide = (a, b) => a /. b

%comment("Returns the remainder of a number division.")
export modulo = (a, b) => mod(a, b)

%comment("Returns the quotient and remainder of a number division.")
export divideWithModulo = (a, b) => (a /. b, mod(int_of_float(a), int_of_float(b)))
