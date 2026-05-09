interface ComplaintSectionProps {
  onOpenModal: (modalId: string) => void;
}

export default function ComplaintSection({ onOpenModal }: ComplaintSectionProps) {
  return (
    <section id="pengaduan" className="scroll-mt-32 pt-16 border-t border-slate-200 dark:border-slate-800/50 reveal">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="inline-block p-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white mb-4 mx-auto shadow-lg shadow-orange-500/30">
            <i className="ph-fill ph-megaphone text-4xl"></i>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Pusat Layanan Pengaduan</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg max-w-2xl mx-auto font-medium">Sinergi bersama menjaga ketertiban. Laporkan indikasi pelanggaran, kerusakan fasilitas, atau gangguan kenyamanan di jalur pejalan kaki.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Option 1: Form Sistem */}
          <button onClick={() => onOpenModal('formModal')} className="group text-left glass-panel p-8 sm:p-10 rounded-[2.5rem] border-2 border-transparent hover:border-blue-400 dark:hover:border-blue-500/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform hover:-translate-y-2 bg-white/90 dark:bg-slate-800/90">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/40 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <i className="ph-fill ph-article text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Formulir Terpadu Sistem</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">Metode pelaporan formal dengan struktur data lengkap. Memungkinkan unggah bukti foto resolusi tinggi untuk tindak lanjut komprehensif.</p>
              
              <div className="inline-flex items-center gap-3 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-full shadow-md group-hover:shadow-lg transition-all w-full sm:w-auto justify-center">
                Buka Formulir <i className="ph-bold ph-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </div>
            </div>
          </button>

          {/* Option 2: WhatsApp */}
          <button onClick={() => onOpenModal('waModal')} className="group text-left glass-panel p-8 sm:p-10 rounded-[2.5rem] border-2 border-transparent hover:border-[#25D366]/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden transform hover:-translate-y-2 bg-white/90 dark:bg-slate-800/90">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl group-hover:bg-[#25D366]/20 transition-all duration-500"></div>
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] wa-bg pointer-events-none mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#25D366]/40 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <i className="ph-fill ph-whatsapp-logo text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#25D366] transition-colors">Interaksi Cepat WhatsApp</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">Koneksi langsung dengan operator piket siaga Satlinmas. Cocok untuk pelaporan insidental yang membutuhkan respon segera.</p>
              
              <div className="inline-flex items-center gap-3 text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-3 rounded-full shadow-md group-hover:shadow-lg transition-all w-full sm:w-auto justify-center">
                Mulai Percakapan <i className="ph-bold ph-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
