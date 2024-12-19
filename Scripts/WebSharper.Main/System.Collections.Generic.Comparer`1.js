import Object from "./System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class Comparer extends Object {
  static {
    _c=_i(this);
  }
  Compare0(x, y){
    return this.Compare_1(x, y);
  }
  Compare(x, y){
    return this.Compare_1(x, y);
  }
});
export default _c;
