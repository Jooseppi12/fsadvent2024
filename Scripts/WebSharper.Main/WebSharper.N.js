import FormatException from "./System.FormatException.js"
import OverflowException from "./System.OverflowException.js"
export function TryParseBool(s, r){
  const m=s.toLowerCase();
  return m=="true"?(r.set(true),true):m=="false"&&(r.set(false),true);
}
export function ParseBool(s){
  const m=s.toLowerCase();
  if(m=="true")return true;
  else if(m=="false")return false;
  else throw new FormatException("New_1", "String was not recognized as a valid Boolean.");
}
export function TryParse(s, min, max, r){
  const x=+s;
  const ok=x===x-x%1&&x>=min&&x<=max;
  if(ok)r.set(x);
  return ok;
}
export function Parse(s, min, max, overflowMsg){
  const x=+s;
  if(x!==x-x%1)throw new FormatException("New_1", "Input string was not in a correct format.");
  else if(x<min||x>max)throw new OverflowException("New_1", overflowMsg);
  else return x;
}
