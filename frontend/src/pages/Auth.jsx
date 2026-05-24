import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Github, 
  Chrome, 
  Mail, 
  Lock, 
  User, 
  ArrowRight,
  BrainCircuit
} from 'lucide-react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen pt-28 flex items-center justify-center px-4 bg-[#FAF9F6]">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white border border-stone-200 p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-stone-100 border border-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BrainCircuit className="text-stone-900" size={24} />
          </div>
          <h2 className="text-2xl font-black text-stone-900 tracking-tight mb-2">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-stone-500 text-xs font-semibold">
            Access secure tailored technical roadmaps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 text-xs font-semibold focus:outline-none focus:border-stone-900 transition-colors"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
              <input 
                type="email" 
                placeholder="developer@neuralpath.ai"
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 text-xs font-semibold focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">Password</label>
              <button type="button" className="text-[10px] font-black text-stone-500 hover:underline">Forgot?</button>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 placeholder:text-stone-400 text-xs font-semibold focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>
          </div>

          <button className="w-full py-3.5 mt-4 bg-stone-900 hover:bg-stone-850 text-white font-extrabold rounded-full transition-all shadow-md shadow-stone-950/10 flex items-center justify-center gap-1.5 text-xs active:scale-98">
            {isLogin ? 'Sign In to Dashboard' : 'Create Account'}
            <ArrowRight size={14} />
          </button>
        </form>

        <div className="mt-6">
          <div className="relative flex items-center justify-center mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-stone-100"></div>
            </div>
            <span className="relative bg-white px-3 text-[10px] text-stone-400 uppercase font-bold tracking-widest">Or access with</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-1.5 p-2.5 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors text-stone-700 text-xs font-bold shadow-sm">
              <Github size={16} />
              <span>GitHub</span>
            </button>
            <button className="flex items-center justify-center gap-1.5 p-2.5 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors text-stone-700 text-xs font-bold shadow-sm">
              <Chrome size={14} />
              <span>Google</span>
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-stone-500 font-semibold">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-stone-900 font-extrabold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
