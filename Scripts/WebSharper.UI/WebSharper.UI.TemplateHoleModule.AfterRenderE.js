import TemplateHole from "./WebSharper.UI.TemplateHole.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(TemplateHole);
  return class AfterRenderE extends TemplateHole {
    static {
      _c=_i(this);
    }
    name;
    key;
    fillWith;
    Key(){
      return this.key;
    }
    get Value(){
      return this.fillWith;
    }
    WithName(n){
      return new _c(n, this.key, this.fillWith);
    }
    get ValueObj(){
      return this.Value;
    }
    get Name(){
      return this.name;
    }
    constructor(name, key, fillWith){
      super();
      this.name=name;
      this.key=key;
      this.fillWith=fillWith;
    }
  };
});
export default _c;
