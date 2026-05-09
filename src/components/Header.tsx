"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  // Data fitur disesuaikan dengan fokus sistem yang baru
  const systemFeatures = [
    {
      id: 'cctv',
      title: 'CCTV Real-time',
      desc: 'Pemantauan Aktif',
      icon: 'ph-video-camera',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50/80 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800/40',
      shadow: 'shadow-blue-500/10'
    },
    {
      id: 'pemetaan',
      title: 'Pemetaan Kawasan',
      desc: 'Monitoring Spasial',
      icon: 'ph-map-trifold',
      color: 'text-indigo-600 dark:text-indigo-400',
      bg: 'bg-indigo-50/80 dark:bg-indigo-900/20',
      border: 'border-indigo-200 dark:border-indigo-800/40',
      shadow: 'shadow-indigo-500/10'
    },
    {
      id: 'kerawanan',
      title: 'Zona Kerawanan',
      desc: 'Deteksi Dini',
      icon: 'ph-shield-warning',
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50/80 dark:bg-rose-900/20',
      border: 'border-rose-200 dark:border-rose-800/40',
      shadow: 'shadow-rose-500/10'
    },
    {
      id: 'respon',
      title: 'Respon Cepat',
      desc: 'Pengaduan Warga',
      icon: 'ph-lightning',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50/80 dark:bg-amber-900/20',
      border: 'border-amber-200 dark:border-amber-800/40',
      shadow: 'shadow-amber-500/10'
    }
  ];

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden flex flex-col items-center justify-center min-h-[85vh]">
      
      {/* 1. Background Orbs & Grid Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      
      <div className="absolute top-1/4 left-[15%] w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-[10%] w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[40%] w-64 h-64 rounded-full bg-rose-500/10 dark:bg-rose-500/5 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10 text-center">
        
        {/* 2. Logo & SI-PEDAS Badge */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative mb-5 group">
            <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 blur-xl opacity-50 group-hover:opacity-80 transition duration-500" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/sipedas.png"
                alt="Logo LINMAS / SIPEDAS"
                width={80}
                height={80}
                className="object-contain group-hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Badge SI-PEDAS (Persis struktur header) */}
          <div className="inline-flex items-center gap-3 px-1.5 py-1.5 pr-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-full shadow-sm">
            <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-full text-xs font-black tracking-widest">
              SI-PEDAS
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300">
              <i className="ph-fill ph-device-mobile text-blue-500 text-sm" />
              Mobile App
            </span>
          </div>
        </div>

        {/* 3. Main Typography (Fokus Sapa Pedestrian) */}
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-[0.2em]">
            Sistem Informasi Pedestrian Satlinmas
          </p>
          
          <h1 className="mb-6">
            <span className="block text-[3.5rem] leading-[1.1] sm:text-7xl md:text-[5.5rem] lg:text-[6.5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-white dark:via-blue-100 dark:to-slate-300 tracking-tighter drop-shadow-sm pb-2">
              Sapa Pedestrian
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-3xl mx-auto">
            Sistem terpadu untuk <strong className="text-blue-600 dark:text-blue-400 font-bold">pemantauan CCTV real-time</strong>, pemetaan kawasan, 
            analisis <strong className="text-rose-600 dark:text-rose-400 font-bold">zona kerawanan</strong>, dan respon cepat 
            terhadap pengaduan masyarakat di kawasan pedestrian Ponorogo.
          </p>
        </div>

        {/* 4. Feature Cards / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 w-full max-w-5xl mx-auto mb-12">
          {systemFeatures.map((feature) => (
            <div
              key={feature.id}
              className={`flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl md:rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${feature.bg} ${feature.border} ${feature.shadow}`}
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center mb-3 md:mb-4 border ${feature.border}`}>
                <i className={`${feature.icon} ${feature.color} text-xl md:text-2xl`} />
              </div>
              <h3 className={`text-sm md:text-base font-bold ${feature.color} mb-1 text-center leading-tight`}>
                {feature.title}
              </h3>
              <p className="text-[10px] md:text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 5. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/cctv"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold text-sm md:text-base overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20 dark:shadow-white/10 w-full sm:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </span>
              Pantau CCTV Sekarang
            </span>
            <i className="ph-bold ph-arrow-right relative group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/pengaduan"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-full font-bold text-sm md:text-base transition-all hover:bg-slate-50 dark:hover:bg-slate-700/80 hover:shadow-md w-full sm:w-auto"
          >
            <i className="ph-bold ph-warning-circle text-rose-500" />
            Lapor Pengaduan
          </Link>
        </div>

      </div>
    </section>
  );
}
