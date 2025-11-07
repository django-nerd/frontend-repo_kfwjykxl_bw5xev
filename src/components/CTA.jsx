import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="relative w-full bg-[#07070A] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,179,237,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to build your AI-powered site?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Tell us about your business and we’ll set up a tailored AI voice assistant, automation flows, and conversion tracking.
        </p>

        <form
          className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="relative w-full">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-white placeholder:text-white/50 focus:border-white/20 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/20 transition hover:brightness-110 sm:w-auto"
          >
            Request Demo <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-3 text-xs text-white/50">No spam. We’ll get back within 24 hours.</p>
      </div>
    </section>
  );
};

export default CTA;
