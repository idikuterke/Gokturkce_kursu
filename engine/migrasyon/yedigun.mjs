// Terim değişikliği: Yedice → Yedigün (çekimli biçimler dâhil). Kaynak dosyalara (00_Kaynaklar) dokunulmaz.
import fs from "node:fs";
const dosyalar = [...fs.readdirSync("content").filter(f=>f.endsWith(".json")).map(f=>"content/"+f),
  "Gokturkce_Kurs_Teklifi_Revize.md","Gokturkce_Kurs_Teklifi_Revize.html","brosur-a5.html"];
const KURAL = [[/Yedicelik/g,"Yedigünlük"],[/yedicelik/g,"yedigünlük"],[/Yedicenin/g,"Yedigünün"],[/yedicenin/g,"yedigünün"],
  [/Yedicede/g,"Yedigünde"],[/yedicede/g,"yedigünde"],[/Yedicesi/g,"Yedigünü"],[/yedicesi/g,"yedigünü"],[/Yediceler/g,"Yedigünler"],[/yediceler/g,"yedigünler"],
  [/Yedice/g,"Yedigün"],[/yedice/g,"yedigün"],[/YEDİCE/g,"YEDİGÜN"]];
let toplam=0;
for (const d of dosyalar) {
  let s=fs.readFileSync(d,"utf8"), n=0;
  for (const [re,yeni] of KURAL) s=s.replace(re,()=>{n++;return yeni;});
  if (n){fs.writeFileSync(d,s,"utf8"); console.log(`${d}: ${n} değişiklik`); toplam+=n;}
}
console.log("toplam",toplam); if (/yedice/i.test(dosyalar.map(d=>fs.readFileSync(d,"utf8")).join(""))) console.error("KALAN VAR!");
