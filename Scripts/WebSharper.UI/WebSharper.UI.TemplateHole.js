import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Choice1Of2 } from "../WebSharper.Main/Microsoft.FSharp.Core.FSharpChoice`2.js"
let _c=Lazy((_i) => class TemplateHole extends Object {
  static {
    _c=_i(this);
  }
  static Value(th){
    return th.ValueObj;
  }
  get AsChoiceView(){
    console.warn("Attribute value hole filled with non-text data", this.Name);
    return Choice1Of2("");
  }
  ForTextView(){
    console.warn("Content hole filled with attribute data", this.Name);
    return null;
  }
  ApplyVarHole(el){
    console.warn("Not a var hole: ", this.Name);
  }
  AddAttribute(a, a_1){
    console.warn("Var hole filled with non-Var data", this.Name);
  }
});
export default _c;
