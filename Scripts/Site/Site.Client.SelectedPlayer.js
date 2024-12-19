import { trimFloatString } from "./Site.Client.js"
import ProviderBuilder from "../WebSharper.UI.Templating.Runtime/WebSharper.UI.Templating.Runtime.Server.ProviderBuilder.js"
import Text from "../WebSharper.UI/WebSharper.UI.TemplateHoleModule.Text.js"
import { EventQ2, CompleteHoles } from "../WebSharper.UI.Templating.Runtime/WebSharper.UI.Templating.Runtime.Server.Handler.js"
import { filter } from "../WebSharper.Main/Microsoft.FSharp.Collections.ListModule.js"
import TemplateInstance from "../WebSharper.UI.Templating.Runtime/WebSharper.UI.Templating.Runtime.Server.TemplateInstance.js"
import { playerdata } from "./$Generated.js"
import { Create } from "../WebSharper.Core.JavaScript/Runtime.js"
export default class SelectedPlayer {
  Name;
  Value;
  Team;
  Id;
  Avg;
  static Create(name, value, team, id, avg){
    return SelectedPlayer.New(name, value, team, id, avg);
  }
  ToDoc(v){
    const A=trimFloatString(String(this.Avg));
    const this_1=new ProviderBuilder("New_1");
    const this_2=(this_1.h.push(new Text("name", this.Name)),this_1);
    const this_3=(this_2.h.push(new Text("value", String(this.Value))),this_2);
    const this_4=(this_3.h.push(new Text("team", this.Team)),this_3);
    const t=(this_4.h.push(new Text("avg", A)),this_4);
    const b=(t.h.push(EventQ2(t.k, "removeplayer", () => t.i, () => {
      v.Update((players) => filter((x) => x.Id!==this.Id, players));
    })),t);
    const p=CompleteHoles(b.k, b.h, []);
    const i=new TemplateInstance(p[1], playerdata(p[0]));
    let _1=(b.i=i,i);
    return _1.Doc;
  }
  static New(Name, Value, Team, Id, Avg){
    return Create(SelectedPlayer, {
      Name:Name, 
      Value:Value, 
      Team:Team, 
      Id:Id, 
      Avg:Avg
    });
  }
}
