"use client";

import { cn } from '../lib/utils'

export interface HeaderBannerProps {
  weddingDate?: string
  coupleNames?: string
}

export default function HeaderBanner({
  weddingDate = '令和7年9月17日（土）',
  coupleNames = '誠也 ＆ 有紀',
}: HeaderBannerProps) {
  return (
    <header
      className={cn(
        'w-full max-w-[800px] mx-auto',
        'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500',
        'border-8 border-double border-yellow-400',
        'p-6 text-center shadow-2xl',
        "font-['Comic_Sans_MS',_cursive]"
      )}
      style={{
        boxShadow: `
          0 0 30px rgba(255,255,0,0.8),
          inset 0 0 20px rgba(255,255,255,0.3),
          0 0 50px rgba(255,0,255,0.6)
        `,
        backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255,255,255,0.1) 10px,
            rgba(255,255,255,0.1) 20px
          )
        `,
      }}
      role="banner"
      aria-label="結婚式招待ヘッダー"
    >
      <h1
        className={cn('text-6xl font-black text-white mb-4', 'font-mono tracking-wider')}
        style={{
          textShadow: `
            3px 3px 0px #000,
            -1px -1px 0px #000,
            1px -1px 0px #000,
            -1px 1px 0px #000,
            1px 1px 0px #000,
            0 0 20px rgba(255,255,0,0.8),
            0 0 40px rgba(255,0,255,0.6)
          `,
          WebkitTextStroke: '2px black',
          filter: 'drop-shadow(5px 5px 10px rgba(0,0,0,0.8))',
        }}
      >
        💒 結婚式招待状 💒
      </h1>

      <div
        className={cn('text-4xl font-bold text-yellow-300 mb-6', 'animate-pulse')}
        style={{
          textShadow: `
            2px 2px 0px #000,
            -1px -1px 0px #000,
            1px -1px 0px #000,
            -1px 1px 0px #000,
            1px 1px 0px #000,
            0 0 15px rgba(255,255,0,1)
          `,
          WebkitTextStroke: '1px black',
          animation: 'blink 1.5s infinite',
        }}
      >
        <span className="inline-block">💕 {coupleNames} 💕</span>
      </div>

      <div
        className={cn(
          'bg-black/80 border-4 border-solid border-green-400 p-3 rounded-lg',
          'overflow-hidden whitespace-nowrap'
        )}
        style={{
          boxShadow: `
            0 0 15px rgba(0,255,0,0.8),
            inset 0 0 10px rgba(0,255,0,0.3)
          `,
        }}
      >
        <div
          className={cn('text-2xl font-bold text-green-400', 'inline-block')}
          style={{
            textShadow: `
              1px 1px 0px #000,
              0 0 10px rgba(0,255,0,1)
            `,
            WebkitTextStroke: '1px black',
            animation: 'marquee 8s linear infinite',
          }}
        >
          🎉 日程：{weddingDate} • 日程：{weddingDate} • 日程：{weddingDate} •
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        ::-webkit-scrollbar {
          width: 12px;
        }
        ::-webkit-scrollbar-track {
          background: linear-gradient(45deg, #ff00ff, #00ffff);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #ffff00, #ff0000);
          border-radius: 6px;
          border: 2px solid #000;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #00ff00, #0000ff);
        }
      `}</style>
    </header>
  )
}
