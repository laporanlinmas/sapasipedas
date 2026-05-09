'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CCTVSection from '@/components/CCTVSection';
import MapSection from '@/components/MapSection';
import ComplaintSection from '@/components/ComplaintSection';
import VideoSection from '@/components/VideoSection';
import StatsSection from '@/components/StatsSection';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import FormModal from '@/components/FormModal';
import WAModal from '@/components/WAModal';
import ProgramModal from '@/components/ProgramModal';
import JadwalModal from '@/components/JadwalModal';
import SuccessModal from '@/components/SuccessModal';

export default function HomePage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [ticketNumber, setTicketNumber] = useState('');

  // Scroll-reveal
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('active'); obs.unobserve(e.target); }
      }),
      { threshold: 0.08 },
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const open  = (id: string) => setActiveModal(id);
  const close = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300 overflow-x-hidden">

      {/* Background blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-600/[0.08] blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-purple-400/10 dark:bg-purple-600/[0.08] blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-amber-300/10 dark:bg-amber-600/[0.06] blur-3xl animate-blob animation-delay-4000" />
      </div>

      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-20">
        <CCTVSection />
        <MapSection />
        <ComplaintSection onOpenModal={open} />
        <VideoSection />
        <StatsSection />
        <InfoSection onOpenModal={open} />
      </main>

      <Footer />

      <FormModal
        isOpen={activeModal === 'formModal'}
        onClose={close}
        onSuccess={ticket => {
          setTicketNumber(ticket);
          close();
          setTimeout(() => open('successModal'), 300);
        }}
      />
      <WAModal      isOpen={activeModal === 'waModal'}      onClose={close} />
      <ProgramModal isOpen={activeModal === 'programModal'} onClose={close} />
      <JadwalModal  isOpen={activeModal === 'jadwalModal'}  onClose={close} />
      <SuccessModal isOpen={activeModal === 'successModal'} onClose={close} ticketNumber={ticketNumber} />
    </div>
  );
}
