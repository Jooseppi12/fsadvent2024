import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Get } from "../WebSharper.Main/WebSharper.Enumerator.js"
let _c=Lazy((_i) => class Grouping extends Object {
  static {
    _c=_i(this);
  }
  k;
  v;
  get System_Linq_IGrouping_2$Key(){
    return this.k;
  }
  GetEnumerator(){
    return Get(this.v);
  }
  constructor(k, v){
    super();
    this.k=k;
    this.v=v;
  }
});
export default _c;
