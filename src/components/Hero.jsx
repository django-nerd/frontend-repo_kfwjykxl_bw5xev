import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft radial gradient aura overlay (non-blocking) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.25),rgba(255,130,67,0.12)_35%,rgba(0,0,0,0.7)_75%)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 md:pt-36">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span className="text-xs text-purple-100/90">Futuristic AI for modern businesses</span>
        </div>

        <h1 className="mt-6 text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Build an AI-powered future
          <span className="block bg-gradient-to-r from-purple-300 via-blue-300 to-orange-200 bg-clip-text text-transparent">for your online business</span>
        </h1>

        <p className="mt-5 max-w-2xl text-center text-base text-white/80 sm:text-lg">
          Launch voice-enabled assistants, automate customer journeys, and deliver magical experiences with a minimal, elegant AI platform.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Explore Features
          </a>
        </div>

        <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 text-center text-white/70 sm:grid-cols-4">
          {[
            ['99.9% uptime', 'enterprise-ready'],
            ['<100ms', 'response latency'],
            ['24/7', 'global support'],
            ['ISO27001', 'compliant'],
          ].map(([k, v]) => (
            <div key={k} className="rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur">
              <div className="text-sm font-semibold text-white">{k}</div>
              <div className="text-xs text-white/60">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
