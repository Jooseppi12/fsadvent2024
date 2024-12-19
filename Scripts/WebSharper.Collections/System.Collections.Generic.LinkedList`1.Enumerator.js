import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { Equals } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { FailWith } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.js"
let _c=Lazy((_i) => class Enumerator extends Object {
  static {
    _c=_i(this);
  }
  c;
  Dispose(){ }
  MoveNext(){
    this.c=this.c.n;
    return!Equals(this.c, null);
  }
  get Current0(){
    return this.Current;
  }
  get Current(){
    return"c"in this.c?FailWith("Enumeration has not started. Call MoveNext."):this.c==null?FailWith("Enumeration already finished."):this.c.v;
  }
  constructor(l){
    super();
    this.c=l;
  }
});
export default _c;
