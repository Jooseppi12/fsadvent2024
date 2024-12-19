import { StartWithContinuations } from "../WebSharper.Main/WebSharper.Concurrency.js"
export function OnError(e){
  return console.log("WebSharper UI: Uncaught asynchronous exception", e);
}
export function StartTo(comp, k){
  StartWithContinuations(comp, k, (e) => {
    OnError(e);
  }, () => { }, null);
}
