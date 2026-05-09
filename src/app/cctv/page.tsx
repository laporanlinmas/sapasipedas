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
  const [gridColumns, setGridColumns] = useState<2 | 4>(4);

  useEffect(() => {
    setCurrentTime(getCurrentTime());
    const interval = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-950 flex flex-col">
      {/* ── Top Bar ── */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Link 
            href="/"
            className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors shrink-0"
            title="Kembali ke Landing Page"
          >
            <i className="ph-bold ph-arrow-left text-lg" />
          </Link>
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              Dashboard CCTV
              <span className="flex h-2.5 w-2.5 relative ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
              </span>
            </h1>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              12 Titik Pantau Kawasan Pedestrian
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
            <button 
              onClick={() => setGridColumns(2)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${gridColumns === 2 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <i className="ph-fill ph-squares-four text-sm" />
              Grid 2
            </button>
            <button 
              onClick={() => setGridColumns(4)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all items-center gap-1.5 hidden sm:flex ${gridColumns === 4 ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <i className="ph-fill ph-grid-four text-sm" />
              Grid 4
            </button>
          </div>

          <div className="text-xs font-mono font-bold bg-slate-900 text-emerald-400 px-3 py-1.5 rounded-lg border border-slate-700 shadow-inner">
            {currentTime || '00:00:00'} WIB
          </div>
        </div>
      </header>

      {/* ── Grid Content ── */}
      <div className="p-4 sm:p-6 flex-1 overflow-auto">
        <div className={`grid gap-4 sm:gap-6 ${gridColumns === 2 ? 'grid-cols-2 lg:grid-cols-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
          {cctvData.map((cctv) => (
            <div key={cctv.id} className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700 flex flex-col group">
              
              {/* Header Card */}
              <div className="px-3 py-2 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <i className="ph-fill ph-video-camera text-blue-400" />
                  <span className="text-xs font-bold text-slate-200 truncate">CAM-{cctv.id} {cctv.loc}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-red-900/40 px-1.5 py-0.5 rounded border border-red-500/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-red-200 font-bold">LIVE</span>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black w-full">
                {/* Overlay loading shimmer before iframe ready (optional but good for UX) */}
                <iframe
                  src={`https://www.youtube.com/embed/${cctv.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`CCTV ${cctv.loc}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
