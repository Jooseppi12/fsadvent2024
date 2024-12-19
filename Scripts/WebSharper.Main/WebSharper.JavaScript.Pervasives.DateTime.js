import { replicate, Substring } from "./Microsoft.FSharp.Core.StringModule.js"
export function replace(str, f){
  return str.replace(new RegExp("(\\w)\\1*", "g"), f);
}
export function DateFormatter(date, f){
  const d=new Date(date);
  const padLeft=(minLength, x) => x.length<minLength?replicate(minLength-x.length, "0")+x:x;
  return replace(f, (m) => {
    const m_1=Substring(m, 0, 1);
    if(m_1=="y"){
      const m_2=m.length;
      return m_2===1?String(d.getFullYear()%10):m_2===2?padLeft(2, String(d.getFullYear()%100)):m_2===3?padLeft(3, String(d.getFullYear()%1000)):m_2===4?padLeft(4, String(d.getFullYear())):m_2===5?padLeft(5, String(d.getFullYear())):m;
    }
    else if(m_1=="M"){
      const m_3=m.length;
      return m_3===1?String(d.getMonth()+1):m_3===2?padLeft(2, String(d.getMonth()+1)):m;
    }
    else if(m_1=="d"){
      const m_4=m.length;
      return m_4===1?String(d.getMonth()+1):m_4===2?padLeft(2, String(d.getMonth()+1)):m;
    }
    else if(m_1=="h"){
      const hours=d.getHours();
      const m_5=m.length;
      return m_5===1?String(hours>12?hours%12:hours):m_5===2?padLeft(2, String(hours>12?hours%12:hours)):m;
    }
    else if(m_1=="H"){
      const hours_1=d.getHours();
      const m_6=m.length;
      return m_6===1?String(hours_1):m_6===2?padLeft(2, String(hours_1)):m;
    }
    else if(m_1=="m"){
      const m_7=m.length;
      return m_7===1?String(d.getMinutes()):m_7===2?padLeft(2, String(d.getMinutes())):m;
    }
    else if(m_1=="s"){
      const m_8=m.length;
      return m_8===1?String(d.getSeconds()):m_8===2?padLeft(2, String(d.getSeconds())):m;
    }
    else return m_1=="f"?String(d.getMilliseconds()):m;
  });
}
