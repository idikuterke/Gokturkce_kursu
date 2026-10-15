# Göktürkçe Öğrenek: Bozkır Yolculuğu & Kadim Tamgalar Yenilenmesi

Bu plan; soğuk lacivert/siyah renkleri sıcak bozkır turkuazı, zümrüt, bronz ve antik taş/parşömen dokusuyla değiştirmeyi, Duolingo benzeri kavisli dikey öğrenme patikası (kilitli düğümler, yıldız sandıkları, bölüm sonu Toyu) kurmayı, runik taş tutan bilge bozkır alpi maskotunu entegre etmeyi ve üst navigasyonu kompakt 4 ana sekmeye sadeleştirmeyi kapsar.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> Kullanıcı yanıtlarına ve tasarım anayasasına göre kesinleşen kararlar aşağıdadır:

- **Kesinleşen Karar 1 (Renk & Atmosfer)**: Soğuk mavi/lacivert yerine derin turkuaz (`#0F383B`, `#164E63`), antik zümrüt, bronz ve sıcak altın sarısı (`#F59E0B`, `#D97706`) detaylar. Arka planda hafif antik taş ve Orhun bengü taşı rölyef dokusu. Pembe butonlar yerine Duolingo tarzı kabartmalı, derin gölgeli 3D turkuaz ve altın düğmeler.
- **Kesinleşen Karar 2 (Maskot & Karakter)**: Runik tamga taşı tutan bilge bozkır alpi. Tarihi runik harflerin hatasızlığı garanti altına alınacak (hallüsinasyon riski sıfır olan saf vektör/SVG çizim ve gerçek Orhun tamgası). Ayrıca kullanıcının ComfyUI animasyon/video pipeline'ından üreteceği özel animasyonları doğrudan besleyebileceği modüler bir medya yuvası (`customVideoSrc` / `customImageSrc` prop desteği) sağlanacak.
- **Kesinleşen Karar 3 (Öğrenme Yolu)**: Dikey kıvrımlı (Duolingo Path) harita. Her ünitede kavisli düğümler (tamamlandı, aktif, kilitli), ara ödül içeren "Yıldız Sandıkları" ve ünite sonunda büyük "Bozkır Toyu & Bengü Taş Sınavı".
- **Kesinleşen Karar 4 (Üst Navigasyon)**: 8 dağınık sekme yerine 4 ana sekme:
  1. `Öğren` (Dikey yolculuk patikası & üniteler)
  2. `Alıştırma` (Kartlarla çalışma, tamga çizim pratiği, hızlı can tazeleme)
  3. `Keşfet` (Bengü Taşlar / Kitabeler okuyucu, runik klavye, sözlük ve PDF belgeler)
  4. `Profil` (Ateş serisi/streak, bozkır rütbeleri, nişanlar ve öğrenme grafikleri)

---

## 1. Overview & Core Concept

- **Ne Yapıyor**: Göktürkçe öğrenimini kuru bir alfabe tablosundan çıkarıp Duolingo dinamizmiyle bozkır destanını birleştiren; sesli, çizimli, hikayeli ve seviyeli bir antik Türk dili öğrenme yolculuğuna dönüştürür.
- **Hedef Kitle**: Türk tarihine, Orhun Yazıtları'na ve kadim tamgalara ilgi duyan; eğlenceli, motive edici ve görsel olarak zengin bir arayüzle sıfırdan Göktürkçe öğrenmek isteyen tüm kullanıcılar.
- **Temel Değer**: Tarihsel doğruluktan (otantik Orhun tamgaları ve Tonyukuk/Kül Tigin kitabeleri) ödün vermeden, modern oyunlaştırma mekanikleriyle (günlük ateş serisi, kilitli dikey patika, çizim geribildirimi) sürdürülebilir öğrenme alışkanlığı kazandırmak.

---

## 2. User Experience & Visual Design

### A. Üst Bar Sözleşmesi (Top Bar Contract)
Tek satır, 3 bölge kuralı:
1. **Sol (Marka)**: Antik damga simgesi (`𐱅`) + zarif serif fontla `Göktürkçe Öğrenek` kelime markası.
2. **Orta (Ana Navigasyon)**: 4 temiz tek-satır sekme (`Öğren`, `Alıştırma`, `Keşfet`, `Profil`). "Keşfet" sekmesinde alt menü ile Bengü Taşlar, Runik Yazıcı, Sözlük ve PDF Kütüphanesi açılır.
3. **Sağ (Kompakt Metrikler & Aksiyon)**:
   - Duolingo tarzı dairesel/kompakt alev serisi (`🔥 7 Gün`),
   - Kristalize tecrübe puanı (`⚡ XP`),
   - Kademeli Can göstergesi (`❤️ 5/5`),
   - Günlük Görevler & Toy sandığı butonu.

### B. Duolingo Tarzı Dikey Öğrenme Patikası (The Steppe Path)
- **Kavisli Zikzak Düğümler**: Üniteler yukarıdan aşağıya doğru bir bozkır kervan yolu gibi kıvrılır.
- **Düğüm Durumları**:
  - *Tamamlanmış*: Altın kenarlık, turkuaz dolgu ve beyaz tik işareti.
  - *Mevcut / Aktif*: Parlayan altın hare, nabız gibi atan 3D yükseltilmiş düğme ve üzerinde "BAŞLA" göstergesi.
  - *Kilitli*: Mat bronz/taş rengi, kilit ikonu.
- **Yıldız Sandıkları (Star Chests)**: Derslerin arasında açılmayı bekleyen ahşap-bronz sandıklar; tıklandığında sürpriz XP ve can verir.
- **Ünite Sonu Toyu**: Her ünitenin sonunda kale/kurultay şeklinde görselleştirilmiş final sınavı kapısı.

### C. Runik Taş Tutan Bilge Bozkır Alpi Maskotu
- Sol üst kahraman kartında öğrenciye rehberlik eden alp; başında börk, üzerinde geleneksel alp kaftanı, elinde parlayan otantik bir Göktürkçe bengü taşı tutar.
- SVG tabanlı ve CSS ile canlı nefes alma, göz kırpma ve tebrik jestlerine sahiptir (asla hatalı harf üretmez).
- Kullanıcı dilediğinde ComfyUI'den üreteceği webm/mp4 animasyonlu videosunu ya da görselini tek satırla bağlayabilir (`customMascotSlot`).

### D. İnteraktif "Günün Tamgası" & Hikaye Modülü
- Sağ taraftaki kompakt panelde günün tamgası yer alır.
- Kart tıklandığında açılan detay penceresi:
  - Orijinal sesli telaffuz (Web Audio synthesizer & ses fonemi).
  - Piktografik kökeni (örneğin *Ok* damgası 🏹 yay ve ok kökeni).
  - Orhun Yazıtları'ndan orijinal bir cümle örneği ve modern Türkçe tercümesi.
  - Kısa bozkır anlatısı/hikayesi.

### E. Tamga Çizim Pratiği (Stroke Canvas) & Can Tazeleme
- Öğrencinin parmağıyla veya faresiyle ekrana tamgayı çizdiği interaktif tahta.
- Çizim tamamlandığında kontur eşleşmesine göre "Kusursuz Yazım! +15 XP" ve taş yontma ses efekti.
- Yanlış çizimlerde veya ders tekrarlarında can tazeleme antrenmanı.

### F. Görsel Bozkır Rütbe Basamakları & "Bugün Ne Öğrendin?"
- Profil bölümünde rütbeler kuru bir liste yerine görsel kalkanlar, tuğlar, at figürleri ve altın madalyonlarla gösterilir (*Er, Çor, Tarkan, Toygun, Bilge, Kağan*).
- Ana sayfanın altında "Bugün Ne Öğrendin?" özet kartı (bugün öğrenilen tamgalar, harcanan dakika ve kazanılan XP).

---

## 3. Key Product Decisions & Trade-Offs

- **Karar 1: Vektör/SVG + ComfyUI Yuvası**:
  - *Seçilen Yol*: Tamgaların doğruluğu ve bozulmaması için maskot ve taşları matematiksel olarak kesin SVG ile çizmek; arka plana ise ComfyUI veya özel video/görseller için genişletilebilir medya slotu bırakmak.
  - *Gerekçe*: Kullanıcının belirttiği gibi yapay zeka jeneratörleri Göktürkçe harfleri yanlış çizebilmektedir. SVG ile Orhun tamgası %100 kusursuz kalır.
- **Karar 2: Üst Menü Sadeleştirme & Çekmece (Drawer/Dropdown)**:
  - *Seçilen Yol*: 8 sekmeyi 4 ana sekmeye (`Öğren`, `Alıştırma`, `Keşfet`, `Profil`) indirmek; `Bengü Taşlar`, `Sözlük`, `Klavye`, `PDF` modüllerini `Keşfet` sekmesi altında şık bir alt navigasyona almak.
  - *Gerekçe*: Kullanıcı arayüzündeki kalabalığı ve göz yorgunluğunu ortadan kaldırıp odağı öğrenme patikasına çeker.
- **Karar 3: Duolingo Tarzı 3D Buton Stili**:
  - *Seçilen Yol*: Düz pembe modern butonlar yerine derin gölgeli (`border-b-4`, `active:border-b-0 active:translate-y-1`), dokunsal his veren turkuaz ve altın rengi butonlar.
  - *Gerekçe*: Duolingo'nun tatmin edici tıklama hissini bozkır temasıyla mükemmel birleştirir.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                              App.tsx                                   │
│  State: userProgress, currentTab ('ogren'|'alistirma'|'kesfet'|'profil')│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
┌───────────────┐          ┌─────────────────┐          ┌────────────────┐
│   Navbar.tsx  │          │ LearningPath.tsx│          │ ExerciseView   │
│ 4 Ana Sekme:  │          │ - Duolingo Path │          │ - Tamga Çizim  │
│ Öğren         │          │ - Bilge Alp     │          │ - Flashcards   │
│ Alıştırma     │          │ - Günün Tamgası │          │ - Hızlı Can    │
│ Keşfet (Menü) │          │ - Yıldız Sandığı│          └────────────────┘
│ Profil        │          │ - Bugün Özeti   │
└───────────────┘          └────────┬────────┘
                                    │
                                    ▼
                         ┌────────────────────┐
                         │   Keşfet & Profil  │
                         │ - Kitabeler (Taş)  │
                         │ - Runik Klavye     │
                         │ - Görsel Rütbeler  │
                         │ - Başarı Nişanları │
                         └────────────────────┘
```

- **Veri Modeli**: Mevcut `UserProgress` (localStorage tabanlı, sıfır veri kaybı) korunur; dikey patikadaki sandık açılışları ve günlük çizim hedefleri mevcut şemaya geriye dönük uyumlu olarak eklenir.
- **Etkileşim & Ses**: Web Audio API (taş oyma, zafer ezgisi, sandık açılışı) sıfır harici bağımlılıkla yüksek hızda çalışmaya devam eder.
