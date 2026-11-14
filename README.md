# ⛽ FuelTrack AI - Akıllı Araç Yakıt ve Seyahat Takip Asistanı

Sürücülerin seyahat rotalarını, gidilen mesafeyi ve yakıt alım bilgilerini girerek toplam maliyeti ve 100 km'deki ortalama yakıt tüketimini (L/100km) anlık olarak hesaplayıp takip edebileceği modern bir web uygulamasıdır.

## 📸 Ekran Görüntüsü
![Uygulama Ekran Görüntüsü](./screenshot.png)

## 🚀 Kullanılan Teknolojiler
* **React (Vite):** Bileşen tabanlı kullanıcı arayüzü geliştirme
* **Tailwind CSS:** Modern, duyarlı (responsive) ve kullanıcı dostu arayüz tasarımı
* **LocalStorage API:** Verilerin harici bir veritabanına ihtiyaç duymadan tarayıcı hafızasında kalıcı olarak saklanması

## 🤖 Yapay Zeka Kullanım Süreci
Bu proje geliştirilirken yapay zeka asistanından (**Gemini**) aşağıdaki aşamalarda aktif olarak destek alınmıştır:
1. **Planlama ve Fikir Geliştirme:** Proje kapsamının belirlenmesi, veri modelinin (`rota`, `km`, `litre`, `fiyat`, `tüketim`) oluşturulması.
2. **Bileşen ve Algoritma Geliştirme:** React bileşenlerinin kodlanması, 100 km'deki ortalama tüketim formülünün yazılması ve `LocalStorage` entegrasyonu.
3. **Arayüz (UI/UX) İyileştirme:** Kullanıcı deneyimini artırmak için iki sütunlu dashboard yerleşimi, özet istatistik kartları ve tüketim değerine göre renk değiştiren durum rozetlerinin Tailwind CSS ile tasarlanması.
4. **Dokümantasyon:** Projenin kurulum ve tanıtımını içeren `README.md` dosyasının yapılandırılması.

## 🛠️ Kurulum ve Çalıştırma
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Depoyu bilgisayarınıza klonlayın:
   ```bash
   git clone [https://github.com/KULLANICI_ADIN/REPO_ADIN.git](https://github.com/KULLANICI_ADIN/REPO_ADIN.git)