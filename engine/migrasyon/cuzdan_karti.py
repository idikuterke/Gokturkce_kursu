# -*- coding: utf-8 -*-
"""content/cuzdan-karti.json üretir — A6 (105×148 mm) cüzdan kontrol kartı, ön/arka iki sayfa.
Tamga tablosu content/tamgalar.json'dan (unluler, kutuplu, kutupsuz, ligatur) türetilir; elle tamga yazılmaz.
Kurallar sözlük kelimeleriyle örneklenir (content/sozluk.json — mantıksal sıra).
Tekrar çalıştırılabilir: tamgalar/sözlük değişirse kartı yeniden üretir.
"""
import io, json, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
ROOT = "E:/Gokturkce_kursu"
tam = {g["id"]: g for g in json.load(open(f"{ROOT}/content/tamgalar.json", encoding="utf-8"))["gruplar"]}
soz = json.load(open(f"{ROOT}/content/sozluk.json", encoding="utf-8"))["kelimeler"]
chr_ = lambda cp: chr(int(cp[2:], 16))
R = lambda s: f'<span class="rn">{s}</span>'
kisa = lambda d: d.split("—")[0].strip()          # "b¹ — kalın B" → "b¹"

# ---- ön yüz: 5 kural ----
kurallar = [
    ("Yön", f"Sağdan sola okunur; kelimeler ⁚ ile ayrılır. {R(soz['türk'])} = türk"),
    ("Ünlü düşmesi", f"Sözbaşı a/e ve içses ünlüleri çoğunlukla yazılmaz; sondaki ünlü daima yazılır. {R(soz['ata'])} = ata, {R(soz['adgırın'])} = adgırın"),
    ("Kalın / ince", f"Ünsüz, kelimenin ünlüsüne göre seçilir: ¹ kalın (a ı o u), ² ince (e i ö ü). {R(soz['bay'])} bay · {R(soz['bir'])} bir"),
    ("Kutupsuz", "ç m ŋ p ş z tek biçimlidir; kalın-ince ayrımı yoktur. ŋ = damaksal geniz (ng), yumuşak g değildir."),
    ("Ligatür", f"nt/nd, lt/ld, nç ve ok/uk, ök/ük, ık, iç tek işaretle yazılır. {R(soz['koku'])} = koku"),
]
on = ['<div class="kart-sayfa on">',
      '<div class="k-baslik"><span class="k-kicker">Göktürkçe · Yedigün Kursu</span><h1>Yazım Kontrol Kartı</h1></div>',
      '<ol class="k-kurallar">'] + [f"<li><b>{b}</b> {m}</li>" for b, m in kurallar] + [
      '</ol>',
      '<div class="k-dip">Yazdıktan sonra: yön ✓ · ünlü ✓ · kalın/ince ✓ · ayırıcı ✓</div>',
      '</div>']

# ---- arka yüz: tamga tablosu ----
def hucre(t, deger=None):
    return f'<div class="k-h"><span class="rn">{chr_(t["cp"])}</span><span class="k-d">{deger or kisa(t["deger"])}</span></div>'
unlu = "".join(hucre(t, t["deger"].replace(" / ", "/").lower()) for t in tam["unluler"]["tamgalar"])
kut = tam["kutuplu"]["tamgalar"]
kalin = "".join(hucre(t) for t in kut if "¹" in t["deger"])
ince = "".join(hucre(t) for t in kut if "²" in t["deger"])
kutupsuz = "".join(hucre(t) for t in tam["kutupsuz"]["tamgalar"] if "Irk Bitig" not in t["deger"])
lig = "".join(hucre(t, t["deger"].split(" · ")[0].lower().replace(" / ","/")) for t in tam["ligatur"]["tamgalar"])
arka = ['<div class="kart-sayfa arka">',
        f'<div class="k-satir"><span class="k-etiket">Ünlü</span><div class="k-grid">{unlu}</div></div>',
        f'<div class="k-satir"><span class="k-etiket">Kalın ¹</span><div class="k-grid">{kalin}</div></div>',
        f'<div class="k-satir"><span class="k-etiket">İnce ²</span><div class="k-grid">{ince}</div></div>',
        f'<div class="k-satir"><span class="k-etiket">Kutupsuz</span><div class="k-grid">{kutupsuz}</div></div>',
        f'<div class="k-satir"><span class="k-etiket">Ligatür</span><div class="k-grid">{lig}</div></div>',
        '<div class="k-dip">Eşik: 12 soru · 8 doğru (60/100) · %80 devam &nbsp;|&nbsp; Unicode U+10C00–10C4F, mantıksal sıra</div>',
        '</div>']

doc = {
    "id": "cuzdan-karti", "tur": "yaprak", "sayfa": "A6",
    "baslik": "Yazım Kontrol Kartı (A6 cüzdan kartı)",
    "altbaslik": "Ön: 5 kural · Arka: tamga tablosu — çift yüzlü, kısa kenardan çevir",
    "surum": "1.0 — 2026-09-10",
    "kapakHtml": "\n".join(on),
    "bolumler": [{"id": "arka", "baslik": "Tamga Tablosu", "bloklar": [
        {"type": "prose", "targets": ["baski"], "html": "\n".join(arka)}]}],
}
json.dump(doc, open(f"{ROOT}/content/cuzdan-karti.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("cuzdan-karti.json yazıldı | kalın", len([t for t in kut if "¹" in t["deger"]]), "ince", len([t for t in kut if "²" in t["deger"]]))
