import Object from "./System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { length, set } from "./Microsoft.FSharp.Core.LanguagePrimitives.IntrinsicFunctions.js"
import { FailWith } from "./Microsoft.FSharp.Core.Operators.js"
let _c=Lazy((_i) => class Random extends Object {
  static {
    _c=_i(this);
  }
  NextBytes(buffer){
    for(let i=0, _1=length(buffer)-1;i<=_1;i++)set(buffer, i, Math.floor(Math.random()*256));
  }
  Next(minValue, maxValue){
    return minValue>maxValue?FailWith("'minValue' cannot be greater than maxValue."):minValue+Math.floor(Math.random()*(maxValue-minValue));
  }
  Next_1(maxValue){
    return maxValue<0?FailWith("'maxValue' must be greater than zero."):Math.floor(Math.random()*maxValue);
  }
  Next_2(){
    return Math.floor(Math.random()*2147483648);
  }
});
export default _c;
