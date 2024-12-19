import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import Var from "./WebSharper.UI.Var.js"
import { SnapshotOn } from "./WebSharper.UI.View.js"
let _c=Lazy((_i) => class Submitter extends Object {
  static {
    _c=_i(this);
  }
  input;
  u0076ar;
  view;
  Trigger(){
    this.u0076ar.Set(null);
  }
  constructor(input, init){
    super();
    this.input=input;
    this.u0076ar=Var.Create();
    this.view=SnapshotOn(init, this.u0076ar.View, this.input);
  }
});
export default _c;
