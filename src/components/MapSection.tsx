'use client';

import { useState } from 'react';

export default function MapSection() {
  const [map1Loaded, setMap1Loaded] = useState(false);
  const [map2Loaded, setMap2Loaded] = useState(false);

  return (
    <section id="peta" className="scroll-mt-32 reveal">
      {/* Header */}
      <div className="mb-10 relative pl-3">
        <div className="absolute -left-4 top-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
          Pemetaan Geospasial
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg font-medium">
          Analisis titik rawan dan persebaran pos penjagaan terpadu secara presisi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* ── Peta Kerawanan ── */}
        <div className="glass-panel p-5 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:border-orange-400 dark:hover:border-orange-600 flex flex-col group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 border border-transparent">
          {/* Hover shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

          <div className="flex justify-between items-center mb-5 relative z-10">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                <i className="ph-fill ph-warning text-2xl" />
              </div>
              <div>
                <div>Peta Kerawanan</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Titik rawan & kejadian</div>
              </div>
            </h3>
            <a
              href="https://www.google.com/maps/d/viewer?mid=1TuYzI9pWcS39u6wSyfhySLT6jyO_BNE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 text-slate-700 dark:text-slate-200 py-2 px-3.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <i className="ph-bold ph-arrows-out text-sm" />
              Layar Penuh
            </a>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700/50 flex-grow min-h-[360px] shadow-inner group-hover:border-orange-400/50 transition-colors">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-4 border-l-4 border-orange-500 z-10 rounded-tl-xl m-2 opacity-80" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-4 border-r-4 border-orange-500 z-10 rounded-br-xl m-2 opacity-80" />

            {/* Loading state */}
            {!map1Loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-slate-900 z-20">
                <div className="w-10 h-10 rounded-full border-4 border-orange-500/30 border-t-orange-500 animate-spin" />
                <span className="text-slate-500 text-xs font-medium">Memuat peta...</span>
              </div>
            )}

            <iframe
              src="https://www.google.com/maps/d/embed?mid=1TuYzI9pWcS39u6wSyfhySLT6jyO_BNE&z=15"
              className="absolute top-[-55px] left-0 w-full h-[calc(100%+55px)] border-0"
              title="Peta Kerawanan Pedestrian"
              allowFullScreen
              loading="lazy"
              onLoad={() => setMap1Loaded(true)}
            />
          </div>

          {/* Badge */}
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800/40 px-3 py-1 rounded-full">
              <i className="ph-fill ph-map-pin text-xs" />
              Google Maps — Peta Kustom
            </span>
          </div>
        </div>

        {/* ── Peta Pos Jaga ── */}
        <div className="glass-panel p-5 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 flex flex-col group relative overflow-hidden bg-white/80 dark:bg-slate-800/80 border border-transparent">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

          <div className="flex justify-between items-center mb-5 relative z-10">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <i className="ph-fill ph-shield-check text-2xl" />
              </div>
              <div>
                <div>Pos Jaga Satlinmas</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">Lokasi pos penjagaan aktif</div>
              </div>
            </h3>
            <a
              href="https://maps.google.com/maps?q=-7.87148,111.47032&hl=id&z=17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-slate-700 dark:text-slate-200 py-2 px-3.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <i className="ph-bold ph-arrows-out text-sm" />
              Layar Penuh
            </a>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700/50 flex-grow min-h-[360px] shadow-inner group-hover:border-blue-400/50 transition-colors">
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 border-blue-500 z-10 rounded-tr-xl m-2 opacity-80" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-4 border-l-4 border-blue-500 z-10 rounded-bl-xl m-2 opacity-80" />

            {/* Loading state */}
            {!map2Loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-100 dark:bg-slate-900 z-20">
                <div className="w-10 h-10 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
                <span className="text-slate-500 text-xs font-medium">Memuat peta...</span>
              </div>
            )}

            <iframe
              src="https://maps.google.com/maps?q=-7.87148,111.47032&hl=id&z=17&output=embed"
              className="absolute top-0 left-0 w-full h-full border-0"
              title="Pos Jaga Pedestrian"
              allowFullScreen
              loading="lazy"
              onLoad={() => setMap2Loaded(true)}
            />
          </div>

          {/* Badge */}
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/40 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Pos Aktif 24 Jam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
