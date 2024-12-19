import Object from "./System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Get, ArrayCopyTo } from "./WebSharper.Enumerator.js"
import { map } from "./Microsoft.FSharp.Collections.SeqModule.js"
import { ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
let _c=Lazy((_i) => class KeyCollection extends Object {
  static {
    _c=_i(this);
  }
  d;
  GetEnumerator(){
    return Get(map((kvp) => kvp.K, this.d));
  }
  get IsReadOnly(){
    return true;
  }
  get Count(){
    return this.d.count;
  }
  Contains(item){
    return this.d.ContainsKey(item);
  }
  CopyTo(arr, index){
    ArrayCopyTo(ofSeq(this), arr, index);
  }
  constructor(d){
    super();
    this.d=d;
  }
});
export default _c;
