import Object from "./System.Object.js"
import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import { EndPoint, makeHeaders, makePayload, AjaxProvider } from "./WebSharper.Remoting.js"
import { Delay, Bind, GetCT, FromContinuations, Register, Return, Start, StartAsTask } from "./WebSharper.Concurrency.js"
import OperationCanceledException from "./System.OperationCanceledException.js"
let _c=Lazy((_i) => class AjaxRemotingProvider extends Object {
  static {
    _c=_i(this);
  }
  get Headers(){
    return[];
  }
  get EndPoint(){
    return EndPoint();
  }
  AsyncBase(m, data){
    const _1=null;
    return Delay(() => {
      const headers=makeHeaders(this.Headers);
      const payload=makePayload(data);
      return Bind(GetCT(), (a) => Bind(FromContinuations((ok, err, cc) => {
        const waiting=[true];
        const reg=Register(a, () => {
          if(waiting[0]){
            waiting[0]=false;
            cc(new OperationCanceledException("New", a));
          }
        });
        return AjaxProvider().Async(this.EndPoint+"/"+m, headers, payload, (x) => {
          if(waiting[0]){
            waiting[0]=false;
            reg.Dispose();
            ok(x);
          }
        }, (e) => {
          if(waiting[0]){
            waiting[0]=false;
            reg.Dispose();
            err(e);
          }
        });
      }), (a_1) => Return(JSON.parse(a_1))));
    });
  }
  Send(m, data){
    Start(this.AsyncBase(m, data), null);
  }
  Task(m, data){
    return StartAsTask(this.AsyncBase(m, data), null);
  }
  Async(m, data){
    return this.AsyncBase(m, data);
  }
  Sync(m, data){
    const a=this.EndPoint+"/"+m;
    const a_1=makeHeaders(this.Headers);
    const a_2=makePayload(data);
    let _1=AjaxProvider().Sync(a, a_1, a_2);
    return JSON.parse(_1);
  }
});
export default _c;
