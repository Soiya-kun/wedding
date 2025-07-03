"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";
export interface RSVPFormData {
  firstName: string;
  lastName: string;
  attending: string;
}
export interface RSVPFormProps {
  onSubmit?: (data: RSVPFormData) => void;
  status?: 'idle' | 'loading' | 'success' | 'error';
}
export default function RSVPForm({
  onSubmit,
  status = 'idle'
}: RSVPFormProps) {
  const [formData, setFormData] = useState<RSVPFormData>({
    firstName: '',
    lastName: '',
    attending: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleInputChange = (field: keyof RSVPFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'お名前（姓）を入力してください';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'お名前（名）を入力してください';
    }
    if (!formData.attending) {
      newErrors.attending = 'ご出席の有無を選択してください';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  return <div className={cn("bg-white/90 border-8 border-double border-blue-600 p-6 rounded-lg", "shadow-2xl", "font-['Comic_Sans_MS',_cursive]")} style={{
    boxShadow: `
          0 0 25px rgba(0,100,255,0.8),
          inset 0 0 15px rgba(255,255,255,0.5),
          0 0 40px rgba(0,255,255,0.4)
        `,
    backgroundImage: `
          url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDVMMjUgMTVIMzVMMjcuNSAyMkwzMCAzMkgyMEwxMCAzMkwxMi41IDIyTDUgMTVIMTVMMjAgNVoiIGZpbGw9IiNGRkY3RUQiIGZpbGwtb3BhY2l0eT0iMC4yIi8+Cjwvc3ZnPg==')
        `
  }}>
      {/* Form Header */}
      <h2 className={cn("text-3xl font-black text-center mb-6", "text-blue-800")} style={{
      textShadow: `
            3px 3px 0px #00FFFF,
            -1px -1px 0px #000,
            1px -1px 0px #000,
            -1px 1px 0px #000,
            1px 1px 0px #000,
            0 0 15px rgba(0,255,255,0.8)
          `,
      WebkitTextStroke: '2px black',
      filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.6))'
    }}>
        📝 出欠のご返信 📝
      </h2>

      {/* Status Messages */}
      {status === 'loading' && <div className="text-center mb-6 p-4 bg-yellow-300 border-4 border-solid border-orange-500 rounded-lg" style={{
      boxShadow: '0 0 15px rgba(255,165,0,0.8)',
      animation: 'pulse 1.5s infinite'
    }} role="status" aria-live="polite">
          <p className="text-2xl font-bold text-orange-800" style={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        WebkitTextStroke: '1px black'
      }}>
            🔄 送信中...しばらくお待ちください 🔄
          </p>
        </div>}

      {status === 'success' && <div className="text-center mb-6 p-4 bg-green-300 border-4 border-solid border-green-600 rounded-lg" style={{
      boxShadow: '0 0 15px rgba(0,255,0,0.8)'
    }} role="status" aria-live="polite">
          <p className="text-2xl font-bold text-green-800" style={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        WebkitTextStroke: '1px black'
      }}>
            ✅ ご返信ありがとうございました！ ✅
          </p>
        </div>}

      {status === 'error' && <div className="text-center mb-6 p-4 bg-red-300 border-4 border-solid border-red-600 rounded-lg" style={{
      boxShadow: '0 0 15px rgba(255,0,0,0.8)'
    }} role="alert" aria-live="assertive">
          <p className="text-2xl font-bold text-red-800" style={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        WebkitTextStroke: '1px black'
      }}>
            ❌ エラーが発生しました。再度お試しください ❌
          </p>
        </div>}

      {/* RSVP Form */}
      <form onSubmit={handleSubmit} noValidate>
        <fieldset className="border-4 border-solid border-purple-500 p-4 rounded-lg bg-gradient-to-br from-pink-100 to-purple-100" style={{
        boxShadow: 'inset 0 0 15px rgba(255,255,255,0.8)'
      }}>
          <legend className="px-3 text-xl font-bold text-purple-800" style={{
          textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
          WebkitTextStroke: '0.5px black'
        }}>
            お名前
          </legend>

          <div className="space-y-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-lg font-bold text-blue-700 mb-2" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
              WebkitTextStroke: '0.5px black'
            }}>
                姓（例：山田）*
              </label>
              <input type="text" id="firstName" value={formData.firstName} onChange={e => handleInputChange('firstName', e.target.value)} className={cn("w-full p-3 text-lg font-bold border-4 border-solid rounded-lg", "bg-white/90 text-purple-800", "focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75", "transition-all duration-200", errors.firstName ? "border-red-500" : "border-blue-400")} style={{
              boxShadow: errors.firstName ? '0 0 10px rgba(255,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,100,255,0.3), inset 0 0 5px rgba(255,255,255,0.8)',
              textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
            }} placeholder="姓を入力してください" aria-describedby={errors.firstName ? "firstName-error" : undefined} aria-invalid={!!errors.firstName} />
              {errors.firstName && <p id="firstName-error" className="mt-1 text-red-600 font-bold" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
              WebkitTextStroke: '0.5px black'
            }} role="alert">
                  {errors.firstName}
                </p>}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-lg font-bold text-blue-700 mb-2" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
              WebkitTextStroke: '0.5px black'
            }}>
                名（例：花子）*
              </label>
              <input type="text" id="lastName" value={formData.lastName} onChange={e => handleInputChange('lastName', e.target.value)} className={cn("w-full p-3 text-lg font-bold border-4 border-solid rounded-lg", "bg-white/90 text-purple-800", "focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75", "transition-all duration-200", errors.lastName ? "border-red-500" : "border-blue-400")} style={{
              boxShadow: errors.lastName ? '0 0 10px rgba(255,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,100,255,0.3), inset 0 0 5px rgba(255,255,255,0.8)',
              textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
            }} placeholder="名を入力してください" aria-describedby={errors.lastName ? "lastName-error" : undefined} aria-invalid={!!errors.lastName} />
              {errors.lastName && <p id="lastName-error" className="mt-1 text-red-600 font-bold" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
              WebkitTextStroke: '0.5px black'
            }} role="alert">
                  {errors.lastName}
                </p>}
            </div>

            {/* Attendance */}
            <fieldset>
              <legend className="text-lg font-bold text-blue-700 mb-3" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
              WebkitTextStroke: '0.5px black'
            }}>
                ご出席の有無*
              </legend>
              
              <div className="space-y-2">
                {[{
                value: 'Attending',
                label: '✅ 出席します',
                color: 'from-green-300 to-green-400'
              }, {
                value: 'Maybe',
                label: '🤔 未定',
                color: 'from-yellow-300 to-yellow-400'
              }, {
                value: 'Not Attending',
                label: '❌ 欠席します',
                color: 'from-red-300 to-red-400'
              }].map(option => <label key={option.value} className={cn("flex items-center p-3 rounded-lg border-3 border-solid cursor-pointer transition-all duration-200", "bg-gradient-to-r", option.color, formData.attending === option.value ? "border-purple-600 shadow-lg" : "border-gray-400 hover:border-purple-400", "hover:scale-105")} style={{
                boxShadow: formData.attending === option.value ? '0 0 15px rgba(128,0,128,0.6), inset 0 0 10px rgba(255,255,255,0.5)' : '0 0 5px rgba(0,0,0,0.2), inset 0 0 5px rgba(255,255,255,0.3)'
              }}>
                    <input type="radio" name="attending" value={option.value} checked={formData.attending === option.value} onChange={e => handleInputChange('attending', e.target.value)} className="mr-3 w-5 h-5 accent-purple-600" aria-describedby={errors.attending ? "attending-error" : undefined} />
                    <span className="text-lg font-bold text-gray-800" style={{
                  textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                  WebkitTextStroke: '0.5px black'
                }}>
                      {option.label}
                    </span>
                  </label>)}
              </div>
              
              {errors.attending && <p id="attending-error" className="mt-2 text-red-600 font-bold" style={{
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
              WebkitTextStroke: '0.5px black'
            }} role="alert">
                  {errors.attending}
                </p>}
            </fieldset>
          </div>
        </fieldset>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <motion.button type="submit" disabled={status === 'loading'} className={cn("px-8 py-4 text-2xl font-black rounded-lg border-4 border-solid border-black", "bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400", "text-white shadow-2xl", "focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75", "disabled:opacity-50 disabled:cursor-not-allowed", "transition-all duration-200")} style={{
          textShadow: `
                2px 2px 0px #000,
                -1px -1px 0px #000,
                1px -1px 0px #000,
                -1px 1px 0px #000,
                1px 1px 0px #000,
                0 0 10px rgba(255,255,255,0.8)
              `,
          WebkitTextStroke: '1px black',
          boxShadow: `
                0 8px 0px #8B4513,
                0 12px 20px rgba(0,0,0,0.4),
                0 0 20px rgba(255,165,0,0.6),
                inset 0 0 15px rgba(255,255,255,0.3)
              `
        }} whileHover={{
          scale: 1.05,
          boxShadow: `
                0 8px 0px #8B4513,
                0 12px 25px rgba(0,0,0,0.5),
                0 0 25px rgba(255,165,0,0.8),
                inset 0 0 20px rgba(255,255,255,0.4)
              `
        }} whileTap={{
          scale: 0.95,
          y: 4,
          boxShadow: `
                0 4px 0px #8B4513,
                0 6px 15px rgba(0,0,0,0.4),
                0 0 15px rgba(255,165,0,0.6),
                inset 0 0 10px rgba(0,0,0,0.2)
              `,
          background: 'linear-gradient(135deg, #FF0000, #FF8C00, #FFD700)',
          filter: 'invert(0.1)'
        }} animate={{
          boxShadow: status === 'loading' ? [`0 8px 0px #8B4513, 0 12px 20px rgba(0,0,0,0.4), 0 0 20px rgba(255,165,0,0.6)`, `0 8px 0px #8B4513, 0 12px 20px rgba(0,0,0,0.4), 0 0 30px rgba(255,165,0,0.8)`, `0 8px 0px #8B4513, 0 12px 20px rgba(0,0,0,0.4), 0 0 20px rgba(255,165,0,0.6)`] : undefined
        }} transition={{
          boxShadow: {
            duration: 1,
            repeat: status === 'loading' ? Infinity : 0,
            ease: "easeInOut"
          }
        }}>
            {status === 'loading' ? '⏳ 送信中...' : '🚀 送信する 🚀'}
          </motion.button>
        </div>
      </form>

      {/* Help Text */}
      <p className="text-center mt-4 text-sm font-bold text-purple-600" style={{
      textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
      WebkitTextStroke: '0.5px black'
    }}>
        * 必須項目 • 皆さまとお会いできるのを楽しみにしています！💕
      </p>
    </div>;
}
