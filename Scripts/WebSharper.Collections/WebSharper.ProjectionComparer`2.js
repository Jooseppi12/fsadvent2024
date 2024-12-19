import Object from "../WebSharper.Main/System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => class ProjectionComparer extends Object {
  static {
    _c=_i(this);
  }
  primary;
  projection;
  Compare(x, y){
    return this.primary.Compare(this.projection(x), this.projection(y));
  }
  constructor(primary, projection){
    super();
    this.primary=primary;
    this.projection=projection;
  }
});
export default _c;
