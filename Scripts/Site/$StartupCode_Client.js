import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import Var from "../WebSharper.UI/WebSharper.UI.Var.js"
import FSharpList from "../WebSharper.Main/Microsoft.FSharp.Collections.FSharpList`1.js"
import { OfArray } from "../WebSharper.Collections/Microsoft.FSharp.Collections.MapModule.js"
import { ofSeq } from "../WebSharper.Main/Microsoft.FSharp.Collections.ArrayModule.js"
import { ofArray, concat, choose, groupBy } from "../WebSharper.Main/Microsoft.FSharp.Collections.ListModule.js"
import { gks, MAX_GK, defs, MAX_DEF, mids, MAX_MID, atts, MAX_ATT } from "./Site.Client.js"
import { get_Do, Bind, Const } from "../WebSharper.UI/WebSharper.UI.View.js"
import { sumBy, averageBy } from "../WebSharper.Main/Microsoft.FSharp.Collections.SeqModule.js"
import { Some } from "../WebSharper.Main/Microsoft.FSharp.Core.FSharpOption`1.js"
let _c=Lazy((_i) => class $StartupCode_Client {
  static {
    _c=_i(this);
  }
  static selectedAverage;
  static currentTeamAllocation;
  static currentTotalValue;
  static configuration;
  static MAX_VALUE;
  static MAX_ATT;
  static MAX_MID;
  static MAX_DEF;
  static MAX_GK;
  static atts;
  static mids;
  static defs;
  static gks;
  static {
    this.gks=Var.Create_1(FSharpList.Empty);
    this.defs=Var.Create_1(FSharpList.Empty);
    this.mids=Var.Create_1(FSharpList.Empty);
    this.atts=Var.Create_1(FSharpList.Empty);
    this.MAX_GK=2;
    this.MAX_DEF=5;
    this.MAX_MID=5;
    this.MAX_ATT=3;
    this.MAX_VALUE=1000;
    this.configuration=OfArray(ofSeq(ofArray([[1, [gks(), MAX_GK()]], [2, [defs(), MAX_DEF()]], [3, [mids(), MAX_MID()]], [4, [atts(), MAX_ATT()]]])));
    const _1=get_Do();
    let _2=Bind((a) => Bind((a_1) => Bind((a_2) => Bind((a_3) => Const(sumBy((x) => x.Value, concat([a, a_1, a_2, a_3]))), atts().View), mids().View), defs().View), gks().View);
    this.currentTotalValue=_2;
    const _3=get_Do();
    let _4=Bind((a) => Bind((a_1) => Bind((a_2) => Bind((a_3) => Const(choose((_7) => _7[1].Length===3?Some(_7[0]):null, groupBy((x) => x.Team, concat([a, a_1, a_2, a_3])))), atts().View), mids().View), defs().View), gks().View);
    this.currentTeamAllocation=_4;
    const _5=get_Do();
    let _6=Bind((a) => Bind((a_1) => Bind((a_2) => Bind((a_3) => {
      const a_4=concat([a, a_1, a_2, a_3]);
      let _7=a_4.$==0?0:averageBy((x) => x.Avg, a_4);
      return Const(_7);
    }, atts().View), mids().View), defs().View), gks().View);
    this.selectedAverage=_6;
  }
});
export default _c;
