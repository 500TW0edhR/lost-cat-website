import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Strengths() {
  const strengths = [
    {
      number: "①",
      title: "発見率95%以上！",
      description: "猫特有の行動心理に基づき、プロの視点で徹底的に捜索します。普段は気づかないような狭い隙間や路地裏まで決して見逃しません。",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=600",
      icon: "🐈"
    },
    {
      number: "②",
      title: "48時間以内にスピード対応！",
      description: "迷子探しは時間との勝負です。ご依頼から48時間以内に迅速に駆けつけ、大切な初動対応の遅れを防ぎます。",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=600",
      icon: "🏃‍♀️"
    },
    {
      number: "③",
      title: "女性専門家ならではの安心",
      description: "突然のトラブルで不安を抱えるご家族の心に、丁寧に寄り添います。女性ならではのきめ細やかなサポートやヒアリングでご安心いただけます。",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
      icon: "👩"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % strengths.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [strengths.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + strengths.length) % strengths.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % strengths.length);
  };

  return (
    <section id="strengths" className="py-24 px-6 bg-white overflow-hidden">
      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold text-base tracking-widest uppercase">STRENGTHS</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-3 flex items-center justify-center gap-2">
            ✨ 「猫の探偵」が選ばれる理由
          </h2>
        </div>

        <div className="relative min-h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full flex-shrink-0"
            >
              <div className="flex items-center gap-5 mb-6">
                <span className="text-5xl drop-shadow-sm">{strengths[currentIndex].icon}</span>
                <h3 className="text-3xl font-bold text-gray-800 leading-tight">
                  <span className="text-orange-500 mr-3">{strengths[currentIndex].number}</span>
                  {strengths[currentIndex].title}
                </h3>
              </div>
              
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video shadow-xl border-4 border-orange-50">
                <img
                  src={strengths[currentIndex].image}
                  alt={strengths[currentIndex].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <p className="text-xl text-gray-700 leading-relaxed font-medium px-2">
                {strengths[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ページネーション（ドット） */}
        <div className="flex justify-center gap-4 mt-4">
          {strengths.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-orange-500 w-10' : 'bg-orange-200 hover:bg-orange-400'
              }`}
              aria-label={`スライド ${i + 1} に移動`}
            />
          ))}
        </div>

        {/* 左右ナビゲーションボタン */}
        <button
          onClick={handlePrev}
          className="absolute left-[-16px] md:left-[-64px] top-[330px] md:top-[380px] -translate-y-1/2 z-10 p-3 rounded-full bg-white backdrop-blur shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-gray-100 text-gray-500 hover:text-orange-500 hover:bg-orange-50 hover:scale-110 transition-all focus:outline-none"
          aria-label="前のスライド"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[-16px] md:right-[-64px] top-[330px] md:top-[380px] -translate-y-1/2 z-10 p-3 rounded-full bg-white backdrop-blur shadow-[0_0_20px_rgba(0,0,0,0.1)] border border-gray-100 text-gray-500 hover:text-orange-500 hover:bg-orange-50 hover:scale-110 transition-all focus:outline-none"
          aria-label="次のスライド"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
}
