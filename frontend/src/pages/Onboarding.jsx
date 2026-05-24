import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Upload, 
  CheckCircle2, 
  Loader2, 
  AlertCircle,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleUpload = () => {
    setIsUploading(true);
    // Mock upload delay
    setTimeout(() => {
      setIsUploading(false);
      setStep(2);
    }, 2000);
  };

  return (
    <div className="pt-6 md:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      {/* Progress Stepper with tactical node design */}
      <div className="flex items-center justify-between mb-12 bg-white px-6 py-4 rounded-full border border-stone-200/80 shadow-sm">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all ${
              step > s ? 'bg-stone-900 border-stone-900 text-white' :
              step === s ? 'bg-stone-900 border-stone-900 text-white' : 
              'bg-white border-stone-200 text-stone-400'
            }`}>
              {step > s ? <CheckCircle2 size={14} /> : s}
            </div>
            {s < 3 && (
              <div className={`w-12 sm:w-24 h-0.5 mx-2 rounded-full ${
                step > s ? 'bg-stone-900' : 'bg-stone-200'
              }`} />
            )}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl font-black text-stone-900 tracking-tight mb-2">Upload Profile Credentials</h2>
              <p className="text-stone-500 text-sm font-semibold">Drop your updated resume to extract skills and identify onboarding gaps.</p>
            </div>

            <div className="relative group">
              <input
                type="file"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
              <div className={`p-10 border-2 border-dashed rounded-3xl text-center transition-all ${
                file ? 'bg-amber-50/20 border-amber-600/50' : 'bg-white border-stone-200 hover:border-stone-400 shadow-sm'
              }`}>
                <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <Upload className="text-stone-600" size={20} />
                </div>
                <div className="text-sm font-bold text-stone-800">
                  {file ? file.name : "Select or drop PDF resume file"}
                </div>
                <p className="text-stone-400 text-xs mt-1">Accepts DOCX, PDF up to 10MB</p>
              </div>
            </div>

            <div className="flex gap-3 p-4 rounded-2xl bg-stone-100 border border-stone-200/80 text-stone-700 text-xs font-semibold">
              <AlertCircle className="shrink-0 text-stone-600" size={16} />
              <p>We process skill graphs securely on server-side. Experience layers are parsed cleanly into granular profiles.</p>
            </div>

            <button
              onClick={handleUpload}
              disabled={!file || isUploading}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-100 disabled:text-stone-400 text-white font-bold rounded-full shadow-sm transition-all flex items-center justify-center gap-2 text-sm active:scale-98"
            >
              {isUploading ? <Loader2 className="animate-spin" size={16} /> : "Initialize Analysis"}
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-black text-stone-900 tracking-tight mb-2">Extracted Experience Map</h2>
              <p className="text-stone-500 text-sm font-semibold">Identified <span className="text-amber-800 font-bold">12 qualified skills</span> and defined 4 technical gap priorities.</p>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {['React Enterprise', 'TS Interfaces', 'Node REST Engines', 'PostgreSQL DB', 'Docker Containers', 'AWS S3/Lambda'].map((skill) => (
                <div key={skill} className="flex items-center gap-2.5 p-4 rounded-xl bg-white border border-stone-200 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span className="font-bold text-xs text-stone-700">{skill}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/30 border border-amber-200/80">
              <h3 className="flex items-center gap-2 text-amber-900 font-extrabold text-sm mb-4">
                <BrainCircuit size={18} />
                Critical Onboarding Gaps
              </h3>
              <ul className="space-y-3">
                {[
                  'Advanced Microservice Orchestration & Istio Mesh',
                  'Distributed Consensus Algorithms & Raft Model',
                  'State Synchronizers (Redux / Zustand Scaled)',
                  'Consolidated Testing Suites (Vitest & Mock APIs)'
                ].map((gap) => (
                  <li key={gap} className="flex items-center gap-3 text-xs font-semibold text-stone-600">
                    <span className="w-4 h-4 rounded bg-stone-200 text-stone-700 flex items-center justify-center text-[9px] font-black">!</span>
                    {gap}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setStep(3)}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-full shadow-sm transition-all flex items-center justify-center gap-2 text-sm"
            >
              Generate Tailored Roadmap
              <ArrowRight size={16} />
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
              <CheckCircle2 size={28} className="text-emerald-700" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-stone-900 tracking-tight mb-2">Roadmap Compiled</h2>
              <p className="text-stone-500 text-sm font-semibold px-6">Your adaptive career path has been structured relative to your goal milestones.</p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm text-left">
              <div className="flex justify-between text-[11px] font-bold text-stone-400 mb-2 font-mono uppercase tracking-wider">
                <span>PATH_ID: NP_6672</span>
                <span>INITIAL PROGRESS: 0%</span>
              </div>
              <div className="h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '15%' }}
                  className="h-full bg-stone-900 rounded-full" 
                />
              </div>
            </div>

            <button
              onClick={() => navigate('/path')}
              className="w-full py-4 bg-stone-900 hover:bg-stone-800 text-white font-bold rounded-full shadow-md transition-all text-sm"
            >
              Enter Learning Path
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
