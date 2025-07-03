"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import HeaderBanner from "./HeaderBanner";
import SidebarNavigation from "./SidebarNavigation";
import InvitationContent from "./InvitationContent";
import RSVPForm from "./RSVPForm";
export interface NostalgicWeddingInvitationAppProps {
  // All props optional with defaults for immediate functionality
}
export default function NostalgicWeddingInvitationApp({}: NostalgicWeddingInvitationAppProps = {}) {
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [guestList, setGuestList] = useState([{
    id: '1',
    name: 'John & Jane Smith',
    status: 'Attending'
  }, {
    id: '2',
    name: 'Bob & Carol Johnson',
    status: 'Maybe'
  }, {
    id: '3',
    name: 'Mike & Sarah Wilson',
    status: 'Attending'
  }, {
    id: '4',
    name: 'Tom & Lisa Brown',
    status: 'Not Attending'
  }, {
    id: '5',
    name: 'David & Emma Davis',
    status: 'Attending'
  }, {
    id: '6',
    name: 'Chris & Amy Miller',
    status: 'Maybe'
  }, {
    id: '7',
    name: 'Steve & Kate Anderson',
    status: 'Attending'
  }, {
    id: '8',
    name: 'Paul & Mary Taylor',
    status: 'Attending'
  }]);
  const handleRSVPSubmit = (formData: any) => {
    setRsvpStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setRsvpStatus('success');
      // Add to guest list
      const newGuest = {
        id: Date.now().toString(),
        name: `${formData.firstName} ${formData.lastName}`,
        status: formData.attending,
        mpid: undefined
      };
      setGuestList(prev => [...prev, newGuest]);
    }, 2000);
  };
  return <div className={cn("min-h-screen w-full", "bg-gradient-to-b from-purple-400 via-pink-400 to-yellow-400", "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjAwRkYiIHN0b3Atb3BhY2l0eT0iMC4xIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K')]", "font-['Comic_Sans_MS',_cursive]", "overflow-x-auto")} style={{
    backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.1) 2px,
            rgba(255,255,255,0.1) 4px
          )
        `
  }}>
      {/* Header Banner */}
      <HeaderBanner />
      
      {/* Main Content Table Layout */}
      <main className="table w-full max-w-[800px] mx-auto bg-white/90 border-8 border-double border-purple-600 shadow-2xl" style={{
      boxShadow: `
            0 0 20px rgba(255,0,255,0.5),
            inset 0 0 20px rgba(0,255,255,0.3),
            0 0 40px rgba(255,255,0,0.3)
          `
    }} role="main" aria-label="Wedding invitation main content">
        <div className="table-row">
          {/* Sidebar Navigation */}
          <aside className="table-cell w-48 align-top bg-gradient-to-b from-cyan-300 to-purple-300 border-r-4 border-double border-purple-600" role="navigation" aria-label="Wedding invitation navigation">
            <SidebarNavigation />
          </aside>
          
          {/* Content Area */}
          <div className="table-cell align-top p-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200">
            <div className="space-y-8">
              {/* Invitation Content */}
              <section aria-label="Wedding invitation details">
                <InvitationContent />
              </section>
              
              {/* RSVP Form */}
              <section aria-label="RSVP form">
                <RSVPForm onSubmit={handleRSVPSubmit} status={rsvpStatus} />
              </section>
              
              {/* Guest List */}
              <section aria-label="Guest list">
                <div className="bg-white/80 border-4 border-double border-green-600 p-4 rounded-lg shadow-lg" style={{
                boxShadow: `
                      0 0 15px rgba(0,255,0,0.5),
                      inset 0 0 10px rgba(255,255,255,0.5)
                    `
              }}>
                  <h2 className="text-2xl font-bold text-green-600 mb-4 text-center" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(0,255,0,0.5)',
                  WebkitTextStroke: '1px black'
                }}>
                    🎉 GUEST LIST 🎉
                  </h2>
                  
                  {guestList.length === 0 ? <p className="text-center text-red-600 font-bold text-lg" style={{
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                  WebkitTextStroke: '1px black'
                }}>
                      No guests yet! Be the first to RSVP! 🎊
                    </p> : <div className="h-48 overflow-y-auto border-2 border-solid border-blue-400 bg-white/90 p-2 rounded" style={{
                  // scrollbarWidth: 'thick',
                  // scrollbarColor: '#ff00ff #00ffff'
                }}>
                      <ul className="space-y-2">
                        {guestList.map(guest => <li key={guest.id} className="flex justify-between items-center p-2 bg-gradient-to-r from-yellow-200 to-pink-200 border-2 border-solid border-purple-400 rounded shadow-md" style={{
                      boxShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}>
                            <span className="font-bold text-purple-800" style={{
                        textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
                      }}>
                              {guest.name}
                            </span>
                            <span className={cn("px-2 py-1 rounded font-bold text-xs border-2 border-solid", guest.status === 'Attending' && "bg-green-300 text-green-800 border-green-600", guest.status === 'Maybe' && "bg-yellow-300 text-yellow-800 border-yellow-600", guest.status === 'Not Attending' && "bg-red-300 text-red-800 border-red-600")} style={{
                        textShadow: '1px 1px 1px rgba(0,0,0,0.3)'
                      }}>
                              {guest.status}
                            </span>
                          </li>)}
                      </ul>
                    </div>}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="text-center py-4 text-white font-bold text-lg" style={{
      textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(255,255,255,0.5)',
      WebkitTextStroke: '1px black'
    }}>
        💕 Made with Love & Nostalgia 💕
      </footer>
    </div>;
}