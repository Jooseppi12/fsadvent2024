import { ofSeq } from "./Microsoft.FSharp.Collections.ArrayModule.js"
import { map } from "./Microsoft.FSharp.Collections.SeqModule.js"
export function create2D(rows){
  const arr=ofSeq(map(ofSeq, rows));
  arr.dims=2;
  return arr;
}
