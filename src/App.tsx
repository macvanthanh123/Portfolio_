import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { ParticleBackground } from './components/ParticleBackground';
import { ChatBot } from './components/ChatBot';
import { SplineViewer } from './components/SplineViewer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      {/* Spline 3D Background - Full Page */}
      <div className="fixed inset-0 z-0">
        <SplineViewer
          sceneUrl="https://prod.spline.design/XZAsVt2CuWd7dyBL/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Animated Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* AI ChatBot */}
      <ChatBot />

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <p className="text-slate-400">
            © 2024 Hồ sơ Kỹ sư AI. Xây dựng bằng React, Tailwind CSS & Motion.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Thiết kế với niềm đam mê cho AI & Machine Learning
          </p>
        </div>
      </footer>
    </div>
  );
}