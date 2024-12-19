import TemplateHole from "./WebSharper.UI.TemplateHole.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Some } from "../WebSharper.Main/Microsoft.FSharp.Core.FSharpOption`1.js"
import { Choice2Of2 } from "../WebSharper.Main/Microsoft.FSharp.Core.FSharpChoice`2.js"
let _c=Lazy((_i) => {
  Force(TemplateHole);
  return class TextView extends TemplateHole {
    static {
      _c=_i(this);
    }
    name;
    fillWith;
    get Value(){
      return this.fillWith;
    }
    ForTextView(){
      return Some(this.fillWith);
    }
    get AsChoiceView(){
      return Choice2Of2(this.fillWith);
    }
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
