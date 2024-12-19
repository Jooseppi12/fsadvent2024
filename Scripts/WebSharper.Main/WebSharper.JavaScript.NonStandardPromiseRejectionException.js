import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(Error);
  return class NonStandardPromiseRejectionException extends Error {
    static {
      _c=_i(this);
    }
    reason;
    get Reason(){
      return this.reason;
    }
    constructor(reason){
      super("Promise rejected");
      this.reason=reason;
    }
  };
});
export default _c;
