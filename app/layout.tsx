import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ChatAssistant } from '@/components/chat-assistant'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ZenithTech - Web Development Agency',
  description: 'ZenithTech adalah agensi pembuatan website modern dan premium. Kami membangun solusi digital yang cepat, responsif, dan berkualitas tinggi untuk bisnis Anda.',
  keywords: ['web development', 'website', 'digital agency', 'ZenithTech', 'Jakarta', 'Indonesia'],
  authors: [{ name: 'ZenithTech' }],
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/logo-zenith.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-zenith.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/logo-zenith.png',
  },
  verification: {
    google: 'oR1vFDbIf-85CemIwzQupghHx1F07kWTM9UCqgzdTG8'
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <WhatsAppButton />
          <ChatAssistant />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
