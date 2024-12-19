import { ofSeq, map, exists, contains, append, ofArray } from "../WebSharper.Main/Microsoft.FSharp.Collections.ListModule.js"
import { range, toInt } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.js"
import { Get } from "../WebSharper.Main/WebSharper.Enumerator.js"
import { isIDisposable } from "../WebSharper.Main/System.IDisposable.js"
import { Replace, Substring } from "../WebSharper.Main/Microsoft.FSharp.Core.StringModule.js"
import { Equals, Compare } from "../WebSharper.Main/Microsoft.FSharp.Core.Operators.Unchecked.js"
import { Start, Delay, Bind, Zero } from "../WebSharper.Main/WebSharper.Concurrency.js"
import Doc from "../WebSharper.UI/WebSharper.UI.Doc.js"
import { GetAsync } from "../WebSharper.UI/WebSharper.UI.View.js"
import { toSafe } from "../WebSharper.Main/WebSharper.Utils.js"
import SelectedPlayer_1 from "./Site.Client.SelectedPlayer.js"
import $StartupCode_Client from "./$StartupCode_Client.js"
export function Main(){
  const dtgk=new globalThis.DataTable("#gk");
  const dtdef=new globalThis.DataTable("#def");
  const dtmid=new globalThis.DataTable("#mid");
  const dtatt=new globalThis.DataTable("#att");
  const tabs=globalThis.document.getElementsByClassName("tab");
  const tabBodies=globalThis.document.getElementsByClassName("tab-body");
  const i=ofSeq(range(0, tabs.length-1));
  const e=Get(i);
  try {
    while(e.MoveNext())
      ((() => {
        const element=tabs[e.Current];
        return element.addEventListener("click", () => {
          const i_1=ofSeq(range(0, tabBodies.length-1));
          const e_1=Get(i_1);
          try {
            while(e_1.MoveNext())
              tabBodies[e_1.Current].classList.add("hidden");
          }
          finally {
            if(typeof e_1=="object"&&isIDisposable(e_1))e_1.Dispose();
          }
          const idToShow=Replace(element.id, "tab", "body");
          globalThis.document.getElementById(idToShow).classList.remove("hidden");
          const currentActive=globalThis.document.querySelector(".tab.active");
          if(!Equals(currentActive, null))currentActive.classList.remove("active");
          return element.classList.add("active");
        });
      })());
  }
  finally {
    if(typeof e=="object"&&isIDisposable(e))e.Dispose();
  }
  globalThis.document.getElementById("gk-tab").click();
  dtgk.on("click", ".playerAdder", (ev) => {
    Start(onclickAddPlayer(ev.target), null);
  });
  dtdef.on("click", ".playerAdder", (ev) => {
    Start(onclickAddPlayer(ev.target), null);
  });
  dtmid.on("click", ".playerAdder", (ev) => {
    Start(onclickAddPlayer(ev.target), null);
  });
  dtatt.on("click", ".playerAdder", (ev) => {
    Start(onclickAddPlayer(ev.target), null);
  });
}
export function CurrentTotalValue(){
  return Doc.BindView((x) => Doc.TextNode(String(x)), currentTotalValue());
}
export function CurrentAverage(){
  return Doc.BindView((x) => Doc.TextNode(String(x)), selectedAverage());
}
export function SelectedAtts(){
  return SelectedPlayer(atts());
}
export function SelectedMids(){
  return SelectedPlayer(mids());
}
export function SelectedDefs(){
  return SelectedPlayer(defs());
}
export function SelectedGKs(){
  return SelectedPlayer(gks());
}
export function SelectedPlayer(v){
  return Doc.BindView((players) => players.$==0?Doc.TextNode("None selected"):Doc.Concat(map((x) => x.ToDoc(v), players)), v.View);
}
export function onclickAddPlayer(el){
  const _1=null;
  return Delay(() => {
    const tr=el.parentElement.parentElement;
    const elementType=toInt(Number(tr.getAttribute("data-playertype")));
    const p=configuration().get_Item(elementType);
    const var_1=p[0];
    const max=p[1];
    return Bind(GetAsync(var_1.View), (a) => {
      if(a.Length<max){
        const playerName=tr.getAttribute("data-playername");
        const playerValue=toInt(Number(tr.getAttribute("data-playervalue")));
        const playerTeam=tr.getAttribute("data-playerteam");
        const playerId=toInt(Number(tr.getAttribute("data-playerid")));
        const playerAvg=Number(tr.getAttribute("data-playeravg"));
        return Bind(GetAsync(currentTeamAllocation()), (a_1) => Bind(GetAsync(currentTotalValue()), (a_2) => exists((p_1) => playerId===p_1.Id, a)?(alert("This player is already part of your team"),Zero()):contains(playerTeam, a_1)?(alert("You already have the maximum number of players selected from "+toSafe(playerTeam)),Zero()):a_2+playerValue>MAX_VALUE()?(alert("The selected player would put you above the budget limit"),Zero()):(var_1.Update((players) => append(players, ofArray([SelectedPlayer_1.Create(playerName, playerValue, playerTeam, playerId, playerAvg)]))),Zero())));
      }
      else {
        alert("You already have the maximum number of "+toSafe(getTypeString(elementType))+" selected");
        return Zero();
      }
    });
  });
}
export function getTypeString(i){
  return i===1?"goalkeepers":i===2?"defenders":i===3?"midfielders":i===4?"attackers":"N/A";
}
export function selectedAverage(){
  return $StartupCode_Client.selectedAverage;
}
export function currentTeamAllocation(){
  return $StartupCode_Client.currentTeamAllocation;
}
export function currentTotalValue(){
  return $StartupCode_Client.currentTotalValue;
}
export function configuration(){
  return $StartupCode_Client.configuration;
}
export function MAX_VALUE(){
  return $StartupCode_Client.MAX_VALUE;
}
export function MAX_ATT(){
  return $StartupCode_Client.MAX_ATT;
}
export function MAX_MID(){
  return $StartupCode_Client.MAX_MID;
}
export function MAX_DEF(){
  return $StartupCode_Client.MAX_DEF;
}
export function MAX_GK(){
  return $StartupCode_Client.MAX_GK;
}
export function atts(){
  return $StartupCode_Client.atts;
}
export function mids(){
  return $StartupCode_Client.mids;
}
export function defs(){
  return $StartupCode_Client.defs;
}
export function gks(){
  return $StartupCode_Client.gks;
}
export function trimFloatString(floatS){
  const a=floatS.length;
  const b=5;
  let _1=Compare(a, b)===-1?a:b;
  return Substring(floatS, 0, _1);
}
