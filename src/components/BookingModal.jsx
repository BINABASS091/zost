import { useEffect, useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Loader2, Mail, MessageCircle, Sparkles, X } from 'lucide-react'
import { company } from '../data/content'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  dates: '',
  guests: '',
  tour: '',
  message: '',
}

export default function BookingModal({ open, onClose }) {
  const [mode, setMode] = useState('email')
  const [form, setForm] = useState(initialForm)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  const isEmailConfigured = Boolean(emailServiceId && emailTemplateId && emailPublicKey)

  useEffect(() => {
    if (!open) {
      setMode('email')
      setForm(initialForm)
      setStatus({ type: 'idle', message: '' })
      setIsSending(false)
    }
  }, [open])

  const whatsappUrl = useMemo(() => {
    const summary = [
      `Name: ${form.name || 'Not provided'}`,
      `Email: ${form.email || 'Not provided'}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Dates: ${form.dates || 'To be confirmed'}`,
      `Guests: ${form.guests || 'To be confirmed'}`,
      `Tour: ${form.tour || 'General inquiry'}`,
      `Message: ${form.message || 'No additional details provided'}`,
    ].join('\n')

    return `https://wa.me/${company.whatsapp.replace('+', '')}?text=${encodeURIComponent(`Hello ZOST team,\n\nI would like to book a Zanzibar experience.\n\n${summary}`)}`
  }, [form])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleEmailSubmit = async (event) => {
    event.preventDefault()

    if (!form.name || !form.email || !form.phone || !form.dates || !form.guests) {
      setStatus({ type: 'error', message: 'Please fill in your name, email, phone, travel dates, and guest count.' })
      return
    }

    if (!isEmailConfigured) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Please add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your environment.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: 'idle', message: '' })

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          travel_dates: form.dates,
          guests: form.guests,
          preferred_tour: form.tour || 'General inquiry',
          message: form.message || 'No additional details provided.',
          company_name: company.name,
          company_phone: company.phone,
          company_whatsapp: company.whatsapp,
        },
        emailPublicKey,
      )

      setStatus({
        type: 'success',
        message: 'Your booking inquiry was sent successfully. Our team will reply shortly.',
      })
      setForm(initialForm)
    } catch (error) {
      console.error('EmailJS booking submit failed', error)
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending the email. Please try WhatsApp or contact the team directly.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-midnight/70 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
            className="glass w-full max-w-2xl rounded-[2rem] p-5 sm:p-6"
          >
            <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Booking Options</p>
                <h3 className="mt-2 font-heading text-3xl text-navy dark:text-sand">Choose your preferred booking route</h3>
                <p className="mt-2 text-sm text-navy/70 dark:text-sand/70">
                  Send a polished inquiry by email or jump straight into a WhatsApp conversation with your trip details.
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close booking modal"
                className="rounded-full bg-sand p-2 text-navy transition hover:bg-white dark:bg-midnight dark:text-sand"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mb-5 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setMode('email')}
                className={`rounded-[1.2rem] border px-4 py-3 text-left transition ${mode === 'email' ? 'border-gold bg-gold/10 text-navy dark:text-sand' : 'border-white/15 bg-white/10 text-navy/80 dark:text-sand/80'}`}
              >
                <span className="flex items-center gap-2 font-semibold">
                  <Mail size={16} /> Email Inquiry
                </span>
                <span className="mt-2 block text-sm">Ideal for full trip details and direct confirmation by email.</span>
              </button>
              <button
                type="button"
                onClick={() => setMode('whatsapp')}
                className={`rounded-[1.2rem] border px-4 py-3 text-left transition ${mode === 'whatsapp' ? 'border-ocean bg-ocean/10 text-navy dark:text-sand' : 'border-white/15 bg-white/10 text-navy/80 dark:text-sand/80'}`}
              >
                <span className="flex items-center gap-2 font-semibold">
                  <MessageCircle size={16} /> WhatsApp Booking
                </span>
                <span className="mt-2 block text-sm">Chat instantly with our team and send your itinerary details in one message.</span>
              </button>
            </div>

            {mode === 'email' ? (
              <form className="grid gap-4 sm:grid-cols-2" onSubmit={handleEmailSubmit}>
                <div className="sm:col-span-2 rounded-[1.2rem] border border-gold/20 bg-white/8 p-3 text-sm text-navy/70 dark:text-sand/70">
                  <span className="inline-flex items-center gap-2 font-semibold text-navy dark:text-sand">
                    <Sparkles size={14} /> EmailJS status
                  </span>
                  <p className="mt-1">
                    {isEmailConfigured
                      ? 'Your EmailJS configuration is detected. We can send booking inquiries directly from this form.'
                      : 'EmailJS is not configured yet. Add your environment variables to enable email delivery, or use WhatsApp for booking.'}
                  </p>
                </div>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand"
                  placeholder="Full Name *"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand"
                  placeholder="Email Address *"
                />
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand"
                  placeholder="Phone Number *"
                />
                <input
                  name="dates"
                  value={form.dates}
                  onChange={handleChange}
                  className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand"
                  placeholder="Travel Dates *"
                />
                <input
                  name="guests"
                  value={form.guests}
                  onChange={handleChange}
                  className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand"
                  placeholder="Guests *"
                />
                <input
                  name="tour"
                  value={form.tour}
                  onChange={handleChange}
                  className="rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand"
                  placeholder="Preferred Tour or Experience"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="sm:col-span-2 min-h-32 rounded-xl border border-navy/15 p-3 dark:border-gold/20 dark:bg-midnight dark:text-sand"
                  placeholder="Tell us your dream Zanzibar experience"
                />

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-sand transition hover:bg-ocean disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>Send Booking Email</>
                    )}
                  </button>
                </div>

                {status.message ? (
                  <div
                    className={`sm:col-span-2 rounded-2xl border px-4 py-3 text-sm ${status.type === 'success' ? 'border-emerald-400/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-200' : 'border-rose-400/40 bg-rose-500/10 text-rose-700 dark:text-rose-200'}`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {status.type === 'success' ? <CheckCircle2 size={16} /> : null}
                      {status.message}
                    </span>
                  </div>
                ) : null}
              </form>
            ) : (
              <div className="rounded-[1.4rem] border border-white/10 bg-white/10 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  <MessageCircle size={16} /> WhatsApp booking
                </div>
                <p className="mt-3 text-sm text-navy/75 dark:text-sand/75">
                  Share your travel dates, guests, and preferred tour through WhatsApp and our team will prepare a tailored proposal.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/12 p-3 text-sm text-navy/80 dark:text-sand/80">
                    <p className="font-semibold text-navy dark:text-sand">Pre-filled booking details</p>
                    <p className="mt-2">Your current form inputs will be copied into a WhatsApp message automatically.</p>
                  </div>
                  <div className="rounded-[1.1rem] border border-white/10 bg-white/12 p-3 text-sm text-navy/80 dark:text-sand/80">
                    <p className="font-semibold text-navy dark:text-sand">Fast reply time</p>
                    <p className="mt-2">Use WhatsApp for quick confirmations, custom adjustments, and availability checks.</p>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ocean px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-sand transition hover:bg-navy"
                >
                  <MessageCircle size={16} /> Open WhatsApp Booking
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
