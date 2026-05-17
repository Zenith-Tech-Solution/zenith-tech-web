"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Smartphone, ShoppingCart, Search, Wrench, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

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

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Pengembangan website modern dengan teknologi terkini seperti Next.js, React, dan TypeScript. Kode bersih, performa tinggi, dan mudah di-maintain.",
    features: ["Next.js & React", "TypeScript", "Responsive Design", "SEO Optimized"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang tidak hanya indah tetapi juga intuitif dan user-friendly. Fokus pada pengalaman pengguna yang optimal.",
    features: ["User Research", "Wireframing", "Prototyping", "Design System"]
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Aplikasi mobile cross-platform menggunakan React Native. Satu codebase untuk iOS dan Android dengan performa native.",
    features: ["React Native", "Cross-Platform", "Native Performance", "Offline Support"]
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Solusi e-commerce lengkap untuk bisnis online Anda. Dari toko online sederhana hingga marketplace kompleks.",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"]
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Optimasi mesin pencari dan strategi digital marketing untuk meningkatkan visibilitas dan traffic website Anda.",
    features: ["On-Page SEO", "Technical SEO", "Content Strategy", "Analytics Setup"]
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Layanan maintenance dan support berkelanjutan untuk memastikan website Anda selalu berjalan optimal.",
    features: ["24/7 Monitoring", "Security Updates", "Performance Tuning", "Content Updates"]
  }
]

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Memahami bisnis, tujuan, dan kebutuhan Anda melalui diskusi mendalam."
  },
  {
    step: "02",
    title: "Planning",
    description: "Menyusun strategi, timeline, dan roadmap proyek yang jelas."
  },
  {
    step: "03",
    title: "Design",
    description: "Membuat desain visual yang menarik dan sesuai dengan brand Anda."
  },
  {
    step: "04",
    title: "Development",
    description: "Mengembangkan website dengan kode berkualitas tinggi dan best practices."
  },
  {
    step: "05",
    title: "Testing",
    description: "Pengujian menyeluruh untuk memastikan kualitas dan performa."
  },
  {
    step: "06",
    title: "Launch",
    description: "Deployment dan peluncuran website dengan dukungan penuh."
  }
]

export default function WorkPage() {
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
          <Badge variant="secondary" className="mb-6">Our Work</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Layanan <span className="text-primary">Profesional</span> Kami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda 
            berkembang dan sukses di era digital.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Bagaimana Kami Bekerja
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Proses kerja yang terstruktur dan transparan untuk hasil yang optimal.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary/20 mb-2">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Tertarik dengan Layanan Kami?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Hubungi kami untuk konsultasi gratis dan diskusikan kebutuhan proyek Anda bersama tim expert kami.
          </p>
          <Button size="lg" className="gap-2 px-8">
            Mulai Konsultasi
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
