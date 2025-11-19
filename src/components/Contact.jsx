import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: 'loading', text: 'Sending...' })

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed to send')
      const data = await res.json()
      setStatus({ type: 'success', text: 'Message sent successfully!' })
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', text: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Us</h2>
        <p className="text-blue-100/80 mt-2 max-w-2xl">Have a question? Send us a message and we will get back to you.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <input required name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full rounded-xl bg-white/10 text-white placeholder-blue-200/60 p-3 border border-white/10" />
            <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full rounded-xl bg-white/10 text-white placeholder-blue-200/60 p-3 border border-white/10" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="w-full rounded-xl bg-white/10 text-white placeholder-blue-200/60 p-3 border border-white/10" />
            <input required name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="w-full rounded-xl bg-white/10 text-white placeholder-blue-200/60 p-3 border border-white/10" />
          </div>
          <div className="space-y-4">
            <textarea required name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows={7} className="w-full rounded-xl bg-white/10 text-white placeholder-blue-200/60 p-3 border border-white/10" />
            <div className="flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition">Send Message</button>
              {status && (
                <span className={`text-sm ${status.type === 'success' ? 'text-green-300' : status.type === 'error' ? 'text-red-300' : 'text-blue-200'}`}>{status.text}</span>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
