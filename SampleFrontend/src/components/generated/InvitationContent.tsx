"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
export interface InvitationContentProps {
  coupleNames?: string;
  weddingDate?: string;
  weddingTime?: string;
  venue?: string;
  venueAddress?: string;
  decorativeImageUrl?: string;
}
export default function InvitationContent({
  coupleNames = "太郎 ＆ 花子",
  weddingDate = "令和6年10月31日（木）",
  weddingTime = "午後4時",
  venue = "東京グランドホール",
  venueAddress = "〒541-0051 大阪府大阪市中央区備後町２丁目５−８",
  decorativeImageUrl = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop"
}: InvitationContentProps) {
  return <section className={cn("bg-white/90 border-8 border-double border-pink-600 p-6 rounded-lg", "shadow-2xl", "font-['Comic_Sans_MS',_cursive]")} style={{
    boxShadow: `
          0 0 25px rgba(255,20,147,0.8),
          inset 0 0 15px rgba(255,255,255,0.5),
          0 0 40px rgba(255,0,255,0.4)
        `,
    backgroundImage: `
          url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIgZmlsbD0iI0ZGQjZDMSIgZmlsbC1vcGFjaXR5PSIwLjMiLz4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI0ZGRjJGRiIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMiIgZmlsbD0iI0ZGRjJGRiIgZmlsbC1vcGFjaXR5PSIwLjQiLz4KPC9zdmc+')
        `
  }} aria-label="結婚式招待詳細">
      {/* Outer Frame */}
      <div className={cn("border-6 border-solid border-purple-500 p-4 rounded-lg", "bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100")} style={{
      boxShadow: `
            inset 0 0 20px rgba(255,255,255,0.8),
            0 0 15px rgba(128,0,128,0.5)
          `
    }}>
        {/* Inner Frame */}
        <div className={cn("border-4 border-double border-green-500 p-6 rounded-lg", "bg-white/80")} style={{
        boxShadow: `
              inset 0 0 15px rgba(255,255,255,0.9),
              0 0 10px rgba(0,128,0,0.4)
            `
      }}>
          {/* Main Invitation Heading */}
          <h2 className={cn("text-4xl font-black text-center mb-6", "text-purple-800")} style={{
          textShadow: `
                3px 3px 0px #FFD700,
                -1px -1px 0px #000,
                1px -1px 0px #000,
                -1px 1px 0px #000,
                1px 1px 0px #000,
                0 0 15px rgba(255,215,0,0.8)
              `,
          WebkitTextStroke: '2px black',
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
            {/* Fallback for broken image */}
            <div className="w-64 h-48 mx-auto rounded-lg border-4 border-solid border-gold-400 bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-6xl hidden" style={{
            filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.5))',
            boxShadow: `
                  0 0 20px rgba(255,215,0,0.6),
                  inset 0 0 10px rgba(255,255,255,0.3)
                `
          }}>
              💐💒💐
            </div>
            <figcaption className="mt-2 text-sm font-bold text-purple-600" style={{
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
          }}>
              愛と絆のセレブレーション
            </figcaption>
          </figure>

          {/* Invitation Text */}
          <div className="text-center space-y-4">
            <p className={cn("text-2xl font-bold text-pink-700")} style={{
            textShadow: `
                  2px 2px 0px #FFD700,
                  -1px -1px 0px #000,
                  1px -1px 0px #000,
                  -1px 1px 0px #000,
                  1px 1px 0px #000,
                  0 0 10px rgba(255,215,0,0.6)
                `,
            WebkitTextStroke: '1px black'
          }}>
              お二人の結婚式にご招待します
            </p>

            <p className={cn("text-5xl font-black text-red-600 my-4")} style={{
            textShadow: `
                  4px 4px 0px #FFD700,
                  -2px -2px 0px #000,
                  2px -2px 0px #000,
                  -2px 2px 0px #000,
                  2px 2px 0px #000,
                  0 0 20px rgba(255,215,0,1)
                `,
            WebkitTextStroke: '2px black',
            filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.8))'
          }}>
              💕 {coupleNames} 💕
            </p>

            <div className="space-y-3 text-lg font-bold">
              <p className="text-blue-700" style={{
              textShadow: `
                    1px 1px 0px #FFD700,
                    -1px -1px 0px #000,
                    1px -1px 0px #000,
                    -1px 1px 0px #000,
                    1px 1px 0px #000
                  `,
              WebkitTextStroke: '0.5px black'
            }}>
                📅 <strong>日付：</strong> {weddingDate}
              </p>
              
              <p className="text-green-700" style={{
              textShadow: `
                    1px 1px 0px #FFD700,
                    -1px -1px 0px #000,
                    1px -1px 0px #000,
                    -1px 1px 0px #000,
                    1px 1px 0px #000
                  `,
              WebkitTextStroke: '0.5px black'
            }}>
                🕐 <strong>時間：</strong> {weddingTime}
              </p>
              
              <p className="text-purple-700" style={{
              textShadow: `
                    1px 1px 0px #FFD700,
                    -1px -1px 0px #000,
                    1px -1px 0px #000,
                    -1px 1px 0px #000,
                    1px 1px 0px #000
                  `,
              WebkitTextStroke: '0.5px black'
            }}>
                🏛️ <strong>会場：</strong> {venue}
              </p>
              
              <p className="text-orange-700 text-base" style={{
              textShadow: `
                    1px 1px 0px #FFD700,
                    -1px -1px 0px #000,
                    1px -1px 0px #000,
                    -1px 1px 0px #000,
                    1px 1px 0px #000
                  `,
              WebkitTextStroke: '0.5px black'
            }}>
                📍 <strong>住所：</strong> {venueAddress}
              </p>
              <div className="mt-4">
                <iframe
                  className="w-full h-64 border-4 border-solid border-green-700 rounded-lg"
                  src="https://www.google.com/maps?q=%E3%80%92541-0051+%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E4%B8%AD%E5%A4%AE%E5%8C%BA%E5%82%99%E5%BE%8C%E7%94%BA%EF%BC%92%E4%B8%81%E7%9B%AE%EF%BC%95%E2%88%92%EF%BC%98+%E7%B6%BF%E6%A5%AD%E4%BC%9A%E9%A4%A8&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="綿業会館 地図"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Call to Action */}
            <div className={cn("mt-8 p-4 bg-gradient-to-r from-yellow-300 to-orange-300", "border-4 border-solid border-red-500 rounded-lg")} style={{
            boxShadow: `
                  0 0 15px rgba(255,0,0,0.5),
                  inset 0 0 10px rgba(255,255,255,0.6)
                `
          }}>
              <p className={cn("text-2xl font-black text-red-800")} style={{
              textShadow: `
                    2px 2px 0px #FFFF00,
                    -1px -1px 0px #000,
                    1px -1px 0px #000,
                    -1px 1px 0px #000,
                    1px 1px 0px #000,
                    0 0 10px rgba(255,255,0,0.8)
                  `,
              WebkitTextStroke: '1px black'
            }}>
                🎉 ぜひご参加ください！ 🎉
              </p>
              
              <p className="text-lg font-bold text-purple-800 mt-2" style={{
              textShadow: `
                    1px 1px 0px #FFFF00,
                    -1px -1px 0px #000,
                    1px -1px 0px #000,
                    -1px 1px 0px #000,
                    1px 1px 0px #000
                  `,
              WebkitTextStroke: '0.5px black'
            }}>
                下にスクロールしてご返信ください 💌
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}