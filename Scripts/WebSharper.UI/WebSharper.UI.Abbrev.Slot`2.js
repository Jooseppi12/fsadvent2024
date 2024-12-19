import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Hash, Equals } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.Unchecked.js"
let _c=Lazy((_i) => class Slot extends Object {
  static {
    _c=_i(this);
  }
  key;
  value;
  GetHashCode(){
    return Hash(this.key(this.value));
  }
  Equals(o){
    return Equals(this.key(this.value), this.key(o.Value));
  }
  get Value(){
    return this.value;
  }
  constructor(key, value){
    super();
    this.key=key;
    this.value=value;
  }
});
export default _c;
