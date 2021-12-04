external unsafe: 'a => 'b = "%identity"
external raw_comment: string => 'a = "#raw_stmt"

@val
external assign: (Js.Dict.t<'a>, Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"

@val
external entries: Js.Dict.t<'a> => array<(Js.Dict.key, 'a)> = "Object.entries"
