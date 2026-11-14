# FuelTrack AI - Akıllı Yakıt & Seyahat Analizi

FuelTrack AI, araç sahiplerinin seyahatlerini, yakıt tüketimlerini ve seyahat maliyetlerini kolayca takip etmelerini ve analiz etmelerini sağlayan modern bir web uygulamasıdır. Veriler tarayıcınızda güvenle saklanır (`LocalStorage`).

##  Özellikler
* **Seyahat Ekleme:** Rota, katedilen mesafe, alınan yakıt ve litre birim fiyatı ile seyahat kaydı oluşturma[cite: 10, 11].
* **Akıllı Özet Kartları:** Toplam mesafe, toplam yakıt, toplam harcama ve ortalama yakıt tüketimi (`L/100km`) metriklerinin otomatik hesaplanması ve gösterilmesi[cite: 11].
* **Geçmiş Takibi:** Kaydedilen tüm seyahatlerin listelenmesi ve yönetilmesi.
* **Modern Arayüz:** Tailwind CSS ile tasarlanmış şık ve tamamen duyarlı (responsive) kullanıcı deneyimi[cite: 10].

##  Kullanılan Teknolojiler
* **Frontend:** React (Vite ile)[cite: 10]
* **Stil & Tasarım:** Tailwind CSS[cite: 10]
* **Veri Depolama:** Browser LocalStorage[cite: 10]
* **Dağıtım (Deployment):** Vercel[cite: 10]
* **Versiyon Kontrolü:** Git & GitHub[cite: 11]

##  Geliştirme Sürecinde Yapay Zekanın Rolü
Bu projenin geliştirme ve yayınlama sürecinde **Gemini** yapay zeka asistanından şu aşamalarda aktif olarak destek alınmıştır:
1. **Planlama & Mimari:** Uygulamanın ekran tasarımlarının, bileşen yapısının ve `LocalStorage` veri modelinin kurgulanması[cite: 10, 11].
2. **Kod Üretimi & Entegrasyon:** React bileşenlerinin yazılması ve Tailwind CSS sınıflarının entegre edilmesi[cite: 11].
3. **Hata Ayıklama (Debugging):** TypeScript'ten JavaScript'e (`.jsx`) geçiş sürecindeki derleme hatalarının (`vite-transform` ve `build` hataları) çözülmesi ve Vercel dağıtım optimizasyonlarının yapılması[cite: 11].
