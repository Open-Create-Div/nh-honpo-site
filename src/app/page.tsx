'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">NH本舗</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:090-6827-5293" className="flex items-center text-gray-600 hover:text-blue-600">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>090-6827-5293</span>
            </a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              お問い合わせ
            </a>
          </div>
        </div>
      </header>

      {/* メインビジュアル */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              兵庫県でガラスフィルムの貼付なら
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              専門店だから低価格 7,700円(税込)～/㎡
            </p>
            <div className="flex justify-center space-x-4">
              <a href="tel:090-6827-5293" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                電話で相談する
              </a>
              <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                メールで相談する
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* お悩みセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            こんなお悩みありませんか？
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "できるだけ費用は抑えたい",
              "丁寧な作業をお願いしたい",
              "作業後の保証など安心が欲しい",
              "気軽に見積りを頼みたい",
              "フィルムについて詳しく教えてほしい"
            ].map((worry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-lg text-gray-700">{worry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 選ばれる5つの理由セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            NH本舗が選ばれる5つの理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "自社施工なので低価格",
                description: "私たちはガラスフィルム施工を最も得意にしております。自社施工を行うことで中間マージンを削減し、他社よりもお得な価格での施工を実現しています。"
              },
              {
                title: "施工実績年間180件超え",
                description: "当社は、お客様に高品質な施工を行い続け、年間180件以上の施工実績を誇ります。豊富な経験と確かな技術力を活かし、幅広いニーズに対応しています。"
              },
              {
                title: "施工完了後3~5年保証付",
                description: "お客様に安心していただけますよう、施工完了後も3～5年間の保証を行っております。見積り時に詳しくお話いたしますので、まずはお気軽にお問い合わせください。"
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
