import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(Error);
  return class ArgumentOutOfRangeException extends Error {
    static {
      _c=_i(this);
    }
    static New(argumentName, message){
      return new this("New", argumentName, message);
    }
    static New_1(argumentName){
      return new this("New_1", argumentName);
    }
    static New_2(){
      return new this("New_2");
    }
    constructor(i, _1, _2){
      let argumentName;
      if(i=="New_1"){
        argumentName=_1;
        i="New";
        _1=argumentName;
        _2="Specified argument was out of the range of valid values.";
      }
      if(i=="New_2"){
        super("Specified argument was out of the range of valid values.");
      }
      if(i=="New"){
        const argumentName_1=_1;
        const message=_2;
        super(message+"\nParameter name: "+argumentName_1);
      }
    }
  };
});
export default _c;
