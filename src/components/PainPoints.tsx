import { CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function PainPoints() {
  const points = [
    "どこを探せばいいかわからない…",
    "夜も眠れずパニックになっている…",
    "もう手遅れかもしれない…",
  ];

  return (
    <section className="py-16 px-6 bg-orange-50">
      <div className="max-w-md mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <AlertCircle className="text-orange-500 w-8 h-8" />
          <h2 className="text-xl font-bold text-gray-800">こんな不安を抱えていませんか？</h2>
        </div>

        <div className="space-y-4 mb-10">
          {points.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-[5px_5px_0_#e5e7eb] border border-orange-100"
            >
              <CheckCircle2 className="text-orange-400 w-6 h-6 shrink-0 mt-0.5" />
              <p className="text-gray-700 font-medium">{text}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-orange-600 font-bold text-lg mb-2">＼ 一人で抱え込まず、プロにご相談を！／</p>
          <div className="h-1 w-full bg-orange-400 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
