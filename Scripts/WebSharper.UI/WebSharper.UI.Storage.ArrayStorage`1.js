import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { ofSeq, filter } from "../WebSharper.Main/Microsoft.FSharp.Collections.ArrayModule.js"
import { set } from "../WebSharper.Main/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { ofSeqNonCopying } from "./WebSharper.UI.Array.js"
let _c=Lazy((_i) => class ArrayStorage extends Object {
  static {
    _c=_i(this);
  }
  init;
  SSet(coll){
    return ofSeq(coll);
  }
  SSetAt(idx, elem, arr){
    set(arr, idx, elem);
    return arr;
  }
  SRemoveIf(pred, arr){
    return filter((i) =>!pred(i), arr);
  }
  SInit(){
    return this.init;
  }
  SPrependMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.unshift.apply(arr, ps);
    return arr;
  }
  SPrepend(i, arr){
    arr.unshift(i);
    return arr;
  }
  SAppendMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.push.apply(arr, ps);
    return arr;
  }
  SAppend(i, arr){
    arr.push(i);
    return arr;
  }
  constructor(init){
    super();
    this.init=init;
  }
});
export default _c;
