import Dictionary from "../WebSharper.Main/System.Collections.Generic.Dictionary`2.js"
import { Get } from "../WebSharper.Main/WebSharper.Enumerator.js"
import { isIDisposable } from "../WebSharper.Main/System.IDisposable.js"
export function dict(s){
  const d=new Dictionary("New_5");
  const e=Get(s);
  try {
    while(e.MoveNext())
      {
        const f=e.Current;
        d.DAdd(f[0], f[1]);
      }
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
  return d;
}
