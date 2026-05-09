import Image from 'next/image';

export default function Hero() {
  return (
    <header className="pt-36 pb-16 md:pt-44 md:pb-24 relative overflow-hidden">

      {/* Decorative floating orbs */}
      <div
        className="absolute top-20 left-[10%] w-40 h-40 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl pointer-events-none animate-blob"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute top-32 right-[8%] w-56 h-56 rounded-full bg-purple-500/10 dark:bg-purple-400/10 blur-3xl pointer-events-none animate-blob animation-delay-2000"
      />
      <div
        className="absolute bottom-8 left-[30%] w-48 h-48 rounded-full bg-amber-400/10 dark:bg-amber-400/10 blur-3xl pointer-events-none animate-blob animation-delay-4000"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 blur-xl pointer-events-none animate-pulse" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/icon-full.png"
                alt="SIPEDAS"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="mb-2">
          {/* SI-PEDAS dengan warna kuning emas dan spasi huruf persis seperti gambar */}
          <span className="block text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-500 tracking-[0.3em] drop-shadow-sm mb-3 ml-2">
            SI-PEDAS
          </span>
          <p className="text-xs md:text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 tracking-[0.15em] uppercase">
            Sistem Informasi Pedestrian Satlinmas
          </p>
        </div>

        {/* Fokus Utama: Sapa Pedestrian */}
        <h1 className="mb-6">
          <span className="block text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 tracking-tight leading-none pb-2 drop-shadow-sm">
            Sapa Pedestrian
          </span>
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium mb-10">
          Sistem terpadu untuk <strong className="text-blue-600 dark:text-blue-400">pemantauan CCTV real-time</strong>, pemetaan kawasan, 
          analisis <strong className="text-orange-500 dark:text-orange-400">zona kerawanan</strong>, dan respon cepat 
          terhadap pengaduan masyarakat di kawasan pedestrian Ponorogo.
        </p>

        {/* Quick-stat pills (Dimodifikasi menjadi 2 baris teks agar sesuai) */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {[
            { icon: 'ph-video-camera', title: 'CCTV Real-time', desc: 'Pemantauan Aktif', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/30', border: 'border-blue-200 dark:border-blue-800/40' },
            { icon: 'ph-map-trifold', title: 'Pemetaan Kawasan', desc: 'Monitoring Spasial', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/30', border: 'border-indigo-200 dark:border-indigo-800/40' },
            { icon: 'ph-shield-warning', title: 'Zona Kerawanan', desc: 'Deteksi Dini', color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-50 dark:bg-rose-900/30', border: 'border-rose-200 dark:border-rose-800/40' },
            { icon: 'ph-lightning', title: 'Respon Cepat', desc: 'Pengaduan Warga', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/30', border: 'border-amber-200 dark:border-amber-800/40' },
          ].map(({ icon, title, desc, color, bg, border }) => (
            <div
              key={title}
              className={`flex items-center gap-3 px-5 py-2.5 rounded-full border ${bg} ${border} hover:scale-105 transition-transform duration-200 cursor-default select-none shadow-sm`}
            >
              <i className={`ph-fill ${icon} text-xl ${color}`} />
              <div className="text-left flex flex-col justify-center">
                <span className={`text-sm font-bold ${color} leading-none mb-1`}>
                  {title}
                </span>
                <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">
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
