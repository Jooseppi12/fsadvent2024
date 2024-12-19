import { forall } from "../WebSharper.Main/Microsoft.FSharp.Core.StringModule.js"
import { IsWhiteSpace } from "../WebSharper.Main/System.Char.js"
export function isBlank(s){
  return forall(IsWhiteSpace, s);
}
