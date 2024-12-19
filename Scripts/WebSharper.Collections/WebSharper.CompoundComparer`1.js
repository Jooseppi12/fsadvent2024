import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class CompoundComparer extends Object {
  static {
    _c=_i(this);
  }
  primary;
  secondary;
  Compare(x, y){
    const m=this.primary.Compare(x, y);
    return m===0?this.secondary.Compare(x, y):m;
  }
  constructor(primary, secondary){
    super();
    this.primary=primary;
    this.secondary=secondary;
  }
});
export default _c;
