import { exists } from "../WebSharper.Main/Microsoft.FSharp.Collections.ArrayModule.js"
import { Equals } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.Unchecked.js"
export function Contains(keyFn, item, xs){
  const t=keyFn(item);
  return exists((it) => Equals(keyFn(it), t), xs);
}
