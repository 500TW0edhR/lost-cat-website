import { Menu, PawPrint, X } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'トップ', href: '#top' },
    { name: '選ばれる理由', href: '#strengths' },
    { name: 'ご利用の流れ', href: '#process' },
    { name: '料金プラン', href: '#pricing' },
    { name: 'お客様の声・FAQ', href: '#testimonials' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // 少し遅延させてからスクロール処理を実行する（メニューを閉じる処理と被ってジャンプが中断されるのを防ぐため）
    setTimeout(() => {
      const target = document.querySelector(href) as HTMLElement;
      if (target) {
        const headerOffset = 64; 
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.pushState(null, '', href);
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PawPrint className="text-orange-500 w-6 h-6" />
          <h1 className="font-bold text-gray-800 text-lg tracking-tight">
            迷い探し屋 <span className="text-orange-600">猫の探偵</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-bold text-gray-600 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              // Scroll or jump to contact/LINE logic here
            }}
            className="bg-[#06C755] hover:bg-[#05b04a] text-white px-5 py-2 rounded-full text-sm font-bold transition-transform active:scale-95 shadow-sm"
          >
            LINE無料相談
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 hover:bg-orange-50 rounded-full transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden absolute top-16 left-0 w-full overflow-hidden bg-white border-b border-orange-100 shadow-lg"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-800 font-bold py-2 border-b border-gray-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                }}
                className="bg-[#06C755] text-white text-center py-3 rounded-xl font-bold mt-2 shadow-sm"
              >
                LINE無料相談
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
