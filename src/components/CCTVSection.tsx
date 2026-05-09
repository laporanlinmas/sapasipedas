'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CCTVData {
  loc: string;
  status: 'online' | 'offline';
  id: string;
}

const cctvData: CCTVData[] = [
  { loc: "Alun-Alun Timur",       status: "online",  id: "01" },
  { loc: "Alun-Alun Barat",       status: "online",  id: "02" },
  { loc: "HOS Cokroaminoto Utara",status: "online",  id: "03" },
  { loc: "HOS Cokroaminoto Sel",  status: "online",  id: "04" },
  { loc: "Simpang Tiga Ngepos",   status: "online",  id: "05" },
  { loc: "Jendral Sudirman",      status: "online",  id: "06" },
  { loc: "Gajah Mada Area",       status: "online",  id: "07" },
  { loc: "Simpang Pasar Legi",    status: "offline", id: "08" },
  { loc: "Suromenggolo",          status: "online",  id: "09" },
  { loc: "Tambakbayan",           status: "online",  id: "10" },
  { loc: "Batoro Katong",         status: "online",  id: "11" },
  { loc: "Simpang Jeruksing",     status: "online",  id: "12" },
];

const onlineCount  = cctvData.filter(c => c.status === 'online').length;
const offlineCount = cctvData.filter(c => c.status === 'offline').length;

function getCurrentTime() {
  return new Date().toLocaleTimeString('id-ID', { hour12: false });
}

export default function CCTVSection() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(getCurrentTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="cctv" className="scroll-mt-32 reveal">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="relative">
          <div className="absolute -left-4 top-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3 pl-3">
            Jaringan CCTV Terpadu
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 pl-3 text-lg font-medium">
            Pantauan visual real-time di {cctvData.length} titik strategis kawasan pedestrian.
          </p>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="glass-panel inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-300 dark:border-emerald-500/30 bg-white/60 dark:bg-slate-800/60 shadow-sm">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </div>
            <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
              {onlineCount} Online
            </span>
          </div>
          {offlineCount > 0 && (
            <div className="glass-panel inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-red-300 dark:border-red-500/30 bg-white/60 dark:bg-slate-800/60 shadow-sm">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cctvData.slice(0, 4).map((cctv, index) => (
          <CCTVCard key={cctv.id} cctv={cctv} currentTime={currentTime} index={index} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link 
          href="/cctv"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
        >
          <i className="ph-fill ph-squares-four text-xl" />
          Lihat Selengkapnya (12 Titik)
        </Link>
      </div>
    </section>
  );
}

function CCTVCard({ cctv, currentTime, index }: { cctv: CCTVData; currentTime: string; index: number }) {
  if (cctv.status === 'offline') {
    return (
      <div className={`glass-panel rounded-3xl overflow-hidden shadow-sm border-2 border-white/40 dark:border-slate-700 flex flex-col group relative reveal reveal-delay-${(index % 4) + 1} bg-white/70 dark:bg-slate-800/80 active`}>
        <div className="relative aspect-video bg-slate-800 static-noise flex flex-col items-center justify-center border-b border-slate-200 dark:border-slate-700">
          <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay" />
          <i className="ph-fill ph-warning-octagon text-5xl text-slate-500/80 mb-3 drop-shadow-md" />
          <span className="bg-red-500/20 text-red-200 font-mono text-[10px] px-2 py-1 rounded backdrop-blur-sm tracking-[0.2em] font-bold border border-red-500/30">
            LOSS SIGNAL
          </span>
        </div>
        <div className="p-4 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
              <i className="ph-fill ph-video-camera-slash text-slate-400 text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CAM-{cctv.id}</span>
              <span className="text-sm font-extrabold text-slate-600 dark:text-slate-400 truncate">{cctv.loc}</span>
            </div>
          </div>
          <span className="shrink-0 text-[10px] font-bold text-red-500 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/40 px-2 py-1 rounded-lg">OFF</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-panel rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border-2 border-white/40 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 flex flex-col group relative transition-all duration-300 hover:-translate-y-2 reveal reveal-delay-${(index % 4) + 1} bg-white/70 dark:bg-slate-800/80 active`}>
      <div className="relative aspect-video bg-slate-900 flex items-center justify-center border-b border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 group-hover:scale-105 transition-transform duration-700" />
        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10" />
        {/* Radar on hover */}
        <div className="absolute w-full h-full opacity-0 group-hover:opacity-30 radar-sweep animate-radar pointer-events-none transition-opacity duration-500" />
        {/* Camera aperture icon */}
        <i className="ph-fill ph-aperture text-6xl text-slate-400/20 absolute" />

        {/* Top HUD */}
        <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-white/90 font-bold tracking-widest drop-shadow-md">POS-{cctv.id}</span>
            <span className="text-[10px] font-mono text-emerald-400 drop-shadow-md">{currentTime}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-red-600/40 px-2 py-1 rounded backdrop-blur-md border border-red-500/50 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_#ef4444]" />
            <span className="text-[9px] font-mono text-white font-bold tracking-widest">LIVE</span>
          </div>
        </div>

        {/* Hover overlay */}
        <Link href="/cctv" className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center cursor-pointer z-30 backdrop-blur-[2px]">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/40 mb-2 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
            <i className="ph-fill ph-play text-2xl text-white ml-1" />
          </div>
          <span className="text-white text-xs font-bold tracking-wider transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">BUKA DASHBOARD</span>
        </Link>
      </div>

      <div className="p-4 flex justify-between items-center group-hover:bg-blue-50/50 dark:group-hover:bg-slate-700/80 transition-colors">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 flex items-center justify-center shrink-0 border border-blue-200 dark:border-blue-700 shadow-inner">
            <i className="ph-fill ph-video-camera text-blue-600 dark:text-blue-400 text-lg" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Kamera Aktif</span>
            <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cctv.loc}</span>
          </div>
        </div>
        <i className="ph-bold ph-wifi-high text-emerald-500 text-base drop-shadow-sm shrink-0" />
      </div>
    </div>
  );
}
