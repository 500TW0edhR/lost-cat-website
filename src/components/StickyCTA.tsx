import { MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-white/80 backdrop-blur-lg border-t border-orange-100 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-2 bg-[#06C755] text-white py-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform"
            >
              <MessageCircle className="w-5 h-5" />
              LINE無料相談
            </a>
            <a
              href="tel:0120-XXX-XXX"
              className="flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5" />
              電話で相談
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
