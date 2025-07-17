"use client";

import * as React from "react";
import {useState} from "react";
import {cn} from "../lib/utils";
import {motion} from "framer-motion";

export interface GuestInfo {
    lastName: string;
    firstName: string;
    lastNameKana: string;
    firstNameKana: string;
    allergy: string;
    message: string;
}

export interface RSVPFormData {
    attending: string;
    guests: GuestInfo[];
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
        attending: '',
        guests: [
            {
                lastName: '',
                firstName: '',
                lastNameKana: '',
                firstNameKana: '',
                allergy: '',
                message: ''
            }
        ]
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleInputChange = (
        index: number,
        field: keyof GuestInfo,
        value: string
    ) => {
        setFormData(prev => {
            const guests = [...prev.guests];
            guests[index] = {...guests[index], [field]: value};
            return {...prev, guests};
        });
        const key = `${index}-${field}`;
        if (errors[key]) {
            setErrors(prev => {
                const newErr = {...prev};
                delete newErr[key];
                return newErr;
            });
        }
    };
    const handleAttendingChange = (value: string) => {
        setFormData(prev => ({...prev, attending: value}));
        if (errors.attending) {
            setErrors(prev => ({...prev, attending: ''}));
        }
    };
    const addGuest = () => {
        setFormData(prev => ({
            ...prev,
            guests: [
                ...prev.guests,
                {
                    lastName: '',
                    firstName: '',
                    lastNameKana: '',
                    firstNameKana: '',
                    allergy: '',
                    message: ''
                }
            ]
        }));
    };

    const removeGuest = (index: number) => {
        if (formData.guests.length <= 1) {
            return; // Always keep at least one guest
        }
        setFormData(prev => ({
            ...prev,
            guests: prev.guests.filter((_, idx) => idx !== index)
        }));
    };
    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        formData.guests.forEach((g, idx) => {
            if (!g.lastName.trim()) {
                newErrors[`${idx}-lastName`] = '姓を入力してください';
            }
            if (!g.firstName.trim()) {
                newErrors[`${idx}-firstName`] = '名を入力してください';
            }
            if (!g.lastNameKana.trim()) {
                newErrors[`${idx}-lastNameKana`] = '姓かなを入力してください';
            }
            if (!g.firstNameKana.trim()) {
                newErrors[`${idx}-firstNameKana`] = '名かなを入力してください';
            }
        });
        if (!formData.attending) {
            newErrors.attending = 'ご出欠を選択してください';
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
    return <div
        className={cn("bg-white/90 border-8 border-double border-blue-600 p-6 rounded-lg", "shadow-2xl", "font-['Comic_Sans_MS',_cursive]")}
        style={{
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
        <h2 className={cn("text-xl font-black text-center mb-6", "text-blue-800")} style={{
            textShadow: `
            3px 3px 0px #00FFFF,
            0 0 15px rgba(0,255,255,0.8)
          `,
            filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.6))'
        }}>
            📝 出欠情報のご登録 📝
        </h2>

        <p className="mb-4 text-center">
            郵送でのご案内状に代わり当招待状をお送りしております<br/>
            お手数ではございますが出欠情報のご登録をお願い申し上げます<br/><br/>
            また当日のお食事のご用意にあたり<br/>
            アレルギー等がある方はアレルギー欄にご記入くださいますようお願い申し上げます
        </p>
        <p className="text-center font-bold text-red-700 mb-6">
            ＊返信締め切り【8月27日】
        </p>
        <form onSubmit={handleSubmit} noValidate>
            {/* Attendance at top */}
            <fieldset
                className="border-4 border-solid border-purple-500 p-4 rounded-lg mb-6 bg-gradient-to-br from-pink-100 to-purple-100"
                style={{
                    boxShadow: 'inset 0 0 15px rgba(255,255,255,0.8)'
                }}>
                <legend className="px-3 text-lg font-bold text-purple-800" style={{
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                    WebkitTextStroke: '0.5px black'
                }}>
                    ご出欠*
                </legend>
                <div className="space-y-2">
                    {[{
                        value: 'Attending',
                        label: '✅ 出席します',
                        color: 'from-green-300 to-green-400'
                    }, {
                        value: 'Not Attending',
                        label: '❌ 欠席します',
                        color: 'from-red-300 to-red-400'
                    }].map(option => (
                        <label key={option.value}
                               className={cn('flex items-center p-3 rounded-lg border-3 border-solid cursor-pointer transition-all duration-200', 'bg-gradient-to-r', option.color, formData.attending === option.value ? 'border-purple-600 shadow-lg' : 'border-gray-400 hover:border-purple-400', 'hover:scale-105')}
                               style={{
                                   boxShadow: formData.attending === option.value ? '0 0 15px rgba(128,0,128,0.6), inset 0 0 10px rgba(255,255,255,0.5)' : '0 0 5px rgba(0,0,0,0.2), inset 0 0 5px rgba(255,255,255,0.3)'
                               }}>
                            <input type="radio" name="attending" value={option.value}
                                   checked={formData.attending === option.value}
                                   onChange={e => handleAttendingChange(e.target.value)}
                                   className="mr-3 w-5 h-5 accent-purple-600"
                                   aria-describedby={errors.attending ? 'attending-error' : undefined}/>
                            <span className="text-base font-bold text-gray-800" style={{
                                textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                WebkitTextStroke: '0.5px black'
                            }}>
            {option.label}
          </span>
                        </label>
                    ))}
                </div>
                {errors.attending && <p id="attending-error" className="mt-2 text-red-600 font-bold" style={{
                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                    WebkitTextStroke: '0.5px black'
                }} role="alert">
                    {errors.attending}
                </p>}
            </fieldset>

            {formData.guests.map((guest, idx) => (
                <fieldset key={idx}
                          className="border-4 border-solid border-purple-500 p-4 rounded-lg mb-6 bg-gradient-to-br from-pink-100 to-purple-100"
                          style={{
                              boxShadow: 'inset 0 0 15px rgba(255,255,255,0.8)'
                          }}>
                    <legend className={`text-lg font-bold text-purple-800 ${idx === 0 ? '' :"px-3"}`} style={{
                        textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                        WebkitTextStroke: '0.5px black'
                    }}>
                        {idx === 0 ? '' : `お連れ様${idx}`}
                    </legend>
                    {idx > 0 && (
                        <div className="flex justify-end mb-2">
                            <button
                                type="button"
                                onClick={() => removeGuest(idx)}
                                className="px-3 py-1 font-bold text-white border-2 border-red-600 rounded-lg bg-red-500 hover:bg-red-600 transition"
                                style={{
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                                    textShadow: '1px 1px 1px rgba(0,0,0,0.5)'
                                }}
                            >
                                削除
                            </button>
                        </div>
                    )}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                            <label htmlFor={`lastName-${idx}`} className="block text-base font-bold text-blue-700 mb-2"
                                   style={{
                                       textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                       WebkitTextStroke: '0.5px black'
                                   }}>
                                姓*
                            </label>
                            <input type="text" id={`lastName-${idx}`} value={guest.lastName}
                                   onChange={e => handleInputChange(idx, 'lastName', e.target.value)}
                                   className={cn('w-full p-3 text-base font-bold border-4 border-solid rounded-lg', 'bg-white/90 text-purple-800', 'focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75', 'transition-all duration-200', errors[`${idx}-lastName`] ? 'border-red-500' : 'border-blue-400')}
                                   style={{
                                       boxShadow: errors[`${idx}-lastName`] ? '0 0 10px rgba(255,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,100,255,0.3), inset 0 0 5px rgba(255,255,255,0.8)',
                                       textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
                                   }} placeholder="田中"
                                   aria-describedby={errors[`${idx}-lastName`] ? `lastName-${idx}-error` : undefined}
                                   aria-invalid={!!errors[`${idx}-lastName`]}/>
                            {errors[`${idx}-lastName`] &&
                                <p id={`lastName-${idx}-error`} className="mt-1 text-red-600 font-bold" style={{
                                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                    WebkitTextStroke: '0.5px black'
                                }} role="alert">{errors[`${idx}-lastName`]}</p>}
                            </div>
                            <div>
                            <label htmlFor={`firstName-${idx}`} className="block text-base font-bold text-blue-700 mb-2"
                                   style={{
                                       textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                       WebkitTextStroke: '0.5px black'
                                   }}>
                                名*
                            </label>
                            <input type="text" id={`firstName-${idx}`} value={guest.firstName}
                                   onChange={e => handleInputChange(idx, 'firstName', e.target.value)}
                                   className={cn('w-full p-3 text-base font-bold border-4 border-solid rounded-lg', 'bg-white/90 text-purple-800', 'focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75', 'transition-all duration-200', errors[`${idx}-firstName`] ? 'border-red-500' : 'border-blue-400')}
                                   style={{
                                       boxShadow: errors[`${idx}-firstName`] ? '0 0 10px rgba(255,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,100,255,0.3), inset 0 0 5px rgba(255,255,255,0.8)',
                                       textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
                                   }} placeholder="太郎"
                                   aria-describedby={errors[`${idx}-firstName`] ? `firstName-${idx}-error` : undefined}
                                   aria-invalid={!!errors[`${idx}-firstName`]}/>
                            {errors[`${idx}-firstName`] &&
                                <p id={`firstName-${idx}-error`} className="mt-1 text-red-600 font-bold" style={{
                                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                    WebkitTextStroke: '0.5px black'
                                }} role="alert">{errors[`${idx}-firstName`]}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                            <label htmlFor={`lastNameKana-${idx}`}
                                   className="block text-base font-bold text-blue-700 mb-2" style={{
                                textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                WebkitTextStroke: '0.5px black'
                            }}>
                                姓かな*
                            </label>
                            <input type="text" id={`lastNameKana-${idx}`} value={guest.lastNameKana}
                                   onChange={e => handleInputChange(idx, 'lastNameKana', e.target.value)}
                                   className={cn('w-full p-3 text-base font-bold border-4 border-solid rounded-lg', 'bg-white/90 text-purple-800', 'focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75', 'transition-all duration-200', errors[`${idx}-lastNameKana`] ? 'border-red-500' : 'border-blue-400')}
                                   style={{
                                       boxShadow: errors[`${idx}-lastNameKana`] ? '0 0 10px rgba(255,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,100,255,0.3), inset 0 0 5px rgba(255,255,255,0.8)',
                                       textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
                                   }} placeholder="たなか"
                                   aria-describedby={errors[`${idx}-lastNameKana`] ? `lastNameKana-${idx}-error` : undefined}
                                   aria-invalid={!!errors[`${idx}-lastNameKana`]}/>
                            {errors[`${idx}-lastNameKana`] &&
                                <p id={`lastNameKana-${idx}-error`} className="mt-1 text-red-600 font-bold" style={{
                                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                    WebkitTextStroke: '0.5px black'
                                }} role="alert">{errors[`${idx}-lastNameKana`]}</p>}
                            </div>
                            <div>
                            <label htmlFor={`firstNameKana-${idx}`}
                                   className="block text-base font-bold text-blue-700 mb-2" style={{
                                textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                WebkitTextStroke: '0.5px black'
                            }}>
                                名かな*
                            </label>
                            <input type="text" id={`firstNameKana-${idx}`} value={guest.firstNameKana}
                                   onChange={e => handleInputChange(idx, 'firstNameKana', e.target.value)}
                                   className={cn('w-full p-3 text-base font-bold border-4 border-solid rounded-lg', 'bg-white/90 text-purple-800', 'focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75', 'transition-all duration-200', errors[`${idx}-firstNameKana`] ? 'border-red-500' : 'border-blue-400')}
                                   style={{
                                       boxShadow: errors[`${idx}-firstNameKana`] ? '0 0 10px rgba(255,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.8)' : '0 0 10px rgba(0,100,255,0.3), inset 0 0 5px rgba(255,255,255,0.8)',
                                       textShadow: '1px 1px 1px rgba(255,255,255,0.5)'
                                   }} placeholder="たろう"
                                   aria-describedby={errors[`${idx}-firstNameKana`] ? `firstNameKana-${idx}-error` : undefined}
                                   aria-invalid={!!errors[`${idx}-firstNameKana`]}/>
                            {errors[`${idx}-firstNameKana`] &&
                                <p id={`firstNameKana-${idx}-error`} className="mt-1 text-red-600 font-bold" style={{
                                    textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                    WebkitTextStroke: '0.5px black'
                                }} role="alert">{errors[`${idx}-firstNameKana`]}</p>}
                            </div>
                        </div>
                        <div>
                            <label htmlFor={`allergy-${idx}`} className="block text-base font-bold text-blue-700 mb-2"
                                   style={{
                                       textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                       WebkitTextStroke: '0.5px black'
                                   }}>
                                アレルギー
                            </label>
                            <input type="text" id={`allergy-${idx}`} value={guest.allergy}
                                   onChange={e => handleInputChange(idx, 'allergy', e.target.value)}
                                   className={cn('w-full p-3 text-base font-bold border-4 border-solid rounded-lg', 'bg-white/90 text-purple-800', 'focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75', 'transition-all duration-200', 'border-blue-400')}
                                   placeholder="アレルギーがあればご記入ください"/>
                        </div>
                        <div>
                            <label htmlFor={`message-${idx}`} className="block text-base font-bold text-blue-700 mb-2"
                                   style={{
                                       textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
                                       WebkitTextStroke: '0.5px black'
                                   }}>
                                メッセージ
                            </label>
                            <textarea id={`message-${idx}`} value={guest.message}
                                      onChange={e => handleInputChange(idx, 'message', e.target.value)}
                                      className={cn('w-full p-3 text-base font-bold border-4 border-solid rounded-lg', 'bg-white/90 text-purple-800', 'focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-75', 'transition-all duration-200', 'border-blue-400')}
                                      rows={6} placeholder="メッセージがあればご記入ください"/>
                        </div>
                    </div>
                </fieldset>
            ))}

            <div className="text-center mb-6">
                <button type="button" onClick={addGuest}
                        className="px-4 py-2 font-bold text-purple-800 border-4 border-purple-600 rounded-lg bg-white hover:bg-purple-100 transition">お連れ様を追加する
                </button>
            </div>

            <div className="text-center mt-6">
                <motion.button type="submit" disabled={status === 'loading'}
                               className={cn('px-8 py-4 text-xl font-black rounded-lg border-4 border-solid border-black', 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400', 'text-white shadow-2xl', 'focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-opacity-75', 'disabled:opacity-50 disabled:cursor-not-allowed', 'transition-all duration-200')}
                               style={{
                                   textShadow: '0 0 10px rgba(255,255,255,0.8)',
                                   WebkitTextStroke: '1px black',
                                   boxShadow: '0 8px 0px #8B4513, 0 12px 20px rgba(0,0,0,0.4), 0 0 20px rgba(255,165,0,0.6), inset 0 0 15px rgba(255,255,255,0.3)'
                               }} whileHover={{
                    scale: 1.05,
                    boxShadow: '0 8px 0px #8B4513, 0 12px 25px rgba(0,0,0,0.5), 0 0 25px rgba(255,165,0,0.8), inset 0 0 20px rgba(255,255,255,0.4)'
                }} whileTap={{
                    scale: 0.95,
                    y: 4,
                    boxShadow: '0 4px 0px #8B4513, 0 6px 15px rgba(0,0,0,0.4), 0 0 15px rgba(255,165,0,0.6), inset 0 0 10px rgba(0,0,0,0.2)',
                    background: 'linear-gradient(135deg, #FF0000, #FF8C00, #FFD700)',
                    filter: 'invert(0.1)'
                }} animate={{
                    boxShadow: status === 'loading' ? ['0 8px 0px #8B4513, 0 12px 20px rgba(0,0,0,0.4), 0 0 20px rgba(255,165,0,0.6)', '0 8px 0px #8B4513, 0 12px 20px rgba(0,0,0,0.4), 0 0 30px rgba(255,165,0,0.8)', '0 8px 0px #8B4513, 0 12px 20px rgba(0,0,0,0.4), 0 0 20px rgba(255,165,0,0.6)'] : undefined,
                    scale: status === 'success' ? [1, 1.1, 1] : 1
                }} transition={{
                    boxShadow: {
                        duration: 1,
                        repeat: status === 'loading' ? Infinity : 0,
                        ease: 'easeInOut'
                    },
                    scale: {
                        duration: 0.3,
                        ease: 'easeOut'
                    }
                }}>
                    {status === 'loading' ? '⏳ 送信中...' : '🚀 送信する 🚀'}
                </motion.button>
                {status === 'success' &&
                    <motion.div
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        className="mt-4 p-4 bg-green-300 border-4 border-solid border-green-600 rounded-lg"
                        style={{boxShadow: '0 0 15px rgba(0,255,0,0.8)'}}
                        role="status" aria-live="polite">
                        <p className="text-xl font-bold text-green-800" style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            WebkitTextStroke: '1px black'
                        }}>
                            ✅ ご返信ありがとうございました！ ✅
                        </p>
                    </motion.div>}

                {/* Status Messages */}
                {status === 'loading' &&
                    <div className="text-center mb-6 p-4 bg-yellow-300 border-4 border-solid border-orange-500 rounded-lg"
                         style={{
                             boxShadow: '0 0 15px rgba(255,165,0,0.8)',
                             animation: 'pulse 1.5s infinite'
                         }} role="status" aria-live="polite">
                        <p className="text-xl font-bold text-orange-800" style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            WebkitTextStroke: '1px black'
                        }}>
                            🔄 送信中...しばらくお待ちください 🔄
                        </p>
                    </div>}
                {status === 'error' &&
                    <div className="text-center mb-6 p-4 bg-red-300 border-4 border-solid border-red-600 rounded-lg" style={{
                        boxShadow: '0 0 15px rgba(255,0,0,0.8)'
                    }} role="alert" aria-live="assertive">
                        <p className="text-xl font-bold text-red-800" style={{
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            WebkitTextStroke: '1px black'
                        }}>
                            ❌ ｴﾗｰが発生しました。再度お試しください ❌
                        </p>
                    </div>}
            </div>
        </form>


        {/* Help Text */}
        <p className="text-center mt-4 text-sm font-bold text-purple-600" style={{
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
            WebkitTextStroke: '0.5px black'
        }}>
            皆さまとお会いできるのを楽しみにしています！💕
        </p>
    </div>;
}
