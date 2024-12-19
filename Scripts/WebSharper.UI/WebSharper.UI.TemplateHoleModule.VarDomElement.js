import TemplateHole from "./WebSharper.UI.TemplateHole.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(TemplateHole);
  return class VarDomElement extends TemplateHole {
    static {
      _c=_i(this);
    }
    name;
    fillWith;
    get Value(){
      return this.fillWith;
    }
    ApplyVarHole(el){ }
    WithName(n){
      return new _c(n, this.fillWith);
    }
    get ValueObj(){
      return this.Value;
    }
    get Name(){
      return this.name;
    }
    constructor(name, fillWith){
      super();
      this.name=name;
      this.fillWith=fillWith;
    }
  };
});
export default _c;
