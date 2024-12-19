import Object from "./System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class SingleNode extends Object {
  static {
    _c=_i(this);
  }
  node;
  ReplaceInDom(old){
    this.node.parentNode.replaceChild(this.node, old);
  }
  constructor(node){
    super();
    this.node=node;
  }
});
export default _c;
