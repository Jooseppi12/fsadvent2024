import { TryParse as TryParse_1, Parse as Parse_1 } from "./WebSharper.N.js"
export function TryParse(s, r){
  return TryParse_1(s, 0, 18446744073709551615, r);
}
export function Parse(s){
  return Parse_1(s, 0, 18446744073709551615, "Value was either too large or too small for an UInt64.");
}
