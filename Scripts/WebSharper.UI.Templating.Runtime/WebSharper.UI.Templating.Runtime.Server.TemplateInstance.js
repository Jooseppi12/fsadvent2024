import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { FailWith } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.js"
let _c=Lazy((_i) => class TemplateInstance extends Object {
  static {
    _c=_i(this);
  }
  doc;
  allVars;
  anchorRoot;
  Anchor(name){
    function findUnder(el){
      while(true)
        {
          const e=el.querySelector("[ws-anchor=\""+String(name)+"\"]");
          if(e==null&&!(el.parentElement==null))el=el.parentElement;
          else return e;
        }
    }
    return findUnder(this.anchorRoot);
  }
  SetAnchorRoot(el){
    this.anchorRoot=el;
  }
  Hole(name){
    return this.allVars.Item(name);
  }
  get Doc(){
    return this.doc;
  }
  constructor(c, doc){
    super();
    this.doc=doc;
    this.allVars=c.$==0?c.$0:FailWith("Should not happen");
    this.anchorRoot=null;
  }
});
export default _c;
