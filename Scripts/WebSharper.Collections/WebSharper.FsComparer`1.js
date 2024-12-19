import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Compare } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.Unchecked.js"
let _c=Lazy((_i) => class FsComparer extends Object {
  static {
    _c=_i(this);
  }
  Compare(x, y){
    return Compare(x, y);
  }
});
export default _c;
