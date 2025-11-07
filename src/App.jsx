import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Your AI Business. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
