"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Users, Award, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const values = [
  {
    icon: Target,
    title: "Fokus pada Hasil",
    description: "Kami tidak hanya membuat website, tapi solusi yang menghasilkan dampak nyata untuk bisnis Anda."
  },
  {
    icon: Heart,
    title: "Passion & Dedication",
    description: "Setiap proyek dikerjakan dengan penuh passion dan dedikasi untuk hasil terbaik."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Kepuasan klien adalah prioritas utama kami. Kami selalu mendengarkan dan memahami kebutuhan Anda."
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Kualitas tidak pernah dikompromikan. Setiap detail diperhatikan dengan seksama."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Komitmen tepat waktu adalah janji kami. Proyek Anda akan selesai sesuai jadwal."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Komunikasi terbuka dan transparan di setiap tahap pengerjaan proyek."
  }
]

const milestones = [
  { year: "2025", title: "Didirikan", description: "ZenithTech didirikan dengan visi menjadi agensi digital terdepan di Indonesia." },
  { year: "2026", title: "2 Proyek", description: "Mencapai milestone 2 proyek website yang berhasil diselesaikan." }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <Badge variant="secondary" className="mb-6">About Us</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Tentang <span className="text-primary">ZenithTech</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kami adalah tim profesional yang berdedikasi untuk membangun solusi digital 
            berkualitas tinggi yang membantu bisnis Anda berkembang.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                Perjalanan Kami
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-pretty">
                  ZenithTech didirikan pada tahun 2025 dengan satu tujuan sederhana: 
                  membantu bisnis Indonesia memiliki kehadiran digital yang profesional dan efektif.
                </p>
                <p className="text-pretty">
                  Berawal dari tim kecil yang bekerja dari rumah, kini kami telah berkembang 
                  menjadi agensi digital yang dipercaya oleh lebih dari 100 klien dari berbagai industri.
                </p>
                <p className="text-pretty">
                  Kami percaya bahwa setiap bisnis, besar maupun kecil, berhak memiliki 
                  website yang tidak hanya indah tetapi juga fungsional dan menghasilkan hasil nyata.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-primary from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl flex items-center justify-center">
                 <Image src={'/logo-zenith.png'} fill alt="logo-zenith"/>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Visi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Menjadi agensi digital terdepan di Indonesia yang dikenal karena 
                    kualitas, inovasi, dan komitmen terhadap kesuksesan klien.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Misi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Membantu setiap bisnis di Indonesia memiliki kehadiran digital yang 
                    profesional, efektif, dan menghasilkan dampak nyata bagi pertumbuhan bisnis mereka.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Nilai-Nilai yang Kami Pegang
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Nilai-nilai ini menjadi fondasi dalam setiap keputusan dan tindakan kami.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Milestone Perjalanan Kami
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px h-full w-0.5 bg-border" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="text-primary font-bold text-xl mb-2">{milestone.year}</div>
                  <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.description}</p>
                </div>
                
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
