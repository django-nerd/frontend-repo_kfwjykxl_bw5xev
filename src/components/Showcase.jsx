import React from 'react';
import { PlayCircle, CheckCircle2 } from 'lucide-react';

const items = [
  'Book demos automatically from chat or voice',
  'Instant lead scoring with CRM sync',
  'Answer FAQs with your brand tone',
  'Real-time analytics on every interaction',
];

const Showcase = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,138,76,0.12),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <PlayCircle className="h-4 w-4" /> See it in action
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Launch an AI concierge that turns visitors into customers
          </h2>
          <p className="mt-3 text-white/70">
            Embed a voice-enabled widget on your site. Qualify leads, answer questions, and book meetings without human handoff.
          </p>
          <ul className="mt-6 space-y-3">
            {items.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm text-white/80">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-blue-300" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://cdn.coverr.co/videos/coverr-animated-gradient-1576/1080p.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
