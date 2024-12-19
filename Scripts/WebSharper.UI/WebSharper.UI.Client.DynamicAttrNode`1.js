import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { get_Empty } from "./WebSharper.UI.Anim.js"
import { Map } from "./WebSharper.UI.View.js"
let _c=Lazy((_i) => class DynamicAttrNode extends Object {
  static {
    _c=_i(this);
  }
  push;
  value;
  dirty;
  updates;
  get NChanged(){
    return this.updates;
  }
  NSync(parent){
    if(this.dirty){
      (this.push(parent))(this.value);
      this.dirty=false;
    }
  }
  NGetExitAnim(parent){
    return get_Empty();
  }
  NGetEnterAnim(parent){
    return get_Empty();
  }
  NGetChangeAnim(parent){
    return get_Empty();
  }
  constructor(view, push){
    super();
    this.push=push;
    this.value=void 0;
    this.dirty=false;
    this.updates=Map((x) => {
      this.value=x;
      this.dirty=true;
    }, view);
  }
});
export default _c;
