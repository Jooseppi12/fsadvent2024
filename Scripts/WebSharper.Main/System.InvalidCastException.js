import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(Error);
  return class InvalidCastException extends Error {
    static {
      _c=_i(this);
    }
    static New(){
      return new this("New");
    }
    static New_1(message){
      return new this("New_1", message);
    }
    constructor(i, _1){
      if(i=="New"){
        i="New_1";
        _1="Invalid cast";
      }
      if(i=="New_1"){
        const message=_1;
        super(message);
      }
    }
  };
});
export default _c;
