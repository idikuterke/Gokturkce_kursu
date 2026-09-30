// Orhun DB tutarlılık taraması: runik iskelet ↔ transkripsiyon (kelime kelime).
// Amaç: kaynak sitedeki (turkbitig.com) yazım/dizgi hatalarını yakalamak — ters sıra, yer değiştirmiş/yanlış tamga.
// Yöntem: iki tarafı da ünsüz iskeletine indir (ünlüler serbest: transkripsiyonda küçük harf = yazılmayan ünlü).
// Bilinen, gerekçeli sapmalar 05_Kaynak_DB/orhun-db-istisna.json'da tutulur; istisna bayatlarsa (artık sapma yoksa) kapı kırmızıdır.
import fs from "node:fs";

// cp → ünsüz iskelet değeri ('' = ünlü). D→T ve çift ünsüz sadeleştirmesi normalize()'da.
const CP = {};
const ata = (ilk, deger, n = 1) => { for (let i = 0; i < n; i++) CP[ilk + i] = deger; };
for (const c of [0x10c00, 0x10c01, 0x10c02, 0x10c03, 0x10c04, 0x10c05, 0x10c06, 0x10c07, 0x10c08]) CP[c] = "";
ata(0x10c09, "B", 4); ata(0x10c0d, "G", 4); ata(0x10c11, "T", 3); ata(0x10c14, "Z", 2); ata(0x10c16, "Y", 4);
ata(0x10c1a, "K", 4); ata(0x10c1e, "L", 3); CP[0x10c21] = "LT"; CP[0x10c22] = "M"; ata(0x10c23, "N", 3);
ata(0x10c26, "NT", 2); ata(0x10c28, "NC", 2); ata(0x10c2a, "NY", 2); ata(0x10c2c, "NG", 3); ata(0x10c2f, "P", 2);
ata(0x10c31, "C", 3); ata(0x10c34, "K", 6); ata(0x10c3a, "R", 3); ata(0x10c3d, "S", 2); ata(0x10c3f, "S", 4);
CP[0x10c43] = "T"; CP[0x10c44] = "T"; CP[0x10c45] = "T"; CP[0x10c46] = "T"; CP[0x10c47] = "T"; CP[0x10c48] = "BS";

const sadele = (s) => s.replace(/(.)\1+/g, "$1");

export function runikIskelet(kelime) {
  let s = "";
  for (const ch of kelime) { const v = CP[ch.codePointAt(0)]; if (v !== undefined) s += v; }
  return sadele(s);
}

// Transkripsiyon: ünlüleri at, Ŋ→NG, ñ/ny/yn → NY, ş→S, ç→C, d→T (ND/NT, LD/LT, -DI/-TI oynaklığı yazıda ayrımsız).
export function transIskelet(kelime) {
  let s = kelime.toUpperCase().replace(/İ/g, "I").replace(/Ŋ/g, "NG").replace(/Ñ/g, "NY").replace(/Ş/g, "S").replace(/Ç/g, "C").replace(/D/g, "T");
  s = s.replace(/[^BGKLNRSTCMPZY]/g, "");
  return s;
}

// Kaynak yazım oynaklıkları (hata sayılmaz): ŋ yerine g (täŋri→tägri, yañılsar→yagılsar); ñ'nin YN ↔ NY sıralaması.
export function uyumlu(ri, ti) {
  // Her NG → {NG, G}, her YN → {YN, NY} seçeneği bağımsız; varyantları üret, çift ünsüzleri sadeleştirip karşılaştır.
  let v = [""];
  for (let i = 0; i < ti.length; i++) {
    const iki = ti.slice(i, i + 2);
    if (iki === "NG") { v = v.flatMap((x) => [x + "NG", x + "G"]); i++; }
    else if (iki === "YN") { v = v.flatMap((x) => [x + "YN", x + "NY"]); i++; }
    else v = v.map((x) => x + ti[i]);
  }
  return v.some((x) => sadele(x) === ri);
}

const kelimeler = (s) => s.split(":").map((w) => w.trim()).filter(Boolean);

// Dize → sapmalar [{id, sira, runik, trans, ri, ti}] ; kelime sayısı farklıysa sira=-1
export function sapmalar(dizeler) {
  const out = [];
  for (const d of dizeler) {
    const R = kelimeler(d.gokturkce), T = kelimeler(d.transkripsiyon);
    if (R.length !== T.length) { out.push({ id: d.id, sira: -1, runik: String(R.length), trans: String(T.length), ri: "", ti: "" }); continue; }
    R.forEach((r, i) => {
      if (/[-\[]/.test(r) || /[-\[]/.test(T[i])) return;   // yıpranmış/onarım
      const ri = runikIskelet(r), ti = transIskelet(T[i]);
      if (!uyumlu(ri, ti)) out.push({ id: d.id, sira: i, runik: r, trans: T[i], ri, ti });
    });
  }
  return out;
}

// Düzeltme yaması: [{id, sira, alan: "gokturkce"|"transkripsiyon", eski, yeni, gerekce}] — sira: dizedeki kelime indeksi (0 tabanlı)
export function yamaUygula(dizeler, yamalar) {
  const uyg = [];
  for (const y of yamalar) {
    const d = dizeler.find((x) => x.id === y.id);
    if (!d) throw new Error(`yama: dize yok ${y.id}`);
    const alan = y.alan || "gokturkce";
    const parcalar = d[alan].split(/(\s:\s|\s:$)/);   // kelime, ayraç, kelime...
    let n = -1, bulundu = false;
    for (let i = 0; i < parcalar.length; i += 2) {
      if (!parcalar[i].trim()) continue;
      if (++n === y.sira) {
        if (parcalar[i].trim() === y.yeni) { bulundu = true; break; }   // zaten uygulanmış (idempotent)
        if (parcalar[i].trim() !== y.eski) throw new Error(`yama ${y.id}#${y.sira}: beklenen '${y.eski}', bulunan '${parcalar[i].trim()}'`);
        parcalar[i] = parcalar[i].replace(y.eski, y.yeni); bulundu = true; uyg.push(y); break;
      }
    }
    if (!bulundu) throw new Error(`yama ${y.id}#${y.sira}: kelime yok`);
    d[alan] = parcalar.join("");
  }
  return uyg;
}

export function yamalariOku(P) {
  const f = P("05_Kaynak_DB/orhun-db-duzeltmeler.json");
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")).yamalar : [];
}
export function istisnaOku(P) {
  const f = P("05_Kaynak_DB/orhun-db-istisna.json");
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")).istisnalar : [];
}

// Kapı: istisnasız sapma = hata; sapması kalmayan istisna = bayat (hata)
export function denetle(dizeler, istisnalar) {
  const hata = [];
  const sap = sapmalar(dizeler);
  const anahtar = (x) => `${x.id}#${x.sira}`;
  const izinli = new Map(istisnalar.map((x) => [anahtar(x), x]));
  const gorulen = new Set();
  for (const s of sap) {
    gorulen.add(anahtar(s));
    if (!izinli.has(anahtar(s)))
      hata.push(`[orhun-db] ${s.id} kelime ${s.sira + 1}: runik ${s.runik} (${s.ri}) ↔ transkripsiyon ${s.trans} (${s.ti}) — düzeltme yamasına ya da gerekçeli istisnaya ekle`);
  }
  for (const k of izinli.keys()) if (!gorulen.has(k)) hata.push(`[orhun-db] bayat istisna ${k}: sapma artık yok, istisnadan çıkar`);
  return { hata, sapma: sap.length, istisna: istisnalar.length };
}
