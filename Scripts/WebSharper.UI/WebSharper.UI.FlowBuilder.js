import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Return, Bind } from "./WebSharper.UI.Flow.js"
let _c=Lazy((_i) => class FlowBuilder extends Object {
  static {
    _c=_i(this);
  }
  ReturnFrom(inner){
    return inner;
  }
  Return(value){
    return Return(value);
  }
  Bind(comp, func){
    return Bind(comp, func);
  }
});
export default _c;
