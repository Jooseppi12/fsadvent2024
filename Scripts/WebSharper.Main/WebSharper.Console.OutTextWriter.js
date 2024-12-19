import TextWriter from "./System.IO.TextWriter.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(TextWriter);
  return class OutTextWriter extends TextWriter {
    static {
      _c=_i(this);
    }
    get Encoding(){
      return null;
    }
  };
});
export default _c;
