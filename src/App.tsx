import React, { useState, useEffect } from 'react';

export default function App() {
  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem('arac_trips');
    return saved ? JSON.parse(saved) : [];
  });

  const [rota, setRota] = useState('');
  const [km, setKm] = useState('');
  const [litre, setLitre] = useState('');
  const [fiyat, setFiyat] = useState('');

  useEffect(() => {
    localStorage.setItem('arac_trips', JSON.stringify(trips));
  }, [trips]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rota || !km || !litre || !fiyat) return;

    const numKm = parseFloat(km);
    const numLitre = parseFloat(litre);
    const numFiyat = parseFloat(fiyat);

    if (numKm <= 0 || numLitre <= 0 || numFiyat <= 0) return;

    const toplamMaliyet = numLitre * numFiyat;
    const ortalamaTuketim = (numLitre / numKm) * 100;

    const newTrip = {
      id: Date.now(),
      rota,
      km: numKm,
      litre: numLitre,
      maliyet: toplamMaliyet,
      tuketim: ortalamaTuketim,
      tarih: new Date().toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: 'numeric' })
    };

    setTrips([newTrip, ...trips]);
    setRota('');
    setKm('');
    setLitre('');
    setFiyat('');
  };

  const handleDelete = (id) => {
    setTrips(trips.filter((t) => t.id !== id));
  };

  const toplamKm = trips.reduce((acc, c) => acc + c.km, 0);
  const toplamLitre = trips.reduce((acc, c) => acc + c.litre, 0);
  const toplamMaliyet = trips.reduce((acc, c) => acc + c.maliyet, 0);
  const genelOrtalama = toplamKm > 0 ? (toplamLitre / toplamKm) * 100 : 0;

  // Tüketim değerine göre renkli rozet belirleme
  const getTuketimBadge = (tuketim) => {
    if (tuketim <= 5.5) return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    if (tuketim <= 7.5) return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-rose-100 text-rose-700 border-rose-200';
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Üst Bar */}
      <nav className="bg-emerald-700 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⛽</span>
            <div>
              <h1 className="text-lg font-bold tracking-tight">FuelTrack AI</h1>
              <p className="text-xs text-slate-400">Akıllı Yakıt & Seyahat Analizi</p>
            </div>
          </div>
          <span className="text-xs bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full border border-slate-700">
            {trips.length} Kayıtlı Seyahat
          </span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* 4'lü Özet Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Toplam Mesafe</p>
              <p className="text-2xl font-extrabold text-slate-800 mt-1">{toplamKm.toFixed(0)} <span className="text-sm font-medium text-slate-400">km</span></p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl">🛣️</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Toplam Yakıt</p>
              <p className="text-2xl font-extrabold text-slate-800 mt-1">{toplamLitre.toFixed(1)} <span className="text-sm font-medium text-slate-400">lt</span></p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl">💧</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Toplam Harcama</p>
              <p className="text-2xl font-extrabold text-emerald-600 mt-1">{toplamMaliyet.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-sm font-medium">₺</span></p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl">💳</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Ort. Tüketim</p>
              <p className="text-2xl font-extrabold text-amber-600 mt-1">{genelOrtalama.toFixed(2)} <span className="text-sm font-medium text-slate-400">L/100km</span></p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl">📊</div>
          </div>
        </div>

        {/* Ana İçerik: Sol Form + Sağ Tablo */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Sol Panel: Kayıt Formu */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 mb-1">Yeni Seyahat Ekle</h2>
            <p className="text-xs text-slate-400 mb-5">Yakıt fişi bilgilerinizi girerek analizi başlatın.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Rota / Açıklama</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Yozgat - Trabzon"
                  value={rota}
                  onChange={(e) => setRota(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Mesafe (km)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    placeholder="330"
                    value={km}
                    onChange={(e) => setKm(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Yakıt (Litre)</label>
                  <input
                    type="number"
                    required
                    step="0.01"
                    min="0.1"
                    placeholder="21.0"
                    value={litre}
                    onChange={(e) => setLitre(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Litre Birim Fiyatı (₺)</label>
                <input
                  type="number"
                  required
                  step="0.01"
                  min="0.1"
                  placeholder="44.50"
                  value={fiyat}
                  onChange={(e) => setFiyat(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-semibold py-2.5 px-4 rounded-xl transition shadow-sm text-sm mt-2"
              >
                + Seyahati Kaydet
              </button>
            </form>
          </div>

          {/* Sağ Panel: Geçmiş Kayıtlar Listesi */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-slate-800">Seyahat Geçmişi</h2>
                <p className="text-xs text-slate-400">Verileriniz tarayıcınızda güvenle saklanır.</p>
              </div>
            </div>

            {trips.length === 0 ? (
              <div className="p-12 text-center">
                <div className="text-4xl mb-3">🚘</div>
                <h3 className="text-sm font-semibold text-slate-700">Henüz seyahat kaydı yok</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">Sol taraftaki formu kullanarak ilk yakıt tüketimi ve maliyet analizinizi oluşturun.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {trips.map((trip) => (
                  <div key={trip.id} className="p-5 hover:bg-slate-50/80 transition flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="font-bold text-slate-800 text-sm">{trip.rota}</span>
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getTuketimBadge(trip.tuketim)}`}>
                          {trip.tuketim.toFixed(2)} L / 100km
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">
                        {trip.tarih} • <span className="text-slate-600 font-medium">{trip.km} km</span> yol • <span className="text-slate-600 font-medium">{trip.litre} lt</span> yakıt
                      </p>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                      <div className="text-left sm:text-right">
                        <p className="text-xs text-slate-400">Toplam Tutar</p>
                        <p className="text-base font-bold text-slate-800">{trip.maliyet.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ₺</p>
                      </div>
                      <button
                        onClick={() => handleDelete(trip.id)}
                        title="Kaydı Sil"
                        className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}