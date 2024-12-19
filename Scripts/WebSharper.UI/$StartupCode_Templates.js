import { Lazy } from "../WebSharper.Core.JavaScript/Runtime.js"
import Dictionary from "../WebSharper.Main/System.Collections.Generic.Dictionary`2.js"
let _c=Lazy((_i) => class $StartupCode_Templates {
  static {
    _c=_i(this);
  }
  static RenderedFullDocTemplate;
  static TextHoleRE;
  static GlobalHoles;
  static LocalTemplatesLoaded;
  static LoadedTemplates;
  static {
    this.LoadedTemplates=new Dictionary("New_5");
    this.LocalTemplatesLoaded=false;
    this.GlobalHoles=new Dictionary("New_5");
    this.TextHoleRE="\\${([^}]+)}";
    this.RenderedFullDocTemplate=null;
  }
});
export default _c;
