"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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

const teamMembers = [
  {
    name: "Rizqy Fajrul Syabani",
    role: "Web Developer",
    bio: "Full-stack developer yang passionate dalam membangun website modern dan responsif dengan teknologi terbaru.",
    image: "https://avatars.githubusercontent.com/Rzfan03",
    social: {
      github: "https://github.com/Rzfan03"
    }
  },
  {
    name: "Azka Raditya Rahman",
    role: "Marketing",
    bio: "Ahli strategi marketing digital yang fokus pada pertumbuhan brand dan engagement pelanggan.",
    image: "https://avatars.githubusercontent.com/AzkaNieGengz",
    social: {
      github: "https://github.com/AzkaNieGengz"
    }
  },
  {
    name: "Apriansyah",
    role: "Promosi",
    bio: "Spesialis promosi dan outreach yang membantu memperluas jangkauan dan visibilitas brand.",
    image: "https://avatars.githubusercontent.com/miawmiaw-dev",
    social: {
      github: "https://github.com/miawmiaw-dev"
    }
  }
]

export default function TeamPage() {
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
          <Badge variant="secondary" className="mb-6">Our Team</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            Tim <span className="text-primary">Profesional</span> Kami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Kenali orang-orang hebat di balik kesuksesan setiap proyek ZenithTech. 
            Tim yang berdedikasi dan passionate tentang teknologi.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow group overflow-hidden">
                  <CardContent className="p-6">
                    {/* Avatar */}
                    <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm mb-6">{member.bio}</p>
                      
                      {/* Social Links */}
                      <div className="flex justify-center gap-3">
                        <Link
                          href={member.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          aria-label={`${member.name} GitHub`}
                        >
                          <Github className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <Badge variant="secondary" className="mb-4">Join Our Team</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ingin Bergabung dengan Kami?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Kami selalu mencari talenta berbakat yang passionate tentang teknologi dan inovasi. 
            Jika Anda ingin menjadi bagian dari tim kami, kirimkan CV Anda ke careers@zenithtech.id
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="outline" className="px-4 py-2">Frontend Developer</Badge>
            <Badge variant="outline" className="px-4 py-2">Backend Developer</Badge>
            <Badge variant="outline" className="px-4 py-2">UI/UX Designer</Badge>
            <Badge variant="outline" className="px-4 py-2">Project Manager</Badge>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
