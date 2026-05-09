import Image from 'next/image';

export default function Hero() {
  return (
    // Padding pt-20 dan pb-8 (sebelumnya pt-36 pb-16) agar jauh lebih ringkas dan hemat tempat
    <header className="pt-20 pb-8 md:pt-28 md:pb-12 relative overflow-hidden">

      {/* Decorative floating orbs */}
      <div
        className="absolute top-10 left-[10%] w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl pointer-events-none animate-blob"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute top-20 right-[8%] w-40 h-40 md:w-56 md:h-56 rounded-full bg-purple-500/10 dark:bg-purple-400/10 blur-3xl pointer-events-none animate-blob animation-delay-2000"
      />
      <div
        className="absolute bottom-4 left-[30%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-amber-400/10 dark:bg-amber-400/10 blur-3xl pointer-events-none animate-blob animation-delay-4000"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Logo - Diperkecil sedikit agar menghemat ruang vertikal */}
        <div className="flex justify-center mb-5">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 blur-lg pointer-events-none animate-pulse" />
            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/icon-full.png"
                alt="SIPEDAS"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-1">
          <span className="block text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 tracking-[0.3em] drop-shadow-sm mb-2 ml-1">
            SI-PEDAS
          </span>
          <p className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 mb-4 tracking-[0.15em] uppercase">
            Sistem Informasi Pedestrian Satlinmas
          </p>
        </div>

        {/* Fokus Utama: Sapa Pedestrian */}
        <h1 className="mb-4">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 tracking-tight leading-none pb-1 drop-shadow-sm">
            Sapa Pedestrian
          </span>
        </h1>

        {/* Description - Margin bottom dikurangi */}
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-8 px-2">
          Sistem terpadu untuk <strong className="text-blue-600 dark:text-blue-400">pemantauan CCTV real-time</strong>, pemetaan kawasan, 
          analisis <strong className="text-orange-500 dark:text-orange-400">zona kerawanan</strong>, dan respon cepat 
          terhadap pengaduan masyarakat di kawasan pedestrian Ponorogo.
        </p>

        {/* Quick-stat pills 
            - flex-nowrap & overflow-x-auto memastikan konten tetap menyamping di mobile (swipeable)
            - [scrollbar-width:none] menyembunyikan garis scroll agar UI tetap clean
        */}
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 w-full overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory px-1">
          {[
            { icon: 'ph-video-camera', title: 'CCTV Real-time', desc: 'Pemantauan Aktif', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/30', border: 'border-blue-200 dark:border-blue-800/40' },
            { icon: 'ph-map-trifold', title: 'Pemetaan Kawasan', desc: 'Monitoring Spasial', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/30', border: 'border-indigo-200 dark:border-indigo-800/40' },
            { icon: 'ph-shield-warning', title: 'Zona Kerawanan', desc: 'Deteksi Dini', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/30', border: 'border-rose-200 dark:border-rose-800/40' },
            { icon: 'ph-lightning', title: 'Respon Cepat', desc: 'Pengaduan Warga', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/30', border: 'border-amber-200 dark:border-amber-800/40' },
          ].map(({ icon, title, desc, color, bg, border }) => (
            <div
              key={title}
              // shrink-0 agar tidak menyusut paksa, padding (px, py) dibuat kecil (kecil-kecil aja)
              className={`shrink-0 snap-center flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border ${bg} ${border} hover:scale-105 transition-transform duration-200 cursor-default select-none shadow-sm`}
            >
              <i className={`ph-fill ${icon} text-base md:text-xl ${color}`} />
              <div className="text-left flex flex-col justify-center">
                <span className={`text-[11px] md:text-sm font-bold ${color} leading-none mb-0.5 md:mb-1`}>
                  {title}
                </span>
                <span className="text-[8px] md:text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </header>
  );
}
