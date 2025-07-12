"use client";

import { cn } from "../lib/utils";
export interface InvitationContentProps {
  coupleNames?: string;
  weddingDate?: string;
  weddingTime?: string;
  venue?: string;
  venueAddress?: string;
  decorativeImageUrl?: string;
}
export default function InvitationContent({
  coupleNames = "誠也 ＆ 有紀",
  weddingDate = "令和7年9月27日（土）",
  weddingTime = "午後12時30分",
  venue = "俺の式場",
  venueAddress = "",
  decorativeImageUrl = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop"
}: InvitationContentProps) {
  return         <section className={cn("border-4 border-double border-green-500 p-6 rounded-lg", "bg-white/80")} style={{
      boxShadow: `
              inset 0 0 15px rgba(255,255,255,0.9),
              0 0 10px rgba(0,128,0,0.4)
            `
  }}>
      {/* Main Invitation Heading */}
      <h2 className={cn("text-2xl text-center mb-6", "text-purple-800")} style={{
          textShadow: `
                3px 3px 0px #FFD700,
                0 0 15px rgba(255,215,0,0.8)
              `,
          filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.6))'
      }}>
          💒 結婚式のご案内 💒
      </h2>

      {/* Decorative Image */}
      <figure className="text-center mb-6">
          <img src={decorativeImageUrl} alt="Beautiful wedding ceremony with flowers and decorations" className={cn("w-64 h-48 mx-auto rounded-lg border-4 border-solid border-gold-400", "shadow-lg object-cover")} style={{
              filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5)) sepia(20%) saturate(120%)',
              boxShadow: `
                  0 0 20px rgba(255,215,0,0.6),
                  inset 0 0 10px rgba(255,255,255,0.3)
                `
          }} onError={e => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
          }} />
          <figcaption className="mt-2 text-sm font-bold text-purple-600" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
          }}>
              愛と絆のｾﾚﾌﾞﾚｰｼｮﾝ
          </figcaption>
      </figure>

      {/* Invitation Text */}
      <div className="text-center space-y-4">
          <p className={cn("text-xl font-bold text-pink-700")} style={{
              textShadow: `
                  2px 2px 0px #FFD700,
                  0 0 10px rgba(255,215,0,0.6)
                `,
              WebkitTextStroke: '1px black'
          }}>
              二人の結婚式にご招待します
          </p>
          <p className="whitespace-pre-wrap">
              皆様いかがお過ごしでしょうか
              このたび結婚式を執り行うこととなりました

              日頃お世話になっておりますみなさまに
              私どもの門出をお見守りいただきたく
              ささやかながら小宴を催したく存じます

              ご多用中誠に恐縮ではございますが
              ぜひご出席いただきたくご案内申し上げます
          </p>

          <p className={cn("text-3xl font-black text-red-600 my-4")} style={{
              textShadow: `
                  4px 4px 0px #FFD700,
                  0 0 20px rgba(255,215,0,1)
                `,
              WebkitTextStroke: '1px black',
              filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.8))'
          }}>
              💕 {coupleNames} 💕
          </p>

          <div className="space-y-3 text-base font-bold">
              <p className="text-blue-700" style={{
                  textShadow: `
                    1px 1px 0px #FFD700,
                  `,
              }}>
                  📅 <strong>日付：</strong> {weddingDate}
              </p>

              <p className="text-green-700" style={{
                  textShadow: `
                    1px 1px 0px #FFD700,
                  `,
              }}>
                  🕐 <strong>時間：</strong> {weddingTime}
              </p>

              <p className="text-purple-700" style={{
                  textShadow: `
                    1px 1px 0px #FFD700,
                  `,
              }}>
                  🏛️ <strong>会場：</strong> {venue}
              </p>

              <p className="text-orange-700 text-sm" style={{
                  textShadow: `
                    1px 1px 0px #FFD700,
                  `,
              }}>
                  📍 <strong>住所：</strong> {venueAddress}
              </p>
          </div>

          {/* Call to Action */}
          <div className={cn("mt-8 p-4 bg-gradient-to-r from-yellow-300 to-orange-300", "border-4 border-solid border-red-500 rounded-lg")} style={{
              boxShadow: `
                  0 0 15px rgba(255,0,0,0.5),
                  inset 0 0 10px rgba(255,255,255,0.6)
                `
          }}>
              <p className={cn("text-xl font-black text-red-800")} style={{
                  textShadow: `
                    2px 2px 0px #FFFF00,
                    0 0 10px rgba(255,255,0,0.8)
                  `,
                  WebkitTextStroke: '1px black'
              }}>
                  🎉 ぜひご参加ください！ 🎉
              </p>

              <p className="text-base text-purple-800 mt-2" style={{
                  WebkitTextStroke: '0.5px black'
              }}>
                  下にスクロールしてご返信ください 💌
              </p>
          </div>
      </div>
  </section>;
}
