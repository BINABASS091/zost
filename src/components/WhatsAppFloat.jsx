import { MessageCircle } from 'lucide-react'
import { company, contactCopy } from '../data/content'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${company.whatsapp.replace('+', '')}?text=${encodeURIComponent(contactCopy.whatsapp)}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#1faa59] px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={18} /> WhatsApp
    </a>
  )
}
