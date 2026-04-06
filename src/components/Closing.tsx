import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function Closing() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=1000"
          alt="木漏れ日の中で眠る猫"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6 leading-relaxed">
            こうしている間にも、猫ちゃんは不安で<br />
            あなたの助けを待っています。
          </h2>
          <p className="text-lg font-bold text-orange-400 mb-10">
            迷ったら今すぐご連絡を！
          </p>

          <div className="space-y-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b04a] text-white py-4 rounded-full font-bold text-lg shadow-xl transition-transform active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              LINEで無料相談する
            </a>
            <a
              href="tel:0120-XXX-XXX"
              className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-bold text-lg shadow-xl transition-transform active:scale-95"
            >
              <Phone className="w-6 h-6" />
              0120-XXX-XXX
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
