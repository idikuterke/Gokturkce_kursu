import React from 'react';
import { FileText, Download, ExternalLink, BookOpen, CheckCircle, Sparkles } from 'lucide-react';

export const BelgelerView: React.FC = () => {
  const documents = [
    {
      id: '01',
      title: 'Ders Kitapçığı',
      filename: '01_Ders_Kitapcigi.pdf',
      size: 'A4 Baskı Formatı',
      desc: 'Tarihçe, 38 ana tamga, kutupluluk kuralları ve adım adım okuma-yazma rehberi.',
      category: 'Temel Kaynak'
    },
    {
      id: '02',
      title: 'Öğrenci Çalışma Yaprakları',
      filename: '02_Ogrenci_Calisma_Yapraklari.pdf',
      size: 'Alıştırma Fasikülü',
      desc: 'El yazısı pratikleri, tamga çizim kılavuz çizgileri ve kelime tamamlama alıştırmaları.',
      category: 'Uygulama'
    },
    {
      id: '03',
      title: 'Tamga Albümü',
      filename: '03_Tamga_Albumu.pdf',
      size: 'Görsel Katalog',
      desc: 'Tüm Göktürk tamgalarının yüksek çözünürlüklü vektörel formları ve fonetik değerleri.',
      category: 'Katalog'
    },
    {
      id: '04',
      title: 'Irk Bitig İnceleme Föyü',
      filename: '04_Irk_Bitig_Foyu.pdf',
      size: 'El Yazması Tahlili',
      desc: '9. yüzyıl Uygur dönemi kağıt el yazması fal metinlerinin transkripsiyonu ve sözlüğü.',
      category: 'İleri Seviye'
    },
    {
      id: '05',
      title: 'Ek Üniteler',
      filename: '05_Ek_Uniteler.pdf',
      size: 'Metin İncelemeleri',
      desc: 'Tonyukuk ve Bilge Kağan yazıtlarının kapsamlı dilbilgisel ve tarihsel çözümlemeleri.',
      category: 'Gramer'
    },
    {
      id: '06',
      title: 'Kazanım ve Değerlendirme',
      filename: '06_Degerlendirme.pdf',
      size: 'Ölçme & Değerlendirme',
      desc: 'Her ünite sonu için hazırlanan çoktan seçmeli ve eşleştirmeli kazanım testleri.',
      category: 'Sınav'
    },
    {
      id: '07',
      title: 'Sertifika Bitirme Sınavı',
      filename: '07_Sinav.pdf',
      size: 'Resmi Sınav',
      desc: 'Kurs bitiminde uygulanan 25 soruluk kapsamlı Göktürkçe yeterlilik sınavı.',
      category: 'Sınav'
    },
    {
      id: '08',
      title: 'Sınav Cevap Anahtarı',
      filename: '08_Sinav_Cevap_Anahtari.pdf',
      size: 'Eğitmen Notu',
      desc: 'Sertifika sınavı sorularının ayrıntılı çözümleri ve puanlama yönergesi.',
      category: 'Eğitmen'
    },
    {
      id: '09',
      title: 'Cüzdan ve Masa Kartı',
      filename: '09_Cuzdan_Karti.pdf',
      size: 'Hızlı Başvuru Kartı',
      desc: 'Cepte veya masada taşınabilir minik Göktürk alfabe tablosu ve imla özeti.',
      category: 'Pratik'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="border-b border-[#233754] pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-[#2BC4C4] flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" /> Orijinal Kurs Arşivi
        </span>
        <h2 className="text-3xl font-bold text-white font-serif mt-1">
          Baskıya Hazır PDF Kütüphanesi
        </h2>
        <p className="text-sm text-[#9FB0C6] mt-1">
          Eğitmen İbrahim (Bayram) Bilir tarafından hazırlanan akademik ve uygulamalı kurs materyalleri.
        </p>
      </div>

      {/* Grid of PDF cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="bg-[#101B2C] border border-[#233754] hover:border-[#2BC4C4] rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-xl shadow-black/20"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#152338] text-[#2BC4C4] border border-[#233754]">
                  {doc.category}
                </span>
                <span className="text-xs text-[#6C7F99]">{doc.size}</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#2BC4C4]" />
                  <span>{doc.title}</span>
                </h3>
                <p className="text-xs text-[#9FB0C6] mt-2 leading-relaxed">
                  {doc.desc}
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-[#233754] mt-4 flex items-center gap-2">
              <a
                href={`/pdf/${doc.filename}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#2BC4C4] hover:bg-[#25adad] text-[#0B1320] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-[#2BC4C4]/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Görüntüle</span>
              </a>
              <a
                href={`/pdf/${doc.filename}`}
                download={doc.filename}
                className="p-2.5 rounded-xl bg-[#152338] hover:bg-[#1b2d47] text-[#9FB0C6] hover:text-white border border-[#233754] transition-colors"
                title="İndir"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
