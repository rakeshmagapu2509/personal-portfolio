import { useState } from 'react';
import { GlobalBackground } from './components/GlobalBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Hackathons } from './components/Hackathons';
import { FindMeOnline } from './components/FindMeOnline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CertificateModal } from './components/CertificateModal';
import type { Certificate } from './types/portfolio';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <div className="min-h-screen bg-[#030306] text-zinc-100 selection:bg-purple-600/30 selection:text-purple-200 overflow-x-hidden relative font-sans antialiased">
      {/* Futuristic Ambient & Neural Background (Z-0) */}
      <GlobalBackground />

      {/* Floating Dark Glassmorphic Navbar (Z-40) */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content Layer (Z-10) */}
      <main className="relative z-10 flex flex-col space-y-6 sm:space-y-12 bg-transparent">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
        <Hackathons onSelectCertificate={(cert) => setSelectedCertificate(cert)} />
        <FindMeOnline />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CertificateModal
        isOpen={!!selectedCertificate}
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </div>
  );
}

export default App;
