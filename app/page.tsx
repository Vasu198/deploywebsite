import Hero from "@/components/hero"
import PainPoints from "@/components/pain-points"
import Services from "@/components/services"
import HowItWorks from "@/components/how-it-works"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <Services />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  )
}
