'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CCTVData {
  loc: string;
  status: 'online' | 'offline';
  id: string;
  youtubeId: string;
}

// Menampilkan 2 titik paling strategis sebagai preview di Landing Page
const previewCCTVData: CCTVData[] = [
  { loc: "Simpang Tugu Jogja", id: "01", youtubeId: "1v52cQ1qJBA", status: "online" },
  { loc: "Titik Nol Kilometer", id: "08", youtubeId: "p5fsOsGos6Y", status: "online" },
];

const totalCCTV = 12; // Total keseluruhan CCTV yang ada di dashboard
const onlineCount = totalCCTV; // Asumsi semua online, atau sesuaikan dengan data real API nantinya
const offlineCount = 0;

function getCurrentTime() {
  return new Date().toLocaleTimeString('id-ID', { hour12: false });
}

export default function CCTVSection() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setCurrentTime(getCurrentTime());
    const interval = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cctv" className="py-20 relative overflow-hidden scroll-mt-20">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-xl h-full pointer-events-none -z-10 opacity-40 dark:opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── Section Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="relative max-w-2xl">
            <div className="absolute -left-4 sm:-left-6 top-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3 tracking-tight">
              Pantauan Live CCTV
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg font-medium">
              Akses visual real-time langsung dari kawasan pedestrian utama. Hindari kemacetan dan pantau kondisi terkini sebelum Anda berkunjung.
            </p>
          </div>

          {/* Status Badges */}
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex flex-col items-end mr-2 hidden sm:flex">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Waktu Server</span>
              <span className="text-sm font-mono font-bold text-slate-700 dark:text-slate-300">
                {currentTime || '00:00:00'} WIB
              </span>
            </div>
            
            <div className="glass-panel inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/50 dark:bg-slate-800/60 shadow-sm backdrop-blur-md">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </div>
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                {onlineCount} Kamera Aktif
              </span>
            </div>
            
            {offlineCount > 0 && (
              <div className="glass-panel inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-red-200 dark:border-red-500/30 bg-red-50/50 dark:bg-slate-800/60 shadow-sm backdrop-blur-md">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </div>
                <span className="text-sm font-bold text-red-600 dark:text-red-400">
                  {offlineCount} Offline
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Grid Preview CCTV ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative">
          {previewCCTVData.map((cctv) => (
            <div key={cctv.id} className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col group relative transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              
              {/* Header CCTV Card */}
              <div className="flex items-center justify-between px-5 py-4 bg-slate-50 dark:bg-slate-800/80 border-b border-slate-100 dark:border-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <i className="ph-fill ph-video-camera text-blue-600 dark:text-blue-400 text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">Kamera Utama</span>
                    <span className="text-base font-extrabold text-slate-900 dark:text-slate-100">{cctv.loc}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-red-100 dark:bg-red-900/40 px-2.5 py-1.5 rounded-md border border-red-200 dark:border-red-500/30">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_#ef4444]" />
                  <span className="text-[10px] font-mono text-red-700 dark:text-red-300 font-bold tracking-widest">LIVE</span>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-slate-900 w-full group-hover:opacity-95 transition-opacity">
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

          {/* Overlay gradien di bawah grid untuk efek transisi ke tombol */}
          <div className="absolute -bottom-1 left-0 w-full h-24 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none z-10" />
        </div>

        {/* ── Call to Action (Buka Dashboard) ── */}
        <div className="mt-12 flex flex-col items-center justify-center relative z-20">
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4 text-center">
            Ada {totalCCTV - previewCCTVData.length} titik kamera lain yang tersebar di sepanjang kawasan.
          </p>
          <Link 
            href="/cctv"
            className="inline-flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-bold shadow-xl shadow-slate-900/20 dark:shadow-white/10 transition-all duration-300 hover:scale-105 hover:bg-blue-600 dark:hover:bg-blue-50 hover:shadow-blue-500/30 group"
          >
            <i className="ph-fill ph-monitor-play text-2xl text-blue-400 dark:text-blue-600 group-hover:text-white dark:group-hover:text-blue-700 transition-colors" />
            <span className="text-lg">Buka Dashboard CCTV</span>
            <i className="ph-bold ph-arrow-right text-lg ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
