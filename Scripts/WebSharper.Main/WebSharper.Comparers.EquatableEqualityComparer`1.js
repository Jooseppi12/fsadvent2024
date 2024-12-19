import EqualityComparer from "./System.Collections.Generic.EqualityComparer`1.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Hash } from "./Microsoft.FSharp.Core.Operators.Unchecked.js"
let _c=Lazy((_i) => {
  Force(EqualityComparer);
  return class EquatableEqualityComparer extends EqualityComparer {
    static {
      _c=_i(this);
    }
    GetHashCode_1(x){
      return Hash(x);
    }
    Equals_1(x, y){
      return x.EEquals(y);
    }
  };
});
export default _c;
