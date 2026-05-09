'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface CCTVData {
  loc: string;
  id: string;
  youtubeId: string;
}

const cctvData: CCTVData[] = [
  { loc: "Simpang Tugu",               id: "01", youtubeId: "1v52cQ1qJBA" },
  { loc: "Margo Utomo - Utara Teteg",  id: "02", youtubeId: "JUI1Wx4E25Q" },
  { loc: "Simpang Borobudur Plaza",    id: "03", youtubeId: "FCuHGm6VMHs" },
  { loc: "Margo Utomo - Selatan Olive",id: "04", youtubeId: "ijG22Q85GRg" },
  { loc: "Margo Utomo - Optic Tugu",   id: "05", youtubeId: "ghJg364QRkQ" },
  { loc: "Simpang Jati Kencana",       id: "06", youtubeId: "SDK-sOjzo1I" },
  { loc: "Margo Utomo - Selatan Tugu", id: "07", youtubeId: "csO7IGlUaYI" },
  { loc: "Titik Nol Kilometer",        id: "08", youtubeId: "p5fsOsGos6Y" },
  { loc: "Alun-Alun Kidul",            id: "09", youtubeId: "4MdiRrgX6fk" },
  { loc: "Stasiun Tugu / Malioboro",   id: "10", youtubeId: "NUpEhkmv-Oo" },
  { loc: "Plaza Malioboro",            id: "11", youtubeId: "q7ZX2tSFEDg" },
  { loc: "Gunung Merapi (Live)",       id: "12", youtubeId: "8X7gHBhD1Tw" },
];

function getCurrentTime() {
  return new Date().toLocaleTimeString('id-ID', { hour12: false });
}

export default function CCTVPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedCCTV, setSelectedCCTV] = useState<CCTVData | null>(null);
  
  // State grid terpisah untuk mobile dan desktop
  const [mobileCols, setMobileCols] = useState<1 | 2>(1);
  const [desktopCols, setDesktopCols] = useState<2 | 4>(4);

  useEffect(() => {
    setCurrentTime(getCurrentTime());
    const interval = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Menentukan jumlah data yang dirender
  const displayedCCTVs = showAll ? cctvData : cctvData.slice(0, 4);

  // Class grid yang responsif
  const gridClasses = `grid gap-3 sm:gap-6 transition-all duration-500
    ${mobileCols === 1 ? 'grid-cols-1' : 'grid-cols-2'} 
    ${desktopCols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'}
  `;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans relative">
      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 py-3 sm:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Header Kiri */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link 
              href="/#cctv"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors shrink-0 shadow-sm"
              title="Kembali"
            >
              <i className="ph-bold ph-arrow-left text-base sm:text-lg" />
            </Link>
            <div className="flex-1 overflow-hidden">
              <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 tracking-tight truncate">
                Dashboard CCTV
                <span className="flex h-2 w-2 relative ml-1 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </h1>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 truncate">
                12 Titik Pantau Kawasan Pedestrian
              </p>
            </div>
          </div>

          {/* Kontrol Kanan */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Grid Mobile */}
            <div className="flex sm:hidden bg-slate-200/70 dark:bg-slate-800 p-1 rounded-lg shadow-inner">
              <button 
                onClick={() => setMobileCols(1)}
                className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 ${mobileCols === 1 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
              >
                <i className="ph-fill ph-square text-xs" />
                1 Kolom
              </button>
              <button 
                onClick={() => setMobileCols(2)}
                className={`px-2.5 py-1.5 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 ${mobileCols === 2 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
              >
                <i className="ph-fill ph-columns text-xs" />
                2 Kolom
              </button>
            </div>

            {/* Grid Desktop */}
            <div className="hidden sm:flex bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl shadow-inner">
              <button 
                onClick={() => setDesktopCols(2)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${desktopCols === 2 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <i className="ph-fill ph-squares-four text-sm" />
                Grid 2
              </button>
              <button 
                onClick={() => setDesktopCols(4)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${desktopCols === 4 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <i className="ph-fill ph-grid-four text-sm" />
                Grid 4
              </button>
            </div>

            {/* Indikator Waktu */}
            <div className="text-[10px] sm:text-xs font-mono font-bold bg-slate-900 text-emerald-400 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-slate-700 shadow-inner min-w-[75px] sm:min-w-[100px] text-center shrink-0">
              {currentTime || '00:00:00'}
            </div>
          </div>

        </div>
      </header>

      {/* ── Grid Content ── */}
      <div className="p-3 sm:p-6 flex-1 overflow-auto w-full max-w-7xl mx-auto">
        <div className={gridClasses}>
          {displayedCCTVs.map((cctv) => (
            <div key={cctv.id} className="bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-800 flex flex-col group">
              
              {/* Header Card */}
              <div className="px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center transition-colors">
                <div className="flex items-center gap-2 overflow-hidden mr-2">
                  <i className="ph-fill ph-video-camera text-blue-500 dark:text-blue-400 text-base sm:text-lg shrink-0" />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kamera {cctv.id}</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate leading-tight">
                      {cctv.loc}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 bg-red-100 dark:bg-red-900/40 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md border border-red-200 dark:border-red-500/50 shadow-sm shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[8px] sm:text-[10px] font-mono text-red-700 dark:text-red-200 font-bold tracking-widest hidden sm:inline-block">LIVE</span>
                </div>
              </div>

              {/* Video Player */}
              <div 
                className="relative aspect-video bg-black w-full cursor-pointer overflow-hidden"
                onClick={() => setSelectedCCTV(cctv)}
                title="Klik untuk memperbesar"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${cctv.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full border-0 group-hover:scale-105 transition-transform duration-500"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`CCTV ${cctv.loc}`}
                  loading="lazy"
                  tabIndex={-1}
                />
                
                {/* Overlay transparan agar card bisa di-klik & trigger hover efek */}
                <div className="absolute inset-0 z-10 bg-transparent" />
                
                <div className="absolute inset-0 z-20 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <i className="ph-bold ph-corners-out sm:text-base text-blue-600 dark:text-blue-400" />
                    Perbesar
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tampilkan Lebih Banyak Section ── */}
        {!showAll && (
          <div className="mt-8 sm:mt-12 mb-6 sm:mb-8 flex flex-col items-center justify-center animate-fade-in px-4">
            <div className="relative w-full max-w-md flex items-center justify-center">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-slate-300 dark:border-slate-800"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-slate-50 dark:bg-slate-950 px-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Menampilkan 4 dari 12 Kamera
                </span>
              </div>
            </div>
            
            <button 
              onClick={() => setShowAll(true)}
              className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group"
            >
              <i className="ph-bold ph-video-camera text-base sm:text-xl group-hover:animate-pulse" />
              Tampilkan Semua CCTV (12 Titik)
              <i className="ph-bold ph-caret-down text-base ml-1 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* ── Modal Popup Video ── */}
      {selectedCCTV && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/95 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCCTV(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 py-3 sm:py-4 bg-slate-900 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-red-900/40 px-2 py-1 rounded border border-red-500/50 shadow-sm shrink-0">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-red-200 font-bold tracking-widest">LIVE</span>
                </div>
                <h3 className="text-white font-bold text-sm sm:text-base flex items-center gap-2 truncate">
                  <span className="text-slate-400 font-normal hidden sm:inline">Kamera {selectedCCTV.id} :</span>
                  {selectedCCTV.loc}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedCCTV(null)} 
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition-colors ml-4 shrink-0"
                aria-label="Tutup"
              >
                <i className="ph-bold ph-x text-base sm:text-lg" />
              </button>
            </div>
            
            {/* Modal Video Player (Autoplay dengan suara) */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedCCTV.youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`CCTV ${selectedCCTV.loc}`}
              />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
