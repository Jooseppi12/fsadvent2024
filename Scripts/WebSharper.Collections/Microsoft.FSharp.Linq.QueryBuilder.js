import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { ofSeq, average, sum } from "../WebSharper.Main/Microsoft.FSharp.Collections.ArrayModule.js"
import { choose } from "../WebSharper.Main/Microsoft.FSharp.Collections.SeqModule.js"
import { ofNullable } from "../WebSharper.Main/Microsoft.FSharp.Core.OptionModule.js"
import { length } from "../WebSharper.Main/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { isIOrderedEnumerable } from "./System.Linq.IOrderedEnumerable`1.js"
import { FailWith } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.js"
let _c=Lazy((_i) => class QueryBuilder extends Object {
  static {
    _c=_i(this);
  }
  static averageByNullable(source, projection){
    const filtered=ofSeq(choose((x) => ofNullable(projection(x)), source));
    return length(filtered)===0?null:average(filtered);
  }
  static sumByNullable(source, projection){
    return sum(ofSeq(choose((x) => ofNullable(projection(x)), source)));
  }
  static CheckThenBySource(source){
    return typeof source=="object"&&isIOrderedEnumerable(source)?source:FailWith("'thenBy' and 'thenByDescending' may only be used with an ordered input");
  }
});
export default _c;
