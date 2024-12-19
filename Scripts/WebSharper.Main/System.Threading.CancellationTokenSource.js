import Object from "./System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { iter, choose } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { Register } from "./WebSharper.Concurrency.js"
import { Some } from "./Microsoft.FSharp.Core.FSharpOption`1.js"
import { length } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import AggregateException from "./System.AggregateException.js"
let _c=Lazy((_i) => class CancellationTokenSource extends Object {
  static {
    _c=_i(this);
  }
  init;
  c;
  pending;
  r;
  static CreateLinkedTokenSource(t1, t2){
    return _c.CreateLinkedTokenSource_1([t1, t2]);
  }
  static CreateLinkedTokenSource_1(tokens){
    const cts=new CancellationTokenSource();
    iter((t) => {
      Register(t, () => {
        cts.Cancel_1();
      });
    }, tokens);
    return cts;
  }
  CancelAfter(delay){
    if(!this.c){
      const o=this.pending;
      if(o==null){ }
      else clearTimeout(o.$0);
      this.pending=Some(setTimeout(() => {
        this.Cancel_1();
      }, delay));
    }
  }
  Cancel(throwOnFirstException){
    if(!throwOnFirstException)this.Cancel_1();
    else if(!this.c){
      this.c=true;
      iter((a) => {
        a();
      }, this.r);
    }
  }
  Cancel_1(){
    if(!this.c){
      this.c=true;
      const errors=choose((a) => {
        try {
          a();
          return null;
        }
        catch(e){
          return Some(e);
        }
      }, this.r);
      if(length(errors)>0)throw new AggregateException("New_3", errors);
      else void 0;
    }
  }
  constructor(){
    super();
    this.c=false;
    this.pending=null;
    this.r=[];
    this.init=1;
  }
});
export default _c;
