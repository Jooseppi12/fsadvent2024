import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { get, length } from "../WebSharper.Main/Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { FailWith } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.js"
let _c=Lazy((_i) => class Enumerator extends Object {
  static {
    _c=_i(this);
  }
  arr;
  i;
  get Current_1(){
    return get(this.arr, this.i);
  }
  MoveNext_1(){
    this.i=this.i+1;
    return this.i<length(this.arr);
  }
  Dispose(){ }
  get Current(){
    return this.i===-1?FailWith("Enumeration has not started. Call MoveNext."):this.i>=length(this.arr)?FailWith("Enumeration already finished."):get(this.arr, this.i);
  }
  get Current0(){
    return this.Current;
  }
  MoveNext(){
    return this.MoveNext_1();
  }
  constructor(arr){
    super();
    this.arr=arr;
    this.i=-1;
  }
});
export default _c;
