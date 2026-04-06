import { motion, AnimatePresence } from 'motion/react';
import { Award, Clock, Heart } from 'lucide-react';
import { useState } from 'react';

type VariantType = 'plan1' | 'plan4' | 'plan5';

export default function Hero() {
  const [variant, setVariant] = useState<VariantType>('plan1');

  const plans = [
    { id: 'plan1', label: '第1案（月桂冠）' },
    { id: 'plan4', label: '第4案（リスト）' },
    { id: 'plan5', label: '第5案（モダン）' },
  ] as const;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
    >
      {/* プレビュー用スウィッチャー (開発者/クライアント用UI) */}
      <div className="absolute top-20 right-4 md:right-8 z-50 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl p-2 flex flex-wrap gap-1 border border-orange-100 max-w-[320px] md:max-w-none justify-end">
        {plans.map((plan) => (
          <button
            key={plan.id}
            onClick={() => setVariant(plan.id)}
            className={`px-3 py-1.5 md:px-4 md:py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
              variant === plan.id
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-gray-600 hover:bg-orange-50'
            }`}
          >
            {plan.label}
          </button>
        ))}
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence>
          {variant === 'plan4' ? (
            <motion.img
              key="bg-plan4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              src="/img/hero.png"
              alt="ヒーロー画像"
              className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
            />
          ) : (
            <motion.img
              key="bg-default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=1000"
              alt="窓の外を見つめる猫"
              className="absolute inset-0 w-full h-full object-cover object-center md:object-[40%_center] md:-scale-x-100"
              referrerPolicy="no-referrer"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 md:from-black/40 md:via-black/10 to-transparent"></div>
      </div>

      <div className="relative z-10 px-6 pt-12 pb-24 text-white max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left flex flex-col items-center md:items-start"
        >
          <p className="text-xl font-serif italic mb-2 drop-shadow-md">無事に帰ってきて…</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow-lg">
            その願い、私たちと<br />
            一緒に叶えませんか？
          </h2>
        </motion.div>

        <div className="min-h-[160px]">
          <AnimatePresence mode="wait">
            {variant === 'plan1' && (
              <motion.div
                key="plan1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mt-6 md:mt-8"
              >
                <img src="/img/icon95.png" alt="発見率95%以上" className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105" />
                <img src="/img/iconTime.png" alt="48時間以内の急行" className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105" />
                <img src="/img/iconFemale.png" alt="女性専門の安心サポート" className="w-28 h-28 md:w-36 md:h-36 object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105" />
              </motion.div>
            )}


            {variant === 'plan4' && (
              <motion.div
                key="plan4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-6 mt-8 w-full md:w-auto"
              >
                <div className="flex items-center gap-5 text-white group cursor-default">
                  <img src="/img/icon95.png" alt="発見率95%以上" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform" />
                  <span className="text-2xl md:text-3xl font-bold tracking-widest border-b-2 border-transparent group-hover:border-amber-400 transition-all pb-1 drop-shadow-lg">発見率95%以上</span>
                </div>
                
                <div className="flex items-center gap-5 text-white group cursor-default">
                  <img src="/img/iconTime.png" alt="48時間以内の急行" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform" />
                  <span className="text-2xl md:text-3xl font-bold tracking-widest border-b-2 border-transparent group-hover:border-orange-400 transition-all pb-1 drop-shadow-lg">48時間以内の急行</span>
                </div>

                <div className="flex items-center gap-5 text-white group cursor-default">
                  <img src="/img/iconFemale.png" alt="女性専門サポート" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform" />
                  <span className="text-2xl md:text-3xl font-bold tracking-widest border-b-2 border-transparent group-hover:border-pink-400 transition-all pb-1 drop-shadow-lg">女性専門サポート</span>
                </div>
              </motion.div>
            )}

            {variant === 'plan5' && (
              <motion.div
                key="plan5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-5 mt-8 w-full justify-center md:justify-start items-center"
              >
                <div className="relative w-full max-w-sm md:w-auto bg-gradient-to-br from-white/40 to-white/5 p-[1.5px] rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-transform">
                  <div className="bg-black/60 backdrop-blur-xl rounded-2xl px-6 py-5 flex items-center gap-5">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500 drop-shadow-lg">95<span className="text-3xl">%</span></span>
                    <div className="flex flex-col">
                      <span className="text-xs text-amber-400/90 font-bold uppercase tracking-widest">Discovery Rate</span>
                      <span className="text-lg text-white font-bold tracking-wide mt-0.5">圧倒的な発見率</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative w-full max-w-sm md:w-auto bg-gradient-to-br from-white/40 to-white/5 p-[1.5px] rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-transform">
                  <div className="bg-black/60 backdrop-blur-xl rounded-2xl px-6 py-5 flex items-center gap-5">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500 drop-shadow-lg">48<span className="text-3xl">h</span></span>
                    <div className="flex flex-col">
                      <span className="text-xs text-orange-400/90 font-bold uppercase tracking-widest">Speed Response</span>
                      <span className="text-lg text-white font-bold tracking-wide mt-0.5">迅速な初期対応</span>
                    </div>
                  </div>
                </div>

                <div className="relative w-full max-w-sm md:w-auto bg-gradient-to-br from-white/40 to-white/5 p-[1.5px] rounded-2xl shadow-2xl transform hover:-translate-y-1 transition-transform">
                  <div className="bg-black/60 backdrop-blur-xl rounded-2xl px-6 py-5 flex items-center gap-5">
                    <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-rose-500 drop-shadow-lg flex items-center h-full"><Heart className="w-10 h-10 fill-current" /></span>
                    <div className="flex flex-col">
                      <span className="text-xs text-pink-400/90 font-bold uppercase tracking-widest">Safe & Secure</span>
                      <span className="text-lg text-white font-bold tracking-wide mt-0.5">女性専門サポート</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
