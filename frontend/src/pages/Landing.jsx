import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  BrainCircuit, 
  Target, 
  BarChart3
} from 'lucide-react';

export default function Landing() {
  return (
    <div className="relative overflow-hidden bg-[#FAF9F6]">
      {/* Subtle light background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e0_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10" />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-8 shadow-sm"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-amber-600 animate-pulse"></span>
          <span>Next-Generation Career Roadmapping Tool</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black tracking-tight text-stone-950 mb-6 font-sans leading-[1.05]"
        >
          Engineered to bridge <br />
          <span className="underline decoration-stone-200 decoration-8 underline-offset-4 text-stone-900">critical skill gaps.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          NeuralPath automatically structures granular, adaptive learning modules to guide engineering teams and developers through complex technical progressions.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3.5 justify-center mb-16"
        >
          <Link 
            to="/onboarding" 
            className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-md shadow-stone-900/10 active:scale-95 text-sm"
          >
            Assess Your Path
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-white hover:bg-stone-50 text-stone-800 font-bold rounded-full border border-stone-200 shadow-sm transition-all active:scale-95 text-sm"
          >
            Access Dashboard
          </Link>
        </motion.div>

        {/* Floating Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto bg-white border border-stone-200 rounded-[32px] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.06)] overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-stone-200"></span>
              <span className="w-3 h-3 rounded-full bg-stone-200"></span>
              <span className="w-3 h-3 rounded-full bg-stone-200"></span>
              <span className="text-xs text-stone-400 font-mono ml-2">PROPOSAL_ENGINE_V2_MOCKUP</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-50 border border-amber-100 text-[10px] font-bold text-amber-800 uppercase tracking-wider">
              Simulation
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 text-left">
            <div className="md:col-span-4 space-y-4">
              <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/60">
                <div className="text-[10px] font-bold uppercase text-stone-400 tracking-wider mb-1">Target Profile</div>
                <div className="font-extrabold text-stone-900 leading-tight">Senior Solutions Architect</div>
              </div>
              <div className="p-4 rounded-2xl bg-stone-50/80 border border-stone-200/60">
                <div className="text-[10px] font-bold uppercase text-stone-400 tracking-wider mb-1">Current Skill Match</div>
                <div className="font-extrabold text-[#2a2a24] text-2xl flex items-baseline gap-1">
                  74.5<span className="text-xs font-normal text-stone-400">%</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 p-5 bg-stone-50/50 border border-stone-200/50 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-stone-500 uppercase">Interactive Gap Resolution Graph</span>
                <span className="text-[11px] font-medium text-amber-600">4 module suggestions active</span>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Enterprise System Security (OWASP Top 10)", duration: "4 hours", match: "High Priority Gaps" },
                  { title: "Kafka Resilient Event Steaming", duration: "2.5 hours", match: "Architectural Bottleneck" },
                  { title: "Continuous DevSecOps Deployment", duration: "6 hours", match: "Optional Upgrade" },
                ].map((item, id) => (
                  <div key={id} className="flex justify-between items-center p-3.5 bg-white border border-stone-200/80 rounded-xl hover:border-stone-400 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-stone-300 flex items-center justify-center text-[10px] font-bold text-stone-500">{id + 1}</div>
                      <div>
                        <div className="text-xs font-bold text-stone-900">{item.title}</div>
                        <div className="text-[10px] text-stone-400 font-mono">{item.duration}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-100 text-stone-700">{item.match}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust & Grayscale Partners */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex -space-x-2.5">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
              ].map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt="Developer Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex text-amber-500 font-bold text-sm tracking-tight">★★★★★</div>
              <div className="text-xs font-bold text-stone-500">99+ Promoted tech-workers</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 opacity-55 grayscale">
            {[
              { name: 'Kintsugi', logo: <span className="font-extrabold tracking-tight text-stone-900 font-sans">Kintsugi</span> },
              { name: 'Frequencii', logo: <span className="font-extrabold tracking-tight text-stone-900 font-sans">Frequencii</span> },
              { name: 'CoreOS', logo: <span className="font-black tracking-tight text-stone-900 font-mono text-[13px] uppercase">CoreOS</span> },
              { name: 'Luminary', logo: <span className="font-bold tracking-tight text-stone-900 font-sans">Luminary</span> },
            ].map((p, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                {p.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Pristine Skill Analysis",
              desc: "Deploy automated parsing on complex profiles to map critical skills into structural data layers.",
              icon: BrainCircuit,
              tag: "01 / ANALYSIS"
            },
            {
              title: "Adaptive Roadmaps",
              desc: "Dynamic sequence modifications adapt modules relative to student progress blocks and goal timelines.",
              icon: Target,
              tag: "02 / ROADMAPS"
            },
            {
              title: "Executive Insights",
              desc: "Deliver high-fidelity reports detailing team competency, velocity metrics, and resource needs.",
              icon: BarChart3,
              tag: "03 / METRICS"
            }
          ].map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[24px] bg-white border border-stone-200/80 hover:border-stone-400 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:shadow-md group"
              >
                <div className="text-[10px] font-bold font-mono text-stone-400 mb-6 tracking-widest">{feature.tag}</div>
                <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center mb-6 border border-stone-200">
                  <IconComponent size={18} />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed font-semibold">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-16 border-t border-stone-200 bg-white text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <BrainCircuit className="text-stone-800" size={24} />
          <span className="text-lg font-black text-stone-900">Neural<span className="text-amber-600">Path</span></span>
        </div>
        <p className="text-stone-400 text-xs font-semibold">© 2026 NeuralPath. Crafted with premium layout details.</p>
      </footer>
    </div>
  );
}
