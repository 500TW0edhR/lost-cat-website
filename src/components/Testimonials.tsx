import { motion } from 'motion/react';
import { MessageSquare, HelpCircle, User } from 'lucide-react';

export default function Testimonials() {
  return (
    <>
      {/* Customer Voice */}
      <section id="testimonials" className="py-16 px-6 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <MessageSquare className="text-orange-500 w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-800">無事にお家に帰れました！</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-[5px_5px_0_#e5e7eb] border border-orange-100 italic text-gray-600 leading-relaxed relative flex flex-col justify-between h-full">
              <div>「もうダメかと諦めかけていましたが、猫の探偵さんにお願いして本当に良かったです。猫の習性を熟知した捜索で、翌日には発見していただきました。本当に感謝しています。」</div>
              <div className="mt-4 flex items-center gap-3 not-italic">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=200" alt="飼い主と猫" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">東京都 A様</p>
                  <p className="text-xs text-gray-400">（キジトラ・3歳）</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[5px_5px_0_#e5e7eb] border border-orange-100 italic text-gray-600 leading-relaxed relative flex flex-col justify-between h-full">
              <div>「いなくなってから不安で眠れない日々が続いていましたが、依頼した翌日に無事保護していただきました。深夜にも関わらず迅速に対応してくださり、本当に心強かったです。」</div>
              <div className="mt-4 flex items-center gap-3 not-italic">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&q=80&w=200" alt="飼い主と猫2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">神奈川県 K様</p>
                  <p className="text-xs text-gray-400">（茶トラ・5歳）</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[5px_5px_0_#e5e7eb] border border-orange-100 italic text-gray-600 leading-relaxed relative flex flex-col justify-between h-full">
              <div>「自分でいくら探しても見つからず途方に暮れていましたが、お願いしたその日のうちに見つけていただきました。プロの技術と経験にただただ驚くばかりです。」</div>
              <div className="mt-4 flex items-center gap-3 not-italic">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&q=80&w=200" alt="飼い主と猫3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">埼玉県 M様</p>
                  <p className="text-xs text-gray-400">（黒猫・1歳）</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-[5px_5px_0_#e5e7eb] border border-orange-100 italic text-gray-600 leading-relaxed relative flex flex-col justify-between h-full">
              <div>「チラシの作成からポスティングの手配、そして何より丁寧な聞き取り調査と捜索活動。全ての対応が親切で、精神的にも本当に救われました。」</div>
              <div className="mt-4 flex items-center gap-3 not-italic">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=200" alt="飼い主と猫4" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">千葉県 S様</p>
                  <p className="text-xs text-gray-400">（三毛猫・4歳）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="text-orange-500 w-6 h-6" />
            <h2 className="text-xl font-bold text-gray-800">よくあるご質問</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-[5px_5px_0_#e5e7eb] border border-gray-100 h-full">
              <p className="font-bold text-gray-800 text-sm mb-2 flex gap-2">
                <span className="text-orange-500">Q.</span> 本当に全国来てくれますか？
              </p>
              <p className="text-gray-600 text-sm flex gap-2">
                <span className="text-orange-300 font-bold">A.</span> はい、全国対応しております！最寄りの拠点からスタッフが急行いたします。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-[5px_5px_0_#e5e7eb] border border-gray-100 h-full">
              <p className="font-bold text-gray-800 text-sm mb-2 flex gap-2">
                <span className="text-orange-500">Q.</span> 捜索時間はどれくらいですか？
              </p>
              <p className="text-gray-600 text-sm flex gap-2">
                <span className="text-orange-300 font-bold">A.</span> 基本プランでは1日8時間の捜索を3日間行います。状況により延長も可能です。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-[5px_5px_0_#e5e7eb] border border-gray-100 h-full">
              <p className="font-bold text-gray-800 text-sm mb-2 flex gap-2">
                <span className="text-orange-500">Q.</span> 料金はいつ支払えばいいですか？
              </p>
              <p className="text-gray-600 text-sm flex gap-2">
                <span className="text-orange-300 font-bold">A.</span> 成功報酬型となりますので、猫ちゃんが無事保護された後にのみご請求させていただきます。
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-[5px_5px_0_#e5e7eb] border border-gray-100 h-full">
              <p className="font-bold text-gray-800 text-sm mb-2 flex gap-2">
                <span className="text-orange-500">Q.</span> いなくなってから日数が経っていますが…
              </p>
              <p className="text-gray-600 text-sm flex gap-2">
                <span className="text-orange-300 font-bold">A.</span> もちろんです。数ヶ月経過している場合でも多数の発見実績がございます。まずはご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="py-16 px-6 bg-orange-50">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-[5px_5px_0_#e5e7eb] border border-orange-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-orange-100 shadow-inner">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" alt="猫田みやこ" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">猫田 みやこ</h3>
              <p className="text-orange-500 font-bold text-sm mb-4">代表・ペット探偵</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                「絶対に諦めない。」をモットーに、これまで1,000頭以上の猫ちゃんを家族のもとへ返してきました。猫の幸せと、ご家族の笑顔のために全力で駆けつけます。
              </p>
              <div className="flex gap-2">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">資格：愛玩動物飼養管理士</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
