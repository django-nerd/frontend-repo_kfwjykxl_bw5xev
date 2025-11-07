import React from 'react';
import { Mic, Brain, Workflow, Shield } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'AI Voice Agents',
    desc: 'Natural, human-like conversations that qualify leads, book meetings, and support customers 24/7.',
  },
  {
    icon: Brain,
    title: 'Smart Automation',
    desc: 'Connect your tools and let AI orchestrate tasks across CRM, email, and analytics automatically.',
  },
  {
    icon: Workflow,
    title: 'No-Code Flows',
    desc: 'Design powerful journeys with drag-and-drop blocks and real-time testing right in your browser.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    desc: 'SOC2-ready controls, row-level permissions, and full audit logs to keep your data safe.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-[#07070A] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_50%_0%,rgba(108,99,255,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What you can build</h2>
          <p className="mt-3 text-white/70">
            Turn your website into a conversion engine with voice, automation, and powerful analytics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
