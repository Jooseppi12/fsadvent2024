import Comparer from "./System.Collections.Generic.Comparer`1.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(Comparer);
  return class ComparableComparer extends Comparer {
    static {
      _c=_i(this);
    }
    Compare_1(x, y){
      return x.CompareTo(y);
    }
  };
});
export default _c;
