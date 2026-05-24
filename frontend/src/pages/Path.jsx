import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  CheckCircle,
  Clock,
  BookOpen,
  HelpCircle,
  Terminal,
  Zap,
  ArrowRight
} from 'lucide-react';

const MODULES = [
  {
    id: 1,
    title: 'Modern React Architecture',
    desc: 'Deep dive into hooks, suspense, and server components.',
    status: 'completed',
    level: 'Intermediate',
    duration: '2.5 hrs'
  },
  {
    id: 2,
    title: 'TypeScript Performance',
    desc: 'Advanced type gymnastics and optimization patterns.',
    status: 'active',
    level: 'Advanced',
    duration: '1.8 hrs'
  },
  {
    id: 3,
    title: 'Micro-Frontend Patterns',
    desc: 'Scalable frontend architecture for large teams.',
    status: 'locked',
    level: 'Advanced',
    duration: '3.2 hrs'
  },
  {
    id: 4,
    title: 'State Management at Scale',
    desc: 'From Context API to Zustand and beyond.',
    status: 'locked',
    level: 'Intermediate',
    duration: '2.0 hrs'
  },
  {
    id: 5,
    title: 'Edge Runtime Mastery',
    desc: 'Deploying logic at the edge for low latency.',
    status: 'locked',
    level: 'Expert',
    duration: '4.5 hrs'
  }
];

export default function Path() {
  const [activeModule, setActiveModule] = useState(2);

  return (
    <div className="pt-6 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar: Path Structure */}
      <div className="lg:col-span-4 space-y-6">
        <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm">
          <h3 className="text-sm font-black text-stone-900 mb-6 flex items-center gap-2 uppercase tracking-wider">
            <BookOpen size={16} className="text-stone-700" />
            Curriculum Path
          </h3>
          
          <div className="relative space-y-4">
            {/* Connecting Line */}
            <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-stone-100" />
            
            {MODULES.map((mod, i) => (
              <div 
                key={mod.id}
                onClick={() => mod.status !== 'locked' && setActiveModule(mod.id)}
                className={`relative flex items-center gap-4 p-3 rounded-2xl transition-all cursor-pointer border ${
                  activeModule === mod.id 
                    ? 'bg-stone-50 border-stone-300' 
                    : 'border-transparent hover:bg-stone-50/50'
                } ${mod.status === 'locked' ? 'opacity-40' : ''}`}
              >
                <div className={`relative z-10 w-4 h-4 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  mod.status === 'completed' ? 'bg-emerald-600 border-emerald-600 text-white' :
                  mod.status === 'active' ? 'bg-stone-900 border-stone-100 text-white shadow-md shadow-stone-900/10' :
                  'bg-white border-stone-200 text-stone-400'
                }`}>
                  {mod.status === 'completed' ? <CheckCircle size={10} /> : null}
                </div>
                
                <div className="flex-1">
                  <h4 className={`text-xs font-bold leading-tight ${activeModule === mod.id ? 'text-stone-950' : 'text-stone-600'}`}>
                    {mod.title}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[10px] font-bold text-stone-400 font-mono uppercase tracking-tight">{mod.duration}</span>
                    <span className="text-[10px] text-stone-400 font-semibold">• {mod.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-[#FCFBF9] border border-stone-200 shadow-sm">
          <h4 className="font-bold text-stone-900 flex items-center gap-2 text-xs uppercase tracking-wider mb-2">
            <Zap size={14} className="text-amber-600" />
            Intelligent Gap Fix
          </h4>
          <p className="text-xs text-stone-500 font-semibold leading-relaxed">
            Based on gaps identified, modules prioritize "TypeScript Performance" to establish advanced architectural foundations faster.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="lg:col-span-8 space-y-8">
        <motion.div
          key={activeModule}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-white border border-stone-200 shadow-sm min-h-[500px] flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-stone-100">
            <div>
              <div className="bg-stone-100 text-stone-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded inline-block mb-3">
                Active Chapter
              </div>
              <h2 className="text-2xl font-black text-stone-900 leading-tight">
                {MODULES.find(m => m.id === activeModule)?.title}
              </h2>
            </div>
            {/* Minimalist Avatar indicators */}
            <div className="flex -space-x-1.5 shrink-0">
              {[1, 2, 3].map(u => (
                <div key={u} className="w-7 h-7 rounded-full border border-white bg-stone-100 flex items-center justify-center text-[9px] text-stone-500 font-bold">
                  {u}
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 space-y-6">
            {/* Elegant Video Mock / Lesson Visual */}
            <div className="aspect-video rounded-2xl bg-stone-950 border border-stone-800 flex items-center justify-center group cursor-pointer overflow-hidden relative shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent" />
              <div className="w-12 h-12 rounded-full bg-white text-stone-950 flex items-center justify-center z-10 group-hover:scale-105 transition-transform shadow-md">
                <Play size={18} fill="currentColor" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-bold text-stone-400 z-10 font-mono">
                <span className="flex items-center gap-1.5 text-stone-300"><Clock size={12} /> 18:42 lessons</span>
                <span className="bg-stone-900/60 px-2 py-0.5 rounded border border-stone-800">Section 1 of 4</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="flex items-center justify-between p-4 rounded-xl bg-stone-50 hover:bg-white border border-stone-200 hover:border-stone-400 transition-all text-left">
                <div className="flex gap-3">
                  <Terminal className="text-stone-700" size={18} />
                  <div>
                    <div className="text-xs font-bold text-stone-900">Sandbox Playground</div>
                    <div className="text-[10px] text-stone-400 font-semibold">Write live compiler scripts</div>
                  </div>
                </div>
                <ChevronIcon />
              </button>
              <button className="flex items-center justify-between p-4 rounded-xl bg-stone-50 hover:bg-white border border-stone-200 hover:border-stone-400 transition-all text-left">
                <div className="flex gap-3">
                  <HelpCircle className="text-stone-700" size={18} />
                  <div>
                    <div className="text-xs font-bold text-stone-900">Module Quiz Assessment</div>
                    <div className="text-[10px] text-stone-400 font-semibold">5 metrics • 50 XP award</div>
                  </div>
                </div>
                <ChevronIcon />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center">
            <button className="text-stone-500 hover:text-stone-900 transition-colors text-xs font-bold">
              Previous Module
            </button>
            <button className="px-6 py-3 bg-stone-900 text-white font-bold rounded-full flex items-center gap-1.5 text-xs shadow-sm active:scale-98 transition-all">
              Continue Lesson
              <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-stone-400">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  );
}
