import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { map, ofSeq, filter } from "../WebSharper.Main/Microsoft.FSharp.Collections.ArrayModule.js"
import { set } from "../WebSharper.Main/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { ofSeqNonCopying } from "./WebSharper.UI.Array.js"
let _c=Lazy((_i) => class LocalStorageBackend extends Object {
  static {
    _c=_i(this);
  }
  id;
  serializer;
  storage;
  clear(){
    this.storage.removeItem(this.id);
  }
  set(arr){
    this.storage.setItem(this.id, JSON.stringify(map(this.serializer.Encode, arr)));
    return arr;
  }
  SSet(coll){
    return this.set(ofSeq(coll));
  }
  SSetAt(idx, elem, arr){
    set(arr, idx, elem);
    return this.set(arr);
  }
  SRemoveIf(pred, arr){
    return this.set(filter((i) =>!pred(i), arr));
  }
  SInit(){
    const item=this.storage.getItem(this.id);
    if(item==null)return[];
    else try {
      return map(this.serializer.Decode, JSON.parse(item));
    }
    catch(m){
      return[];
    }
  }
  SPrependMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.unshift.apply(arr, ps);
    return this.set(arr);
  }
  SPrepend(i, arr){
    arr.unshift(i);
    return this.set(arr);
  }
  SAppendMany(is, arr){
    let ps=ofSeqNonCopying(is);
    arr.push.apply(arr, ps);
    return this.set(arr);
  }
  SAppend(i, arr){
    arr.push(i);
    return this.set(arr);
  }
  constructor(id, serializer){
    super();
    this.id=id;
    this.serializer=serializer;
    this.storage=globalThis.localStorage;
  }
});
export default _c;
