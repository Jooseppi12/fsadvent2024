import Var from "./WebSharper.UI.Var`1.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Get, TryGet, Map } from "./WebSharper.UI.View.js"
import { Int } from "./WebSharper.UI.Abbrev.Fresh.js"
let _c=Lazy((_i) => {
  Force(Var);
  return class FromView extends Var {
    static {
      _c=_i(this);
    }
    set;
    id;
    current;
    view;
    get Id(){
      return"uinref"+String(this.id);
    }
    SetFinal(x){
      this.set(x);
    }
    Update(f){
      const g=this.set;
      Get((x) => g(f(x)), this.view);
    }
    UpdateMaybe(f){
      Get((x) => {
        const m=f(x);
        if(m!=null&&m.$==1)this.set(m.$0);
      }, this.view);
    }
    Set(x){
      this.set(x);
    }
    Get(){
      return this.current;
    }
    get View(){
      return this.view;
    }
    constructor(view, set){
      super();
      this.set=set;
      this.id=Int();
      const m=TryGet(view);
      this.current=m==null?null:m.$0;
      this.view=Map((x) => {
        this.current=x;
        return x;
      }, view);
    }
  };
});
export default _c;