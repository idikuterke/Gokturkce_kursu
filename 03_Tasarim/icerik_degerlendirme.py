# -*- coding: utf-8 -*-
"""Değerlendirme Seti içerik modülü: 10 soruluk bilgi yarışması + eğitmen anahtarları + değerlendirme ölçeği."""

KAPAK = """
<div class="kapak">
  <div>
    <div class="kapak-friz">𐰶𐰡𐰃&nbsp;·&nbsp;𐰚𐰜&nbsp;·&nbsp;𐰴𐰃</div>
    <div class="cift-cizgi"></div>
    <div class="kicker">Türk Runik Yazı Sistemi · Okuma-Yazma Eğitimi</div>
    <h1>Değerlendirme Seti</h1>
    <p class="alt-baslik">Göktürkçe Temel Okuma-Yazma Kursu · Bilgi Yarışması ve Sertifikasyon Ölçeği</p>
    <div class="kapak-meta">
      <table>
        <tr><td class="k">BÖLÜM 1</td><td>Göktürkçe Temel Okuma-Yazma Kursu Bilgi Yarışması (10 soru — öğrenci versiyonu)</td></tr>
        <tr><td class="k">BÖLÜM 2</td><td>Yarışma cevap anahtarı (eğitmen)</td></tr>
        <tr><td class="k">BÖLÜM 3</td><td>Bitirme sınavı değerlendirme ölçeği ve puanlama kılavuzu (eğitmen)</td></tr>
        <tr><td class="k">BÖLÜM 4</td><td>Sertifikasyon kriterleri</td></tr>
      </table>
    </div>
  </div>
  <div class="not">Yarışma soruları 4 yedicelik ders kurgusuyla birebir uyumludur; eğitmen bölümü dağıtım öncesi ayrılır.</div>
</div>
"""

BOLUMS = []

BOLUMS.append({
    "kicker": "BÖLÜM 1 · ÖĞRENCİ VERSİYONU",
    "baslik": "Göktürkçe Temel Okuma-Yazma Kursu Bilgi Yarışması",
    "ozet": "4 haftalık eğitimde edinilen bilgileri pekiştiren 10 soruluk değerlendirme.",
    "govde": """
<table class="kimlik-satir"><tr><td class="lb">ADI SOYADI</td><td></td><td class="lb" style="width:22mm">TARİH</td><td style="width:32mm"></td></tr></table>

<div class="soru">
  <p class="soru-baslik"><span class="puan">1. HAFTA</span>Soru 1 — Yazım Yönü ve Kuralları</p>
  <p>Göktürk (Orhun-Yenisey) yazısının orijinal yazım yönü nasıldır ve kelimeleri birbirinden ayırmak için hangi noktalama sembolü kullanılır?</p>
  <p>A) Soldan sağa — Boşluk ( )<br>B) Sağdan sola — Üst üste iki nokta ( : )<br>C) Yukarıdan aşağıya — Noktalı virgül ( ; )<br>D) Soldan sağa — Kısa çizgi ( - )</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">1. HAFTA</span>Soru 2 — Ünlü Harf İmlası</p>
  <p>Göktürkçe imla kurallarına göre kelime içindeki ve kelime sonundaki ünlü (sesli) harflerin yazımıyla ilgili en temel “tuzak” kural hangisidir?</p>
  <p>A) Kelime içindeki ünlüler her zaman yazılır, sonundakiler hiç yazılmaz.<br>B) Tüm ünlü harfler kelimenin her yerinde eksiksiz yazılmak zorundadır.<br>C) Kelime içindeki ilk hece dışındaki ünlüler çoğunlukla yazılmaz; ancak kelime sonundaki ünlüler her zaman yazılır.<br>D) Sadece ince ünlü harfler yazılır, kalın ünlü harfler hiç yazılmaz.</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">2. HAFTA</span>Soru 3 — Kalın ve İnce Ünsüz Uyumu</p>
  <p>“Börü” (kurt) kelimesindeki <b>B</b> harfi ile “Bodun” (millet) kelimesindeki <b>B</b> harfi neden Göktürk alfabesinde farklı sembollerle (gliflerle) yazılır?</p>
  <p>A) Kelimelerin anlamları farklı olduğu için.<br>B) “Börü” ince ünlülü (ö, ü), “Bodun” kalın ünlülü (o, u) bir kelime olduğundan; ünsüz harfler de kalın/ince uyumuna göre farklı glifler alır.<br>C) “Börü” kelimesindeki B harfi kelimenin başında olduğu için.<br>D) Tamamen yazanın kişisel tercihine bağlıdır, kuralı yoktur.</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">2. HAFTA</span>Soru 4 — Tek Formlu Ünsüzler</p>
  <p>Aşağıdaki Göktürkçe ünsüz harflerden hangisinin kalın veya ince ünlülerle kullanımına göre değişen bir formu <b>yoktur</b> (yani tek formlu/nötr bir harftir)?</p>
  <p>A) 𐰉 / 𐰋 (B)<br>B) 𐰑 / 𐰓 (D)<br>C) 𐰲 (Ç)<br>D) 𐰽 / 𐰾 (S)</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">3. HAFTA</span>Soru 5 — Çift Sesli ve Birleşik Tamgalar</p>
  <p>Göktürkçede iki sesin yan yana gelmesiyle oluşan <span class="runic">𐰦</span> (ND / NT) ve <span class="runic">𐰸</span> (OQ / UQ) gibi tamgalara ne ad verilir?</p>
  <p>A) Yarım Tamgalar<br>B) Çift Sesli / Birleşik Tamgalar<br>C) Yabancı Tamgalar<br>D) Sessiz Tamgalar</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">3. HAFTA</span>Soru 6 — Irk Bitig'in Kendine Özgü Tamgaları</p>
  <p>Eski Türkçe fal kitabı olan Irk Bitig'de, Orhun Yazıtları'ndan farklı olarak “koń” (koyun) ve “turńa” (turna) kelimelerinde kullanılan ve damaksal <b>“ny / ń”</b> sesini karşılayan özel tamga hangisidir?</p>
  <p>A) 𐰭 (ng)<br>B) 𐰪 (ny / ń)<br>C) 𐰨 (nç)<br>D) 𐰜 (ük)</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">4. HAFTA</span>Soru 7 — Tarihî Sayı Sayma Düzeni</p>
  <p>Orhun Yazıtları'ndaki sayı sayma mantığına göre yazılmış olan <b>“bir yegirmi”</b> ifadesi, günümüz sayı sisteminde hangi sayıya karşılık gelmektedir?</p>
  <p>A) 21 (Yirmi Bir)<br>B) 11 (On Bir)<br>C) 19 (On Dokuz)<br>D) 12 (On İki)</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">4. HAFTA</span>Soru 8 — Sayı Çözümleme</p>
  <p>Eski Türk sayı sayma mantığına göre <b>23</b> sayısı tarihi metinlerde nasıl söylenirdi?</p>
  <p>A) yirmi üç<br>B) üç otuz (otuzun üçüncüsü)<br>C) iki yirmi üç<br>D) üç yegirmi</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">GENEL KÜLTÜR</span>Soru 9 — Zihinsel Fiil Okuma</p>
  <p>Kül Tigin Yazıtı'nda geçen <span class="cevrim">“öd teŋri yasar, kişioγlı qop ölgeli törimiş”</span> (Zamanı Tanrı yaşar/yönetir, insanoğlu hep ölümlü yaratılmış) ifadesindeki “yasar” ve “törimiş” bilişsel kavramları neyi simgeler?</p>
  <p>A) İnsanın ölümsüzlüğünü<br>B) Evrensel kozmik yasayı ve kaderin mutlak sınırlarını<br>C) Göçebe yaşamın zorluklarını<br>D) Savaş hazırlıklarını</p>
</div>
<div class="soru">
  <p class="soru-baslik"><span class="puan">GENEL UYGULAMA</span>Soru 10 — Transliterasyon Alıştırması</p>
  <p>Göktürk alfabesiyle yazılmış olan <span class="runic tamga-buyuk">𐱅𐰇𐰼𐰜</span> tamgalarının günümüz Latin harfleriyle doğru okunuşu (transliterasyonu) aşağıdakilerden hangisidir?</p>
  <p>A) Tengri<br>B) Türk<br>C) Töre<br>D) Ötüken</p>
</div>
"""
})

BOLUMS.append({
    "kicker": "BÖLÜM 2 · EĞİTMEN",
    "baslik": "Yarışma Cevap Anahtarı",
    "ozet": "",
    "govde": """
<span class="egitmen-tag">EĞİTMEN VERSİYONU</span>
<table class="tablo">
  <tr><th class="merkez" style="width:14mm">Soru</th><th class="merkez" style="width:20mm">Cevap</th><th>Gerekçe</th></tr>
  <tr><td class="merkez">1</td><td class="merkez"><b>B</b></td><td>Sağdan sola yazılır; kelime ayırıcı olarak üst üste iki nokta ( : ) kullanılır.</td></tr>
  <tr><td class="merkez">2</td><td class="merkez"><b>C</b></td><td>Kelime sonundaki ünlüler asla düşürülmez; içindekiler ses uyumuna göre çoğunlukla yazılmaz.</td></tr>
  <tr><td class="merkez">3</td><td class="merkez"><b>B</b></td><td>Göktürkçede ünsüzlerin çoğunun kalın ünlülerle kullanılan 𐰉 ve ince ünlülerle kullanılan 𐰋 gibi kalın-ince çiftleri vardır.</td></tr>
  <tr><td class="merkez">4</td><td class="merkez"><b>C</b></td><td>Ç, M, P, Ş, Z gibi harfler nötrdür; kalınlık-incelik farkına göre değişmez.</td></tr>
  <tr><td class="merkez">5</td><td class="merkez"><b>B</b></td><td>Birleşik sesleri karşılayan özel piktografik kökenli tamgalardır.</td></tr>
  <tr><td class="merkez">6</td><td class="merkez"><b>B</b></td><td>Irk Bitig'de 𐰪 damgası bu kelimelerde çok karakteristik biçimde kullanılır.</td></tr>
  <tr><td class="merkez">7</td><td class="merkez"><b>B</b></td><td>Sayılar bir sonraki ondalık dilimin kaçıncı adımı olduğuna göre söylenirdi; “bir yegirmi” yirminin birinci adımı, yani 11 demektir.</td></tr>
  <tr><td class="merkez">8</td><td class="merkez"><b>B</b></td><td>Otuzun üçüncü adımı anlamına gelen “üç otuz” olarak söylenirdi.</td></tr>
  <tr><td class="merkez">9</td><td class="merkez"><b>B</b></td><td>Kozmik zamanı ve insan hayatının kaçınılmaz sınırlarını ifade eder.</td></tr>
  <tr><td class="merkez">10</td><td class="merkez"><b>B</b></td><td>t-ü-r-k harfleriyle sağdan sola doğru “Türk” yazmaktadır.</td></tr>
</table>
"""
})

BOLUMS.append({
    "kicker": "BÖLÜM 3 · EĞİTMEN",
    "baslik": "Bitirme Sınavı Değerlendirme Ölçeği ve Puanlama Kılavuzu",
    "ozet": "4. yedicenin sonunda uygulanan sertifikasyon sınavının analitik puanlaması.",
    "govde": """
<span class="egitmen-tag">EĞİTMEN VERSİYONU</span>
<table class="tablo">
  <tr><th style="width:34mm">Soru / Kritik Alan</th><th>Puanlama Dökümü</th><th>Çözüm Özeti</th></tr>
  <tr>
    <td><b>Soru 1</b><br>Ünlü Düşmesi ve Tasarruf Kuralı</td>
    <td>Teorik açıklama: <b>15 puan</b><br>Pratik uygulama: <b>10 puan</b></td>
    <td>“Harf ekonomisi ve taş tasarrufu” esastır; kısa ve vurgusuz a/e ünlüleri zihnen tamamlanabilir kabul edilir. <span class="cevrim">esen</span> ➔ <span class="runic">𐰾𐰤</span>; <span class="cevrim">atar</span> ➔ <span class="runic">𐱃𐰺</span>.</td>
  </tr>
  <tr>
    <td><b>Soru 2</b><br>Tarihsel Sayı Sistemi</td>
    <td>Çalışma prensibi: <b>15 puan</b><br>Sayısal karşılık: <b>10 puan</b></td>
    <td>Formül: [Birlik Sayı] + [Bir Sonraki Onluk Hane]. <span class="cevrim">sekiz elig</span>: “elig” 50; 40'tan sonraki 8. adım ➔ <b>48</b>.</td>
  </tr>
  <tr>
    <td><b>Soru 3</b><br>Konum Kısıtlı Ligatür</td>
    <td>Hata analizi: <b>15 puan</b><br>Doğru yazımlar: <b>10 puan</b></td>
    <td>Ligatürler kelime başında ünsüzle başlayan ko/ku/kö/kü/kı hecelerini tek başına temsil edemez. <span class="cevrim">kök</span> ➔ <span class="runic">𐰚𐰜</span>; <span class="cevrim">kıldı</span> ➔ <span class="runic">𐰴𐰃𐰡𐰃</span>.</td>
  </tr>
  <tr>
    <td><b>Soru 4</b><br>İmla İstisnası Analizi</td>
    <td>Dilbilimsel kural: <b>15 puan</b><br>Açıklama: <b>10 puan</b></td>
    <td>“3. Şahıs İyelik ve Belirtme Hâli Kalın Kökte İnce-N İstisnası”: kök kalın olsa da ın/nı ekleri daima İnce N (𐰤) ile yazılır. <span class="cevrim">sabın</span> ➔ <span class="runic">𐰽𐰉𐰤</span>; <span class="cevrim">adgırın</span> ➔ <span class="runic">𐰉𐰑𐰍𐰺𐰤</span>.</td>
  </tr>
</table>
<p class="not">Sınav, ezbere değil tamamen dilbilimsel mantığa dayalıdır; öğrenci yazma çalışmalarındaki yaygın imla hataları analitik olarak tahlil edilip düzeltilerek değerlendirilir.</p>
"""
})

BOLUMS.append({
    "kicker": "BÖLÜM 4",
    "baslik": "Sertifikasyon Kriterleri",
    "ozet": "",
    "govde": """
<div class="bilgi-karti">
  <div class="bk-baslik">KURS TAMAMLAMA VE SERTİFİKA</div>
  <ul>
    <li><b>Devam durumu:</b> 4 yedicenin tamamına katılım esas alınır.</li>
    <li><b>Başarı kriteri:</b> Bitirme sınavında 100 üzerinden en az 70 puan.</li>
    <li><b>Sertifikasyon:</b> Ölçme sınavının ardından 12 soruluk Göktürkçe Okuma-Yazma Öğreneği Bitirme Sınavı çözümlenir; başarılı katılımcılara resmi sertifikalar takdim töreniyle verilir.</li>
    <li><b>Eğitmen değerlendirmesi:</b> Sınav kağıtları eğitmen tarafından yukarıdaki analitik ölçekle çözümlenir; yaygın imla hataları sınıf nezdinde tahlil edilir.</li>
  </ul>
</div>
<p class="kaynak-not">Bu set; bilgi yarışması taslağı, bitirme sınavı şablonu ve analitik cevap anahtarlarından derlenmiştir. Runik diziler kaynak metinlerden aynen alınmıştır.</p>
"""
})
