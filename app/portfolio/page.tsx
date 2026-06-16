"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

const portfolioItems = [
  {
    title: "Bengkel Rajawali",
    category: "Web Development",
    description: "Project pertama yang kami kerjakan, dan kami kerjakan mengunakan tech stack di bawah",
    tags: ["HTML", "TailwindCSS", "Javascript"],
    color: "from-primary/20 to-primary/5",
    image: "project1.png",
    url: "https://demo-rajawali-bengkel.netlify.app/"
  },
  {
    title: "AroundWorld Travel",
    category: "Web Development",
    description: "Project kedua yang kami kerjakan, dan kami kerjakan mengunakan tech stack di bawah",
    tags: ["HTML", "TailwindCSS", "Jquery"],
    color: "from-primary/10 to-primary/20",
    image: "project2.png",
     url: "aroundworldtravel.netlify.app"
  }
]

export default function PortfolioPage() {
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
          <Badge variant="secondary" className="mb-6">Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Karya <span className="text-primary">Terbaik</span> Kami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Lihat koleksi proyek-proyek yang telah kami kerjakan untuk berbagai klien 
            dari berbagai industri.
          </p>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {portfolioItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer">
                  {/* Image Placeholder */}
                  <div className={`aspect-video bg-gradient-to-br ${item.color} relative overflow-hidden`}>
                    <Image src={item.image} fill alt="project-image" />
                    <Link href={item.url} target="_blank">
                      
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                           <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                   </Link>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ingin Proyek Anda Selanjutnya?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda. 
            Konsultasi gratis untuk proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 px-8">
              Mulai Proyek
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
