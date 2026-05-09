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
  
  // State untuk Grid Dashboard biasa
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [mobileCols, setMobileCols] = useState<1 | 2>(1);
  const [desktopCols, setDesktopCols] = useState<2 | 4>(4);

  // === STATE UNTUK MODE FULLSCREEN ===
  const [isFullscreenMode, setIsFullscreenMode] = useState(false);
  const [fullscreenPage, setFullscreenPage] = useState(0); 
  const [focusedFullscreenId, setFocusedFullscreenId] = useState<string | null>(null);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(cctvData.length / itemsPerPage);

  useEffect(() => {
    setIsMounted(true);
    setCurrentTime(getCurrentTime());
    const interval = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const displayedCCTVs = showAll ? cctvData : cctvData.slice(0, 4);

  const gridClasses = `grid gap-3 sm:gap-5 grid-flow-row-dense transition-all duration-500
    ${mobileCols === 1 ? 'grid-cols-1' : 'grid-cols-2'} 
    ${desktopCols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4'}
  `;

  // Fungsi Navigasi Mode Fullscreen
  const nextFullscreenPage = () => {
    setFullscreenPage((prev) => (prev + 1) % totalPages);
    setFocusedFullscreenId(null);
  };
  const prevFullscreenPage = () => {
    setFullscreenPage((prev) => (prev - 1 + totalPages) % totalPages);
    setFocusedFullscreenId(null);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setExpandedId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={`min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans relative transition-all duration-700 ease-out transform ${
      isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
    }`}>
      {/* ── Top Bar Dashboard ── */}
      <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-3 sm:px-6 py-3 sm:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link href="/#cctv" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-all hover:-translate-x-1 shrink-0 shadow-sm group" title="Kembali">
              <i className="ph-bold ph-arrow-left text-base sm:text-lg group-hover:text-blue-500 transition-colors" />
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

          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end">
            
            {/* Tombol Masuk Mode Full Monitor */}
            <button 
              onClick={() => setIsFullscreenMode(true)}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold transition-colors flex items-center gap-1.5 shadow-md"
              title="Mode Pemantauan Layar Penuh"
            >
              <i className="ph-bold ph-corners-out text-xs sm:text-sm" />
              <span className="hidden sm:inline">Full Monitor</span>
            </button>

            <div className="flex sm:hidden bg-slate-200/70 dark:bg-slate-800 p-1 rounded-lg shadow-inner">
              <button onClick={() => setMobileCols(1)} className={`px-2 py-1.5 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 ${mobileCols === 1 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>
                <i className="ph-fill ph-square" />
              </button>
              <button onClick={() => setMobileCols(2)} className={`px-2 py-1.5 rounded-md text-[10px] font-bold transition-all flex items-center gap-1 ${mobileCols === 2 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}>
                <i className="ph-fill ph-columns" />
              </button>
            </div>
            
            <div className="hidden sm:flex bg-slate-200/70 dark:bg-slate-800 p-1 rounded-xl shadow-inner">
              <button onClick={() => setDesktopCols(2)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${desktopCols === 2 ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500'}`}>
                Grid 2
              </button>
              <button onClick={() => setDesktopCols(4)} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${desktopCols === 4 ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500'}`}>
                Grid 4
              </button>
            </div>

            <div className="text-[10px] sm:text-xs font-mono font-bold bg-slate-900 text-emerald-400 px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg min-w-[70px] text-center shrink-0">
              {currentTime}
            </div>
          </div>
        </div>
      </header>

      {/* ── Grid Content Bawaan Dashboard ── */}
      <div className="p-3 sm:p-5 flex-1 w-full max-w-[1400px] mx-auto">
        <div className={gridClasses}>
          {displayedCCTVs.map((cctv, index) => {
            const isExpanded = expandedId === cctv.id;
            const expandedClass = isExpanded ? 'col-span-full md:col-span-2 md:row-span-2 shadow-2xl ring-2 sm:ring-4 ring-blue-500/50 z-20' : 'col-span-1 z-10';

            return (
              <div 
                key={cctv.id} 
                className={`bg-white dark:bg-slate-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 flex flex-col group transition-all duration-500 ${expandedClass}`}
              >
                <div className="px-3 sm:px-4 py-2 sm:py-3 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
                  <div className="flex items-center gap-2 overflow-hidden mr-2">
                    <i className="ph-fill ph-video-camera text-blue-500 text-base sm:text-lg shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase">Kamera {cctv.id}</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{cctv.loc}</span>
                    </div>
                  </div>
                </div>

                <div className={`relative bg-black w-full overflow-hidden transition-all duration-500 ${isExpanded ? 'h-full min-h-[250px]' : 'aspect-video'}`}>
                  <iframe src={`https://www.youtube.com/embed/${cctv.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`} className="absolute inset-0 w-full h-full border-0" allow="autoplay; encrypted-media" allowFullScreen loading="lazy" />
                  
                  {!isExpanded ? (
                    <>
                      <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => setExpandedId(cctv.id)} />
                      <div className="absolute inset-0 z-20 bg-slate-900/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity pointer-events-none">
                        <div className="bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold flex gap-1.5">
                          <i className="ph-bold ph-corners-out" /> Perbesar
                        </div>
                      </div>
                    </>
                  ) : (
                    <button onClick={() => setExpandedId(null)} className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 bg-red-600/90 text-white p-2 rounded-full hover:scale-110 transition-transform">
                      <i className="ph-bold ph-corners-in text-base" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Kontrol Dashboard */}
        <div className="mt-8 sm:mt-12 mb-6 flex justify-center">
          {!showAll ? (
            <button onClick={() => setShowAll(true)} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2">
              <i className="ph-bold ph-video-camera" /> Tampilkan Semua (12 Titik)
            </button>
          ) : (
            <button onClick={handleShowLess} className="bg-slate-800 text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 border border-slate-600">
              <i className="ph-bold ph-caret-up" /> Tutup / Tampilkan 4 Saja
            </button>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* ── MODE FULLSCREEN MONITOR (OVERLAY MURNI) ── */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {isFullscreenMode && (
        <div className="fixed inset-0 z-[100] bg-black w-screen h-screen overflow-hidden flex animate-[fadeIn_0.3s_ease-out]">
          
          {/* Tombol Tutup Fullscreen (Pojok Kanan Atas) */}
          <button 
            onClick={() => setIsFullscreenMode(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[120] bg-black/60 hover:bg-red-600 text-white p-2.5 sm:p-3 rounded-full shadow-2xl transition-all border border-white/10"
            title="Keluar dari Fullscreen"
          >
            <i className="ph-bold ph-x text-lg sm:text-xl" />
          </button>

          {focusedFullscreenId ? (
            
            /* -- Tampilan Fokus 1 Video Fullscreen -- */
            <div className="relative w-full h-full flex items-center justify-center bg-black">
              {/* Tombol Kembali ke Grid 4 Fullscreen */}
              <button 
                onClick={() => setFocusedFullscreenId(null)}
                className="absolute top-4 left-4 sm:top-6 sm:left-6 z-[120] bg-black/60 hover:bg-slate-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-2xl transition-all border border-white/10 flex items-center gap-2 font-bold text-xs sm:text-sm"
              >
                <i className="ph-bold ph-arrow-left text-lg" />
                Kembali ke 4 Grid
              </button>
              
              <iframe
                src={`https://www.youtube.com/embed/${cctvData.find(c => c.id === focusedFullscreenId)?.youtubeId}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

          ) : (
            
            /* -- Tampilan 4 Grid Tanpa Batas -- */
            <div className="relative w-full h-full flex flex-col">
              
              {/* Tombol Navigasi Desktop (Kiri - Kanan) */}
              <button onClick={prevFullscreenPage} className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-[110] bg-black/50 hover:bg-blue-600 text-white p-4 rounded-full border border-white/20 transition-all backdrop-blur-md">
                <i className="ph-bold ph-caret-left text-2xl" />
              </button>
              <button onClick={nextFullscreenPage} className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-[110] bg-black/50 hover:bg-blue-600 text-white p-4 rounded-full border border-white/20 transition-all backdrop-blur-md">
                <i className="ph-bold ph-caret-right text-2xl" />
              </button>

              {/* Tombol Navigasi Mobile (Atas - Bawah) */}
              <button onClick={prevFullscreenPage} className="flex sm:hidden absolute top-4 left-1/2 -translate-x-1/2 z-[110] bg-black/60 text-white px-6 py-2 rounded-full border border-white/20 backdrop-blur-md">
                <i className="ph-bold ph-caret-up text-xl" />
              </button>
              <button onClick={nextFullscreenPage} className="flex sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] bg-black/60 text-white px-6 py-2 rounded-full border border-white/20 backdrop-blur-md">
                <i className="ph-bold ph-caret-down text-xl" />
              </button>

              {/* Grid 4 Video Tanpa Batas (Border-0, Gap-0) */}
              {/* Di Mobile = 1 Kolom 4 Baris memanjang kebawah. Di Desktop = 2x2 */}
              <div className="w-full h-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-0">
                {cctvData.slice(fullscreenPage * itemsPerPage, (fullscreenPage + 1) * itemsPerPage).map((cctv) => (
                  <div 
                    key={cctv.id} 
                    className="relative w-full h-full bg-slate-900 overflow-hidden cursor-pointer group"
                    onClick={() => setFocusedFullscreenId(cctv.id)}
                    title="Klik untuk melihat layar penuh"
                  >
                    {/* Overlay Identitas Sederhana ala CCTV Asli */}
                    <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-[105] pointer-events-none flex flex-col gap-1">
                      <div className="bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded text-[10px] sm:text-xs font-mono font-bold border border-white/10 inline-block w-fit">
                        CAM-{cctv.id} : {cctv.loc}
                      </div>
                      <div className="flex items-center gap-1.5 bg-red-600/80 px-2 py-1 rounded w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-[9px] font-mono text-white font-bold tracking-widest">LIVE</span>
                      </div>
                    </div>

                    <iframe
                      src={`https://www.youtube.com/embed/${cctv.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                      className="absolute inset-0 w-full h-full border-0 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                      allow="autoplay; encrypted-media"
                    />

                    {/* Overlay penangkap klik agar iframe tidak menghalangi */}
                    <div className="absolute inset-0 z-[100] bg-transparent" />
                  </div>
                ))}
              </div>
              
              {/* Indikator Halaman (Page Tracker) */}
              <div className="absolute bottom-4 sm:bottom-6 left-6 z-[110] bg-black/60 text-white/80 px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-mono border border-white/10 backdrop-blur-md hidden sm:block">
                Halaman {fullscreenPage + 1} dari {totalPages}
              </div>

            </div>
          )}
        </div>
      )}

    </main>
  );
}
