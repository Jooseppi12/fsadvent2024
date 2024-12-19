import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(Error);
  return class MatchFailureException extends Error {
    static {
      _c=_i(this);
    }
    constructor(message, line, column){
      super(message+" at "+String(line)+":"+String(column));
    }
  };
});
export default _c;
