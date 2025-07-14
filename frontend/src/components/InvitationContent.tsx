"use client";

import {cn} from "../lib/utils";

export interface InvitationContentProps {
    coupleNames?: string;
    weddingDate?: string;
    weddingTime?: string;
    venueAddress?: string;
    decorativeImageUrl?: string;
}

export default function InvitationContent({
                                              coupleNames = "誠也 ＆ 有紀",
                                              weddingDate = "令和7年9月27日（土）",
                                             weddingTime = "午後12時30分",
                                             venueAddress = "",
                                              decorativeImageUrl = "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop"
                                          }: InvitationContentProps) {
    return <section className={cn("border-4 border-double border-green-500 p-6 rounded-lg", "bg-white/80")} style={{
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
            <img src={decorativeImageUrl} alt="Beautiful wedding ceremony with flowers and decorations"
                 className={cn("w-64 h-48 mx-auto rounded-lg border-4 border-solid border-gold-400", "shadow-lg object-cover")}
                 style={{
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
            }}/>
            <figcaption className="mt-2 text-sm font-bold text-purple-600" style={{
                textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
            }}>
                愛と絆のｾﾚﾌﾞﾚｰｼｮﾝ
            </figcaption>
        </figure>

        {/* Invitation Text */}
        <div className="text-center space-y-4">
            <p className="whitespace-pre-wrap text-pink-600"
               style={{animation: 'blink 0.75s infinite',}}
            >
                皆様いかがお過ごしでしょうか<br/>
                このたび結婚式を執り行うこととなりました<br/><br/>
                日頃お世話になっておりますみなさまに<br/>
                私どもの門出をお見守りいただきたく<br/>
                ささやかながら小宴を催したく存じます<br/><br/>
                ご多用中誠に恐縮ではございますが<br/>
                ぜひご出席いただきたくご案内申し上げます<br/>
            </p>

            <p className={cn("text-3xl font-black text-purple-700 my-4")} style={{
                textShadow: `
                  4px 4px 0px #FFD700,
                  0 0 20px rgba(255,215,0,1)
                `,
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
                    🏛️ <strong>会場：</strong> <span className="line-through">ORENOSHIKIJO</span>綿業会館
                </p>

                <p className="text-orange-700 text-sm" style={{
                    textShadow: `
                    1px 1px 0px #FFD700,
                  `,
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
            <div
                className={cn("mt-8 p-4 bg-gradient-to-r from-yellow-300 to-orange-300", "border-4 border-solid border-red-500 rounded-lg")}
                style={{
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
