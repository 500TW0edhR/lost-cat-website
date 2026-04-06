import { PawPrint } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-32 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-12 mb-16 md:mb-20">
        {/* Left: Company Info */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="flex items-center gap-2 mb-6">
            <PawPrint className="text-orange-500 w-6 h-6" />
            <h2 className="font-bold text-white text-lg leading-7">
              迷い探し屋 <span className="text-orange-500">猫の探偵</span>
            </h2>
          </div>

          <div className="space-y-3 text-sm text-gray-400/90 leading-relaxed font-medium">
            <p>代表: 猫田 みやこ</p>
            <p>〒123-4567 東京都〇〇区〇〇 1-2-3</p>
            <p>動物取扱業登録：第XXXXXX号</p>
          </div>
        </div>

        {/* Center-Right: Navigation */}
        <div className="w-full md:w-2/3 flex md:justify-end md:mt-[52px]">
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-x-6 lg:gap-x-10 gap-y-5 text-sm w-full md:w-auto text-center">
            <a href="#top" className="text-gray-400 hover:text-orange-400 transition-colors whitespace-nowrap">トップ</a>
            <a href="#strengths" className="text-gray-400 hover:text-orange-400 transition-colors whitespace-nowrap">選ばれる理由</a>
            <a href="#process" className="text-gray-400 hover:text-orange-400 transition-colors whitespace-nowrap">ご利用の流れ</a>
            <a href="#pricing" className="text-gray-400 hover:text-orange-400 transition-colors whitespace-nowrap">料金プラン</a>
            <a href="#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors whitespace-nowrap">お客様の声・よくある質問</a>
            <a href="#profile" className="text-gray-400 hover:text-orange-400 transition-colors whitespace-nowrap">運営会社</a>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto border-t border-gray-800/80 pt-8 text-center text-xs text-gray-500 tracking-widest uppercase font-medium">
        © 2026 迷い探し屋 猫の探偵
      </div>
    </footer>
  );
}
