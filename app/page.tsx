"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Palette, Rocket, Zap, Shield, Headphones } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Footer } from "@/components/footer"

const phoneNumber = "6281229312572"
const message = "Halo ZenithTech, saya tertarik dengan jasa pembuatan website!"

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

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
    description: "Website modern dengan teknologi terkini seperti Next.js, React, dan TypeScript."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang indah, intuitif, dan user-friendly untuk pengalaman terbaik."
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimasi kecepatan dan performa website untuk hasil yang maksimal."
  },
  {
    icon: Shield,
    title: "Security",
    description: "Keamanan tingkat tinggi untuk melindungi data dan bisnis Anda."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Pengerjaan cepat tanpa mengorbankan kualitas hasil akhir."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Tim support yang siap membantu Anda kapan saja dibutuhkan."
  }
]

const pricingPlans = [
  {
    name: "Paket Murah",
    price: "350",
    unit: "Ribu",
    description: "Cocok untuk bisnis kecil yang baru memulai",
    features: [
      "Landing Page 1 Halaman",
      "Desain Responsif",
      "Basic SEO",
      "Domain .com (1 Tahun)",
      "Hosting (1 Tahun)",
      "Support 30 Hari"
    ],
    popular: false
  },
  {
    name: "Paket Bisnis",
    price: "750",
    unit: "Ribu",
    description: "Ideal untuk bisnis yang sedang berkembang",
    features: [
      "Website 5-7 Halaman",
      "Desain Custom Premium",
      "Advanced SEO",
      "Domain .com (1 Tahun)",
      "Hosting Premium (1 Tahun)",
      "CMS Integration",
      "Support 90 Hari",
      "Free Maintenance 3 Bulan"
    ],
    popular: true
  },
  {
    name: "Paket Raja",
    price: "1.2",
    unit: "Juta",
    description: "Solusi lengkap untuk enterprise",
    features: [
      "Website Unlimited Halaman",
      "Desain Eksklusif",
      "Full SEO Package",
      "Domain Premium (1 Tahun)",
      "Hosting VPS (1 Tahun)",
      "E-Commerce Ready",
      "Custom Features",
      "Support Prioritas 1 Tahun",
      "Free Maintenance 1 Tahun"
    ],
    popular: false
  }
]

const stats = [
  { value: "2+", label: "Projects Completed" },
  { value: "2+", label: "Happy Clients" },
  { value: "1+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Image CTA */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-6 px-4 py-2">
                Premium Web Development Agency
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
            >
              Membangun{" "}
              <span className="text-primary">Website Premium</span>{" "}
              untuk Bisnis Anda
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg text-pretty"
            >
              ZenithTech adalah partner terpercaya untuk solusi digital modern. 
              Kami menciptakan website yang tidak hanya indah, tetapi juga cepat dan efektif.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="gap-2 px-8" asChild>
                <Link href="/portfolio">
                  Lihat Portfolio
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link href="/about">
                  Tentang Kami
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden">
              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Web Development"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 border border-border"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">100+ Project Selesai</p>
                    <p className="text-sm text-muted-foreground">Dipercaya klien dari seluruh Indonesia</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-3xl border-2 border-primary/20" />
            <div className="absolute -z-20 -top-8 -right-8 w-full h-full rounded-3xl bg-primary/5" />
          </motion.div>
        </div>
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 -z-10" />
        
        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-b border-border">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Our Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Layanan yang Kami Tawarkan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Kami menyediakan berbagai layanan untuk membantu bisnis Anda berkembang di era digital.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-shadow group">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Pilih Paket yang Sesuai
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Harga transparan tanpa biaya tersembunyi. Pilih paket yang paling sesuai dengan kebutuhan Anda.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`h-full relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">Rp {plan.price}</span>
                      <span className="text-muted-foreground"> {plan.unit}</span>
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                      Pilih Paket
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
        {/* Gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <Badge variant="secondary" className="mb-6">Get Started</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty text-lg">
            Hubungi kami sekarang untuk konsultasi gratis. Tim kami siap membantu mewujudkan visi digital Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 px-8">
              <Link
                href={whatsappUrl}>
                Hubungi Kami
             </Link>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <Link href="/work">
                Lihat Layanan
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
