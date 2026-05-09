'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CCTVData {
  loc: string;
  status: 'online' | 'offline';
  id: string;
}

const cctvData: CCTVData[] = [
  { loc: "Simpang Tugu", id: "01", youtubeId: "1v52cQ1qJBA", status: "online" },
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

      <div className="grid grid-cols-1 md:max-w-3xl md:mx-auto gap-5">
        {cctvData.map((cctv) => (
          <div key={cctv.id} className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/40 dark:border-slate-700 flex flex-col group relative reveal bg-white/70 dark:bg-slate-800/80 active">
            
            {/* Header / Top HUD */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800 justify-between">
              <div className="flex items-center gap-3">
                <i className="ph-fill ph-video-camera text-blue-400 text-lg" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest">LIVE CCTV</span>
                  <span className="text-sm font-extrabold text-slate-200">{cctv.loc}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-red-600/40 px-2 py-1 rounded border border-red-500/50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_5px_#ef4444]" />
                <span className="text-[9px] font-mono text-white font-bold tracking-widest">LIVE</span>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black w-full">
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


