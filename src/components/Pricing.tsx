import { motion } from 'motion/react';
import { Crown } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      title: "網 捕獲コース",
      price: "40,000円〜",
      target: "居場所はわかっているが、警戒心が強く捕まえられない方へ",
      popular: false
    },
    {
      title: "ベーシック探索コース",
      price: "基本6万円 ＋ 成功報酬4万円",
      target: "どこへ行ったか全くわからない、早急にプロの手を借りたい方へ",
      popular: true
    },
    {
      title: "オンライン支援コース",
      price: "20,000円〜",
      target: "遠方の方や、アドバイスを受けながらご自身で探したい方へ",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 px-6 bg-white">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">PRICING</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2 flex items-center justify-center gap-2">
            💰 明朗会計で安心！3つのプラン
          </h2>
        </div>

        <div className="space-y-6">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className={`relative p-6 rounded-2xl border-2 transition-all ${
                p.popular 
                  ? 'border-orange-500 bg-orange-50 shadow-[5px_5px_0_#fb923c]' 
                  : 'border-orange-100 bg-white shadow-[5px_5px_0_#e5e7eb]'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                  <Crown className="w-3 h-3" />
                  一番人気
                </div>
              )}
              
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">{p.title}</h3>
              <div className="text-center mb-4">
                <span className="text-2xl font-black text-orange-600">{p.price}</span>
              </div>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {p.target}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          ※交通費・宿泊費は別途実費を頂戴いたします。<br />
          ※状況により追加費用が発生する場合は事前にお伝えします。
        </p>
      </div>
    </section>
  );
}
