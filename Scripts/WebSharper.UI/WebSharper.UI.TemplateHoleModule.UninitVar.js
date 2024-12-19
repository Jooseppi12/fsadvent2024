import TemplateHole from "./WebSharper.UI.TemplateHole.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(TemplateHole);
  return class UninitVar extends TemplateHole {
    static {
      _c=_i(this);
    }
    name;
    key;
    get Value(){
      return this.key;
    }
    WithName(n){
      return new _c(n, this.key);
    }
    get ValueObj(){
      return this.key;
    }
    get Name(){
      return this.name;
    }
    constructor(name, key){
      super();
      this.name=name;
      this.key=key;
    }
  };
});
export default _c;
