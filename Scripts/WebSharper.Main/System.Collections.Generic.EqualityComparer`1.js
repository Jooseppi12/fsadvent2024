import Object from "./System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class EqualityComparer extends Object {
  static {
    _c=_i(this);
  }
  CGetHashCode0(x){
    return this.GetHashCode_1(x);
  }
  CEquals0(x, y){
    return this.Equals_1(x, y);
  }
  CGetHashCode(x){
    return this.GetHashCode_1(x);
  }
  CEquals(x, y){
    return this.Equals_1(x, y);
  }
});
export default _c;
