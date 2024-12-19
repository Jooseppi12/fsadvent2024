import TaskBuilderBase from "./Microsoft.FSharp.Control.TaskBuilderBase.js"
import { Lazy, Force } from "../WebSharper.Core.JavaScript/Runtime.js"
let _c=Lazy((_i) => {
  Force(TaskBuilderBase);
  return class TaskBuilder extends TaskBuilderBase {
    static {
      _c=_i(this);
    }
  };
});
export default _c;
