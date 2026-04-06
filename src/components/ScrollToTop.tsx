import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
          // StickyCTAと被らないようモバイルではbottom-24、PCではもう少し余裕を持たせる
          className="fixed bottom-24 right-4 md:bottom-28 md:right-8 z-[60]"
        >
          <button
            onClick={scrollToTop}
            aria-label="トップへ戻る"
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm text-orange-500 border border-orange-200 rounded-full shadow-[0_4px_15px_rgba(249,115,22,0.2)] hover:bg-orange-50 hover:shadow-[0_6px_20px_rgba(249,115,22,0.3)] hover:-translate-y-1 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <ArrowUp className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
