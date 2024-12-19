import Comparer from "./System.Collections.Generic.Comparer`1.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Compare } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
let _c=Lazy((_i) => {
  Force(Comparer);
  return class BaseComparer extends Comparer {
    static {
      _c=_i(this);
    }
    Compare_1(x, y){
      return Compare(x, y);
    }
  };
});
export default _c;
