import Object from "../WebSharper.Main/System.Object.js"
import { Lazy, MarkResizable, SetOptional } from "../WebSharper.Core.JavaScript/Runtime.js"
import { NewGuid } from "../WebSharper.Main/System.Guid.js"
import { Some } from "../WebSharper.Main/Microsoft.FSharp.Core.FSharpOption`1.js"
let _c=Lazy((_i) => class ProviderBuilder extends Object {
  static {
    _c=_i(this);
  }
  i;
  k;
  h;
  s;
  static New(src){
    return new this("New", src);
  }
  static New_1(){
    return new this("New_1");
  }
  constructor(i, _1){
    if(i=="New_1"){
      let c;
      super();
      this.i=null;
      this.k=(c=NewGuid(),String(c));
      this.h=MarkResizable([]);
      SetOptional(this, "s", null);
    }
    if(i=="New"){
      const src=_1;
      let c_1;
      super();
      this.i=null;
      this.k=(c_1=NewGuid(),String(c_1));
      this.h=MarkResizable([]);
      SetOptional(this, "s", Some(src));
    }
  }
});
export default _c;
