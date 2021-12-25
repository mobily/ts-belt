external coerce: 'a => 'b = "%identity"
external raw_comment: string => 'a = "#raw_stmt"

@val
external assign: (Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"

@val
external assign2: (Js.Dict.t<'a>, Js.Dict.t<'a>, Js.Dict.t<'a>) => Js.Dict.t<'a> = "Object.assign"

@val
external entries: Js.Dict.t<'a> => array<(Js.Dict.key, 'a)> = "Object.entries"

@send
external trimEnd: string => string = "trimEnd"

@send
external trimStart: string => string = "trimStart"
