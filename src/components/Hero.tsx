import { motion } from 'motion/react';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="/img/hero.png"
          alt="ヒーロー画像"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
        />
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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
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
        </div>
      </div>
    </motion.section>
  );
}
