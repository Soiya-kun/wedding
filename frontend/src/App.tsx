import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [attendance, setAttendance] = useState('yes')
  const [allergy, setAllergy] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage('')
    setError('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, attendance, allergy })
      })
      if (!res.ok) throw new Error(await res.text())
      setMessage('ありがとうございます！')
    } catch (err) {
      setError((err as Error).message)
    }
  }

  return (
    <div>
      <h1>RSVP</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            お名前
            <input value={name} onChange={e => setName(e.target.value)} required />
          </label>
        </div>
        <div>
          <label>
            出席
            <select value={attendance} onChange={e => setAttendance(e.target.value)}>
              <option value="yes">はい</option>
              <option value="no">いいえ</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            アレルギー
            <textarea value={allergy} onChange={e => setAllergy(e.target.value)} />
          </label>
        </div>
        <button type="submit">送信</button>
      </form>
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default App
