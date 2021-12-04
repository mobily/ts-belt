open Ppxlib;

module Helper = Ast_helper;
module Builder = Ast_builder.Default;

let string_payload =
  Ast_pattern.(
    pstr(
      pstr_eval(
        pexp_constant(pconst_string(__', __, __)),
        nil
      ) ^:: nil,
    ),
);

let expander = (~loc, ~path as _, payload, _label, _) => {
  let str = "/** " ++ payload.txt ++ " */"
  let ident = Helper.Exp.ident(~loc, {txt: Lident("raw_comment"), loc});

  Helper.Exp.apply(
    ~loc,
    ~attrs=[],
    ident,
    [(Nolabel, Ast_builder.Default.estring(~loc, str))],
  );
}


let extension =
  Ppxlib.Extension.declare("comment", Ppxlib.Extension.Context.Expression, string_payload, expander);

let () = Driver.register_transformation(~extensions=[extension], "comment-ppx");
