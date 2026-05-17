"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Berapa harga pembuatan website?",
    answer: "Kami menawarkan 3 paket:\n\n- Paket Murah: Rp 350 Ribu (Landing page 1 halaman)\n- Paket Bisnis: Rp 750 Ribu (Website 5-7 halaman)\n- Paket Raja: Rp 1.2 Juta (Website unlimited halaman)\n\nSemua paket sudah termasuk domain dan hosting 1 tahun."
  },
  {
    question: "Berapa lama proses pengerjaan?",
    answer: "Waktu pengerjaan tergantung kompleksitas project:\n\n- Landing Page: 3-5 hari kerja\n- Website Company Profile: 7-14 hari kerja\n- Website Custom/E-Commerce: 14-30 hari kerja\n\nKami akan memberikan timeline detail setelah diskusi requirement."
  },
  {
    question: "Apa saja layanan yang tersedia?",
    answer: "Layanan kami meliputi:\n\n- Website Company Profile\n- Landing Page\n- E-Commerce / Toko Online\n- Web Application\n- UI/UX Design\n- SEO Optimization\n- Website Maintenance\n\nSemua dengan teknologi modern dan responsive design."
  },
  {
    question: "Bagaimana cara pemesanan?",
    answer: "Proses pemesanan sangat mudah:\n\n1. Hubungi kami via WhatsApp di 0812-2931-2572 atau 0831-4317-2019\n2. Diskusi kebutuhan & requirement\n3. Kami kirimkan proposal & quotation\n4. Deal & DP 50%\n5. Proses pengerjaan\n6. Review & revisi\n7. Pelunasan & website live!\n\nAtau email ke zenithtech625@gmail.com. Klik tombol WhatsApp untuk mulai konsultasi gratis."
  },
  {
    question: "Apakah ada garansi?",
    answer: "Tentu! Kami memberikan:\n\n- Free revisi selama masa pengerjaan\n- Support teknis sesuai paket (30-365 hari)\n- Garansi bug fixing\n- Free maintenance sesuai paket\n\nKepuasan klien adalah prioritas utama kami."
  }
]

export function ChatAssistant() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Selamat datang di ZenithTech. Silakan pilih pertanyaan di bawah atau ketik pertanyaan Anda.",
    },
  ])
  const [showFAQ, setShowFAQ] = React.useState(true)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleFAQClick = (faq: FAQ) => {
    const userMessage: Message = { role: "user", content: faq.question }
    const assistantMessage: Message = { role: "assistant", content: faq.answer }
    
    setMessages((prev) => [...prev, userMessage, assistantMessage])
    setShowFAQ(false)
    
    // Show FAQ again after a short delay
    setTimeout(() => setShowFAQ(true), 500)
  }

  const resetChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Halo! Selamat datang di ZenithTech. Silakan pilih pertanyaan di bawah atau ketik pertanyaan Anda.",
      },
    ])
    setShowFAQ(true)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 md:bottom-6 md:right-24 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Open chat assistant"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-40 right-6 md:bottom-24 md:right-24 z-50 w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-foreground">ZenithTech Assistant</h3>
                    <p className="text-xs text-primary-foreground/80">FAQ & Support</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetChat}
                  className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 text-xs"
                >
                  Reset
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 space-y-4 bg-background">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    {message.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* FAQ Buttons */}
            <AnimatePresence>
              {showFAQ && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="border-t border-border bg-card"
                >
                  <div className="p-3">
                    <p className="text-xs text-muted-foreground mb-2 font-medium">Pertanyaan Populer:</p>
                    <div className="flex flex-wrap gap-2">
                      {faqs.map((faq, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleFAQClick(faq)}
                          className="text-xs px-3 py-1.5 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full transition-colors text-left"
                        >
                          {faq.question}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
