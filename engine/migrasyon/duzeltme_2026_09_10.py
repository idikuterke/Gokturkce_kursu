# -*- coding: utf-8 -*-
"""İnceleme düzeltmeleri (10.09.2026):
 1) Sertifika + formatif sorular: doğru şık dağılımı (A/B/C/D dengeli), çeldiriciler gerçek öğrenci hatası
 2) Tek sınav sürümü: 12 soru · 60/100 · %80 devam · 45 dk — 4 açık uçlu eski sınav 'açık uçlu pekiştirme' oldu
 4) adgırın: 𐰉𐰑𐰍𐰺𐰤 → 𐰑𐰍𐰺𐰤 (b yok) — tüm belgeler
 8) Değerlendirme seti Soru 9 (genel kültür) çıkarıldı
"""
import json, re, io, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
J = lambda p: json.load(open(p, encoding="utf-8"))
W = lambda p, d: json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

# ---------- 1) Sertifika sınavı — 12 soru, doğru şıklar: A×3 B×3 C×3 D×3 ----------
S = lambda konu, soru, secenekler, dogru, ok, no, yg: {"type": "quiz", "targets": ["slayt", "baski"], "yedigun": yg, "rol": "sertifika",
    "konu": konu, "soru": soru, "secenekler": secenekler, "dogru": dogru, "geriBildirim": {"ok": ok, "no": no}}
SERTIFIKA = [
 S("1 · Yazım Yönü", "Göktürk yazısının yazım yönü ve kelime ayırıcısı nedir?",
   ["Soldan sağa — boşluk", "Sağdan sola — üst üste iki nokta ( : )", "Soldan sağa — üst üste iki nokta ( : )", "Sağdan sola — boşluk"],
   1, "Sağdan sola, ( : ) ayırıcı.", "Yön ve ayırıcı birlikte doğru olmalı: yazıtlarda satır sağdan başlar, kelimeler ( : ) ile ayrılır.", 1),
 S("2 · Ünlü Tamgalar", "Göktürkçede ünlü tamga ve ses sayısı nedir?",
   ["4 tamga, 8 ses", "8 tamga, 8 ses", "4 tamga, 4 ses", "2 tamga, 4 ses"],
   0, "A/E · I/İ · O/U · Ö/Ü — her tamga bir kalın-ince çifti.", "Her ünlü tamga iki sesi karşılar; 4 tamga → 8 ses.", 1),
 S("3 · Kutupluluk", "“Börü” (kurt) ve “bodun” (millet) kelimelerindeki B sesi neden farklı tamgalarla yazılır?",
   ["Börü kelime başında, bodun içseste B taşıdığı için", "Börü tek heceli, bodun iki heceli olduğu için", "Börü ince (ö, ü), bodun kalın (o, u) ünlülü olduğu için ünsüz tamgası ünlü uyumuna göre seçilir", "Bodun özel isim olduğu için"],
   2, "börü ➔ b² (ince), bodun ➔ b¹ (kalın).", "Konum, hece sayısı veya isim türü değil — ünlü uyumu belirler.", 1),
 S("4 · Tasarruf Kuralı", "<b>esen</b> kelimesi <span class=\"runic\">𐰾𐰤</span> biçiminde iki tamgayla yazılır. Sebebi nedir?",
   ["Kelime sonundaki e düşer, baştaki yazılır", "Sözbaşı ve içsesteki kısa e sesleri harf tasarrufu gereği yazılmaz; okur tamamlar", "İnce ünlüler hiçbir konumda yazılmaz", "e sesi için Orhun'da ayrı tamga yoktur"],
   1, "Harf ekonomisi: baştaki ve içteki kısa a/e yazılmaz.", "Kelime sonu ünlüsü asla düşmez; düşen baş ve içsestekilerdir. A/E tamgası (𐰀) vardır.", 2),
 S("5 · Kelime Sonu Ünlüsü", "<b>koku</b> kelimesi <span class=\"runic\">𐰴𐰸𐰆</span> yazılır. Sondaki <span class=\"runic\">𐰆</span> neden ayrıca yazılmıştır?",
   ["OK ligatürü zaten u içerir; sondaki 𐰆 gereksizdir, kâtip fazladan yazmıştır", "Kalın ünlüler her konumda yazılır", "Kelime sonu ünlüsü asla düşürülmez — tasarruf kuralının tek büyük istisnası", "İki heceli kelimelerde son hece tam yazılır"],
   2, "Kelime sonu ünlüsü her zaman yazılır.", "OK ligatürü ikinci hecenin ünsüz+ünlüsünü verir; sondaki u ayrı bir ses ve kelime sonundadır.", 2),
 S("6 · Konum Kısıtı", "<b>kök</b> için <span class=\"runic\">𐰜𐰚</span> yazımı neden hatalıdır?",
   ["ÖK ligatürü yalnız kelime ortasında kullanılır", "Ligatür kalın ünlülü kelimelerde kullanılamaz", "k² yerine k¹ kullanılmalıydı", "Hece damgası kelime başında ünsüzle başlayan kö hecesini tek başına yazamaz; düz k² ile başlanır: 𐰚𐰜"],
   3, "Kelime başı ligatür yasağı: 𐰚𐰜.", "Sorun ünlü kalınlığı değil, ligatürün kelime başındaki konumu.", 2),
 S("7 · İnce-N İstisnası", "Kalın ünlülü <b>sabın</b> (sözünü) kelimesinin sonundaki n neden ince N (<span class=\"runic\">𐰤</span>) ile yazılır?",
   ["Kelime aslında ince ünlülüdür", "n sesi Göktürkçede daima ince N ile yazılır", "Kelime sonundaki ünsüzler her zaman ince yazılır", "3. şahıs iyelik / belirtme eki (-ın/-nı) kalın kökte bile istisnasız ince N ile yazılır"],
   3, "Kalın kökte ince-N istisnası.", "Kalın N (𐰣) vardır ve kökte kullanılır; istisna yalnız bu eklerdedir.", 2),
 S("8 · Tek Formlu Ünsüzler", "Aşağıdakilerden hangisi kalın/ince biçim ayrımı <b>olmayan</b> tamgadır?",
   ["𐰲 (ç)", "𐰉 / 𐰋 (B)", "𐰑 / 𐰓 (D)", "𐰽 / 𐰾 (S)"],
   0, "Ç, M, P, Ş, Z kutupsuzdur.", "Çifti olan harfler kutupludur; tek biçimli olanı arayın.", 2),
 S("9 · Irk Bitig İmlası", "Irk Bitig'de <b>yaş</b> kelimesi <span class=\"runic\">𐰖𐰽</span> yazılır. Bunun sebebi nedir?",
   ["Irk Bitig ş sesini s ile yazar; 𐱁 biçimi bu el yazmasında ince r için kullanılır", "Kelime Irk Bitig lehçesinde “yas” okunur", "Kalın ünlülü kelimelerde ş her zaman s'ye döner", "Fırçayla 𐱁 çizmek zor olduğundan kâtipler s'yi seçmiştir"],
   0, "Mecra değişimi imlayı değiştirdi: ş → s, 𐱁 → r².", "Ses değişmedi, imla değişti; kural kalınlığa bağlı değil.", 3),
 S("10 · Irk Bitig Özel Tamgası", "“koń” (koyun) ve “turńa” (turna) kelimelerindeki damaksal ny/ń sesini karşılayan tamga hangisidir?",
   ["𐰭 (ng)", "𐰨 (nç)", "𐰤 (ince n)", "𐰪 (ny / ń)"],
   3, "𐰪 — Irk Bitig'in karakteristik tamgası.", "ng ve nç farklı kümeler; ince n tek ünsüz. Aranan damaksal n.", 3),
 S("11 · Sayı Sistemi", "<span class=\"cevrim\">sekiz elig</span> hangi sayıdır?",
   ["58", "48", "85", "13"],
   1, "elig (50) hedef onluk; ona yönelen 8. adım = 48.", "Onluk, bulunulan değil ulaşılmak istenen onluktur: 40'tan sonraki 8.", 4),
 S("12 · Okuma", "<span class=\"runic\">𐱅𐰇𐰼𐰜</span> tamgalarının okunuşu hangisidir?",
   ["Tengri", "Töre", "Türk", "Ötüken"],
   2, "t² + ö/ü + r² + ÖK/ÜK ➔ Türk.", "Sağdan sola: ince t ile başlar, ÖK ligatürüyle biter.", 4),
]
assert sorted("ABCD"[q["dogru"]] for q in SERTIFIKA) == list("AAABBBCCCDDD")

p = "content/yedigun-4.json"; d = J(p)
b = d["bolumler"][1]["bloklar"]
d["bolumler"][1]["bloklar"] = [k for k in b if not (k["type"] == "quiz" and k["rol"] == "sertifika")]
kap = [i for i, k in enumerate(d["bolumler"][1]["bloklar"]) if k.get("id") == "kapanis"][0]
d["bolumler"][1]["bloklar"][kap:kap] = SERTIFIKA
W(p, d); print("sertifika: 12 soru,", "".join("ABCD"[q["dogru"]] for q in SERTIFIKA))

# ---------- 1b) Formatif sorular: şık sırasını değiştir (doğru dağılsın), zayıf çeldiricileri düzelt ----------
def sik_don(k, yeni_dogru):
    s = k["secenekler"]; d0 = s[k["dogru"]]; digerleri = [x for i, x in enumerate(s) if i != k["dogru"]]
    yeni = digerleri[:yeni_dogru] + [d0] + digerleri[yeni_dogru:]
    k["secenekler"] = yeni; k["dogru"] = yeni_dogru
PLAN = {  # dosya → [(konu-anahtar, yeni doğru indeks, {çeldirici değişimleri})]
 "content/yedigun-1.json": [("Yazım Yönü", 3, {"Soldan sağa — Kısa çizgi ( - )": "Sağdan sola — boşluk"}), ("Ünlü Harf İmlası", 0, {}), ("Kalın ve İnce", 2, {"Tamamen yazanın kişisel tercihine bağlıdır, kuralı yoktur.": "Bodun kelimesinde b'den sonra o geldiği için ligatür kullanılır."})],
 "content/yedigun-2.json": [("Ünlü Düşmesi", 3, {"Kâtip yanlış yazmıştır.": "Kelime sonundaki n, öncesindeki a'yı da düşürür."}), ("Konum Kısıtı", 0, {"Hata yok; kısa yazım tercih edilebilir.": "IK ligatürü yalnız kalın ünlülü kelimelerde geçerlidir, kıldı incedir."}), ("Tek Formlu", 1, {})],
 "content/yedigun-3.json": [("Tümce Türü", 3, {}), ("Irk Bitig İmlası", 0, {}), ("Irk Bitig Özel", 2, {}), ("Yenisey Ek", 1, {})],
}
for f, plan in PLAN.items():
    d = J(f)
    qs = [k for bb in d["bolumler"] for k in bb["bloklar"] if k["type"] == "quiz"]
    for anahtar, yeni, degis in plan:
        k = next(q for q in qs if anahtar in q["konu"])
        k["secenekler"] = [degis.get(x, x) for x in k["secenekler"]]
        sik_don(k, yeni)
    W(f, d); print(f[8:-5], "formatif:", "".join("ABCD"[k["dogru"]] for k in qs))

# ---------- 4) adgırın ----------
for f in ["content/degerlendirme.json", "content/kitapcik.json", "content/yedigun-2.json", "content/yapraklar.json"]:
    s = open(f, encoding="utf-8").read(); n = s.count("𐰉𐰑𐰍𐰺𐰤")
    s = s.replace("𐰉𐰑𐰍𐰺𐰤", "𐰑𐰍𐰺𐰤")
    s = re.sub(r"[Kk]alın b\s*\+\s*kalın d\s*\+\s*kalın g\s*\+\s*kalın r\s*\+\s*[İi]nce N", "kalın d + kalın g + kalın r + ince N", s)
    s = s.replace("b¹ + d¹ + g¹ + r¹ + n² — kalın kök, ince N.", "d¹ + g¹ + r¹ + n² — baştaki a ve içses ı'lar düşer; kalın kök, ince N.")
    s = s.replace("(Kalın b + kalın d + kalın g + kalın r + İnce N 𐰤)", "(Kalın d + kalın g + kalın r + İnce N 𐰤 — sözbaşı a ve içses ı'lar düşer)")
    open(f, "w", encoding="utf-8").write(s); print(f, "adgırın düzeltildi:", n)

# ---------- 2) Tek sınav sürümü: eski 4 açık uçlu → 'açık uçlu pekiştirme' ----------
p = "content/yapraklar.json"; d = J(p); b4 = d["bolumler"][3]
b4["baslik"] = "Açık Uçlu Pekiştirme Soruları (Sınıf İçi Yazma Çalışması)"; b4["kicker"] = "4. YEDİGÜN · ATÖLYE"
b4["ozet"] = "Sertifika sınavı DEĞİLDİR. Bitirme sınavı 12 soruluk ayrı kâğıttır (07_Bitirme_Sinavi): geçme 60/100, %80 devam, 45 dk."
for k in b4["bloklar"]:
    if k["type"] == "prose":
        h = k["html"]
        h = h.replace("4. YEDİGÜN · BİTİRME SINAVI", "4. YEDİGÜN · AÇIK UÇLU PEKİŞTİRME").replace("Göktürkçe Temel Okuma-Yazma Eğitimi Sertifikasyon Sınavı", "Sınıf İçi Yazma ve Tahlil Çalışması")
        h = re.sub(r'<td class=\\?"lb\\?"[^>]*>BAŞARI PUANI</td><td[^>]*>100 üzerinden en az 70</td>', '<td class="lb">NOT</td><td>Sertifika sınavı ayrı kâğıttır (12 soru · 60/100)</td>', h)
        h = h.replace("100 üzerinden en az 70", "sertifika dışı")
        h = re.sub(r'<span class=\\?"puan\\?">25 PUAN</span>', '<span class="puan">TAHLİL</span>', h)
        h = h.replace("Sertifikasyon: Devam durumu ve sınav başarısı (≥ 70/100) birlikte değerlendirilir;", "Sertifikasyon: %80 devam ve 12 soruluk bitirme sınavında 60/100 birlikte değerlendirilir;")
        k["html"] = h
W(p, d); print("yapraklar bölüm 4 → pekiştirme")

p = "content/degerlendirme.json"; d = J(p)
for bb in d["bolumler"]:
    for k in bb["bloklar"]:
        if k["type"] != "prose": continue
        h = k["html"]
        h = re.sub(r'<div class="soru">\s*<p class="soru-baslik"><span class="puan">GENEL KÜLTÜR</span>Soru 9 — Zihinsel Fiil Okuma</p>.*?</div>\s*', "", h, flags=re.S)
        h = re.sub(r'<tr><td class="merkez">9</td>.*?</tr>\s*', "", h, flags=re.S)
        h = h.replace("Soru 10 —", "Soru 9 —").replace('<td class="merkez">10</td>', '<td class="merkez">9</td>')
        h = h.replace("10 soruluk", "9 soruluk")
        h = h.replace("4 yedigünün tamamına katılım esas alınır.", "%80 devam (4 Yedigün'de en fazla bir ders devamsızlığı).")
        h = h.replace("Bitirme sınavında 100 üzerinden en az 70 puan.", "12 soruluk bitirme sınavında 100 üzerinden en az 60 puan (8 doğru); 45 dakika.")
        k["html"] = h
b3 = d["bolumler"][2]; b3["baslik"] = "Açık Uçlu Pekiştirme — Değerlendirme Ölçeği (sertifika dışı)"
b3["ozet"] = "Çalışma yapraklarındaki 4 açık uçlu tahlil sorusu için puanlama önerisi. Sertifika sınavı 12 soruluk çoktan seçmeli kâğıttır (07_Bitirme_Sinavi)."
d["bolumler"][0]["ozet"] = "9 soruluk formatif bilgi yarışması (sertifika dışı). Sertifika sınavı ayrı belgedir: 07_Bitirme_Sinavi (12 soru · 60/100)."
W(p, d); print("degerlendirme: Q9 çıkarıldı, kriterler 60/%80")

p = "content/kitapcik.json"; d = J(p)
d["bolumler"][2]["baslik"] = "Açık Uçlu Pekiştirme Soruları ve Analitik Çözümleri"
d["bolumler"][2]["ozet"] = "Sınıf içi yazma/tahlil çalışması. Sertifika sınavı: 12 çoktan seçmeli soru · 60/100 · %80 devam · 45 dk (07_Bitirme_Sinavi)."
d["bolumler"][3]["baslik"] = "Tüm Alıştırmalar ve Pekiştirme Soruları İçin Analitik Cevap Anahtarı"
for bb in d["bolumler"]:
    for k in bb["bloklar"]:
        if k["type"] == "prose":
            k["html"] = k["html"].replace("Sınav sonunda katılımcılara resmi sertifikaları", "12 soruluk çoktan seçmeli bitirme sınavı (60/100, 45 dk) sonunda %80 devam koşulunu sağlayan katılımcılara sertifikaları")
            k["html"] = re.sub(r'<span class="puan">25 PUAN</span>', '<span class="puan">TAHLİL</span>', k["html"])
W(p, d); print("kitapçık başlıkları")
