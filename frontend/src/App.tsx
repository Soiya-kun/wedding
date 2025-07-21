import { useState } from 'react'
import './App.css'
import HeaderBanner from './components/HeaderBanner'
import InvitationContent from './components/InvitationContent'
import PreWeddingPhotos from './components/PreWeddingPhotos'
import RSVPForm, { type RSVPFormData } from './components/RSVPForm'
import { cn } from './lib/utils'

function App() {
  const [rsvpStatus, setRsvpStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [visitCount, setVisitCount] = useState(0)

  const handleRSVPSubmit = async (data: RSVPFormData) => {
    setRsvpStatus('loading')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, visitCount })
      })
      if (!res.ok) throw new Error(await res.text())
      setRsvpStatus('success')
    } catch {
      setRsvpStatus('error')
    }
  }

  return (
    <div
      className={cn(
        'min-h-screen w-full',
        'bg-gradient-to-b from-purple-400 via-pink-400 to-yellow-400',
        "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMF8xKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzBfMSIgeDE9IjAiIHkxPSIwIiB4Mj0iNDAiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGRjAwRkYiIHN0b3Atb3BhY2l0eT0iMC4xIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K')]",
        'overflow-x-hidden'
      )}
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.1) 2px,
            rgba(255,255,255,0.1) 4px
          )
        `
      }}
    >
      <HeaderBanner onVisitCountChange={setVisitCount} />
      <main
        className="table w-full max-w-[800px] mx-auto bg-white/90 border-8 border-double border-purple-600 shadow-2xl"
        style={{
          boxShadow: `
            0 0 20px rgba(255,0,255,0.5),
            inset 0 0 20px rgba(0,255,255,0.3),
            0 0 40px rgba(255,255,0,0.3)
          `
        }}
        role="main"
        aria-label="Wedding invitation main content"
      >
        <div className="table-row">
          <div className="table-cell align-top p-6 bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-200">
            <div className="space-y-8">
              <section aria-label="Wedding invitation details">
                <InvitationContent />
              </section>
              <section aria-label="Pre wedding photos">
                <PreWeddingPhotos />
              </section>
              <section aria-label="RSVP form">
                <RSVPForm onSubmit={handleRSVPSubmit} status={rsvpStatus} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
