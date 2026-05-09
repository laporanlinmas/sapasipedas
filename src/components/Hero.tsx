import Image from 'next/image';

export default function Hero() {
  // Memisahkan data array agar JSX lebih ringkas dan bersih
  const stats = [
    { icon: 'ph-video-camera', label: '12 CCTV Aktif', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/30', border: 'border-blue-200 dark:border-blue-800/40' },
    { icon: 'ph-map-pin', label: '3 Jalur Aktif', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/30', border: 'border-indigo-200 dark:border-indigo-800/40' },
    { icon: 'ph-clock', label: 'Siaga 24 Jam', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/30', border: 'border-emerald-200 dark:border-emerald-800/40' },
    { icon: 'ph-megaphone', label: 'Lapor Sekarang', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-900/30', border: 'border-orange-200 dark:border-orange-800/40' },
  ];

  return (
    // Padding atas-bawah sedikit dikurangi agar lebih proporsional setelah scroll indicator dihapus
    <header className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden flex flex-col items-center justify-center">

      {/* Decorative floating orbs */}
      <div className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl animate-blob" />
      <div className="absolute top-32 right-[8%] w-56 h-56 rounded-full bg-purple-500/10 dark:bg-purple-400/10 blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-[30%] w-48 h-48 rounded-full bg-amber-400/10 dark:bg-amber-400/10 blur-3xl animate-blob animation-delay-4000" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 w-full">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-lg animate-pulse" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/icon-full.png"
                alt="Logo SIPEDAS"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6 border border-blue-200 dark:border-blue-800/50 backdrop-blur-sm shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          Sistem Terpadu Satlinmas Aktif
        </div>

        {/* Typography Section */}
        <h1 className="mb-4">
          <span className="block text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            SIPEDAS
          </span>
          <span className="block text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mt-1">
            Sapa Pedestrian
          </span>
        </h1>

        <p className="text-sm md:text-base font-bold text-slate-500 dark:text-slate-400 mb-6 tracking-widest uppercase">
          Satlinmas Pedestrian Kab. Ponorogo
        </p>

        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
          Pemantauan CCTV real-time, pemetaan zona kerawanan, dan respon cepat pengaduan masyarakat di kawasan pejalan kaki.
        </p>

        {/* Quick-stat pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {stats.map(({ icon, label, color, bg, border }) => (
            <span
              key={label}
              // Mengganti efek hover scale dengan translasi Y agar terasa lebih modern & subtle
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${bg} ${color} border ${border} hover:-translate-y-1 transition-transform duration-200 cursor-default select-none shadow-sm`}
            >
              <i className={`ph-fill ${icon} text-sm`} />
              {label}
            </span>
          ))}
        </div>

      </div>
    </header>
  );
}
