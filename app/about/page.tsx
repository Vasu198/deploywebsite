"use client"

import { motion } from "framer-motion"
import { CheckCircle, Heart, Users, Target, Zap, Shield, TrendingUp, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import { GlassHeader } from "@/components/glass-header"

export default function AboutPage() {
  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We leverage cutting-edge AI technology to deliver marketing solutions that stay ahead of the curve.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integrity",
      description: "Transparent processes and honest communication form the foundation of every client relationship.",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We work as an extension of your team, ensuring your vision and goals drive every strategy.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Trust",
      description:
        "Building lasting partnerships through consistent results and unwavering commitment to your success.",
      color: "from-pink-400 to-red-500",
    },
  ]

  const promises = [
    "Transparent Process",
    "Affordable & Flexible Plans",
    "Measurable Results",
    "24/7 Support & Guidance",
  ]

  const timeline = [
    {
      year: "2020",
      title: "The Vision",
      description: "Identified the gap in accessible, AI-powered marketing for small businesses",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "2021",
      title: "First Steps",
      description: "Launched with a mission to democratize digital marketing through intelligent automation",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Growth Phase",
      description: "Expanded services and helped 100+ businesses achieve measurable growth",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Today",
      description: "Leading AI-powered marketing agency transforming businesses across industries",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <GlassHeader />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block p-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-8 backdrop-blur-sm border border-primary/20"
          >
            <Target className="w-16 h-16 text-primary" />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Our Story,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Growth
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Every great business starts with a dream. AI Ad Service was born from one simple idea: to make digital
            marketing simple, smart, and accessible for every business owner.
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="mt-12"
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full animate-float backdrop-blur-sm" />
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-full animate-float backdrop-blur-sm"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-float backdrop-blur-sm"
          style={{ animationDelay: "4s" }}
        />
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground text-balance">
              From a simple idea to transforming businesses worldwide
            </p>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-lg" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div
                        className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                      >
                        <div className="p-2 bg-primary/10 rounded-full text-primary">{item.icon}</div>
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Enhanced Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full border-4 border-background shadow-lg animate-pulse" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-secondary/30 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-accent/30 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-block p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full mb-8">
              <Globe className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Who We Are</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are not just another marketing agency. We are a team of passionate professionals who combine
              creativity, data, and AI-powered strategies to deliver growth that actually matters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From website design and ads to automation and analytics, we provide solutions that save your time,
              maximize your budget, and bring you real customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="h-full glass border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-8 text-center relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${value.color} rounded-full mb-6 text-white shadow-lg`}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Promise</h2>
            <p className="text-xl text-background/80 leading-relaxed mb-12">
              When you work with us, you don't just get a service — you get a partner who truly cares about your
              success. We listen, we understand, and we build strategies that fit your business goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-lg font-medium">{promise}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Why Clients Trust Us</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Because we treat every business as our own. Whether you are running a small local store, expanding to
              state-level customers, or aiming for international growth, our team is here to stand beside you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Many of our clients started small, but with the right strategies, they now reach thousands of new
              customers every month. And the next success story could be yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Write Your Success Story</h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Your journey matters to us. If you are ready to take the next step, let's connect today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
              >
                Call/WhatsApp: +91 7017623747
              </Button>
            </div>

            <p className="text-white/80 mt-8 text-lg">Because at AI Ad Service, your growth is our mission. ❤️</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
