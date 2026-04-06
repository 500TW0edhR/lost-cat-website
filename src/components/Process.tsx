import { motion } from 'motion/react';

export default function Process() {
  const steps = [
    {
      step: "STEP 01",
      title: "お問い合わせ",
      description: "まずはお電話、またはLINEにてご連絡ください。24時間受付中です。",
      icon: "📱"
    },
    {
      step: "STEP 02",
      title: "お見積り",
      description: "状況を詳しくヒアリングし、最適な捜索プランと費用をご提案します。",
      icon: "📋"
    },
    {
      step: "STEP 03",
      title: "ご契約・出動",
      description: "プランにご納得いただければ契約。48時間以内に現場へ急行します。",
      icon: "🏃‍♀️"
    },
    {
      step: "STEP 04",
      title: "本格捜索",
      description: "プロの視点と機材を駆使し、徹底的に捜索を行います。",
      icon: "🔍"
    },
    {
      step: "STEP 05",
      title: "発見・保護",
      description: "猫ちゃんを安全第一で保護。パニックにならないよう慎重に対応します。",
      icon: "🐈"
    },
    {
      step: "STEP 06",
      title: "お引き渡し",
      description: "無事にご家族のもとへ。今後の再発防止策もアドバイスいたします。",
      icon: "🏠"
    }
  ];

  return (
    <section id="process" className="py-16 px-6 bg-orange-50">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-12">
          <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">FLOW</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2 flex items-center justify-center gap-2">
            👣 ご依頼から発見まで
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2 z-0"></div>

          <div className="space-y-12 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-[72px] h-[72px] bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl shadow-lg mb-4 border-4 border-white">
                  {s.icon}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-[5px_5px_0_#e5e7eb] border border-orange-100 w-full">
                  <span className="text-orange-500 font-bold text-xs mb-1 block">{s.step}</span>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
