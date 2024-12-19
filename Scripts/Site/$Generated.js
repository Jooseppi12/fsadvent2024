import { LoadLocalTemplates, NamedTemplate } from "../WebSharper.UI/WebSharper.UI.Client.Templates.js"
import { Some } from "../WebSharper.Main/Microsoft.FSharp.Core.FSharpOption`1.js"
export function playerdata(h){
  LoadLocalTemplates("main");
  return h?NamedTemplate("main", Some("playerdata"), h):void 0;
}
