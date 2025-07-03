"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
export interface SidebarNavigationProps {
  // All props optional with defaults for immediate functionality
}
export default function SidebarNavigation({}: SidebarNavigationProps = {}) {
  const navigationItems = [{
    id: 'rsvp',
    label: '出欠返信',
    href: '#rsvp',
    gifUrl: 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif',
    altText: '出欠返信用アニメーションGIF',
    bgColor: 'from-pink-400 to-red-400',
    hoverColor: 'hover:from-red-500 hover:to-pink-500'
  }, {
    id: 'registry',
    label: 'ギフトリスト',
    href: '#registry',
    gifUrl: 'https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif',
    altText: 'ギフトリスト用アニメーションGIF',
    bgColor: 'from-green-400 to-blue-400',
    hoverColor: 'hover:from-blue-500 hover:to-green-500'
  }, {
    id: 'photos',
    label: 'フォトギャラリー',
    href: '#photos',
    gifUrl: 'https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif',
    altText: 'フォトギャラリー用アニメーションGIF',
    bgColor: 'from-purple-400 to-yellow-400',
    hoverColor: 'hover:from-yellow-500 hover:to-purple-500'
  }];
  return <nav className="p-4 h-full" role="navigation" aria-label="Wedding invitation navigation menu">
      <ul className="space-y-6">
        {navigationItems.map(item => <li key={item.id}>
            <a href={item.href} className={cn("block p-4 rounded-lg border-4 border-double border-black", "bg-gradient-to-br", item.bgColor, "transition-all duration-300 transform", "hover:scale-105 hover:shadow-2xl", item.hoverColor, "focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75", "font-['Comic_Sans_MS',_cursive]")} style={{
          boxShadow: `
                  0 0 15px rgba(0,0,0,0.5),
                  inset 0 0 10px rgba(255,255,255,0.3),
                  0 0 25px rgba(255,255,0,0.4)
                `
        }} onMouseEnter={e => {
          e.currentTarget.style.boxShadow = `
                  0 0 25px rgba(255,0,255,0.8),
                  inset 0 0 15px rgba(255,255,255,0.5),
                  0 0 35px rgba(0,255,255,0.6)
                `;
        }} onMouseLeave={e => {
          e.currentTarget.style.boxShadow = `
                  0 0 15px rgba(0,0,0,0.5),
                  inset 0 0 10px rgba(255,255,255,0.3),
                  0 0 25px rgba(255,255,0,0.4)
                `;
        }}>
              {/* GIF Icon */}
              <div className="text-center mb-3">
                <img src={item.gifUrl} alt={item.altText} className="w-16 h-16 mx-auto rounded border-2 border-solid border-white shadow-lg" style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
            }} onError={e => {
              // Fallback for broken GIF
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'block';
            }} />
                {/* Fallback text for broken images */}
                <div className="w-16 h-16 mx-auto rounded border-2 border-solid border-white shadow-lg bg-gradient-to-br from-yellow-300 to-orange-300 flex items-center justify-center text-2xl hidden" style={{
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
            }}>
                  {item.id === 'rsvp' && '💃'}
                  {item.id === 'registry' && '🎁'}
                  {item.id === 'photos' && '📸'}
                </div>
              </div>
              
              {/* Link Text */}
              <span className={cn("block text-center font-bold text-lg text-white", "hover:underline hover:text-yellow-200", "transition-colors duration-200")} style={{
            textShadow: `
                    2px 2px 0px #000,
                    -1px -1px 0px #000,
                    1px -1px 0px #000,
                    -1px 1px 0px #000,
                    1px 1px 0px #000,
                    0 0 10px rgba(255,255,255,0.8)
                  `,
            WebkitTextStroke: '1px black'
          }}>
                {item.label}
              </span>
            </a>
          </li>)}
      </ul>
      
      {/* Decorative Elements */}
      <div className="mt-8 text-center">
        <div className="text-4xl animate-bounce" style={{
        filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.8))'
      }}>
          💖
        </div>
        <p className="text-sm font-bold text-white mt-2" style={{
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        WebkitTextStroke: '0.5px black'
      }}>
          上のメニューをクリック！
        </p>
      </div>
    </nav>;
}