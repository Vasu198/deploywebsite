"use client"

import { GlassHeader } from "@/components/glass-header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Building,
  Heart,
  GraduationCap,
  Scale,
  ShoppingBag,
  Factory,
  Code,
  Plane,
  Shirt,
  Car,
  Coffee,
  Scissors,
  Camera,
  Rocket,
  Building2,
} from "lucide-react"

const packages = [
  {
    id: 1,
    title: "Local Businesses",
    subtitle: "Shops, Salons, Clinics, Restaurants",
    description: "Hyperlocal visibility & footfall increase",
    price: "₹9,999",
    icon: Building,
    gradient: "from-amber-400 to-orange-500",
    services: [
      "Google My Business (GMB) Setup & Optimization",
      "Local SEO (City/Area keywords)",
      "Meta Ads (Local Targeting)",
      "WhatsApp Marketing Automation",
      "Monthly Reports",
    ],
  },
  {
    id: 2,
    title: "Real Estate",
    subtitle: "Agents & Builders",
    description: "Property leads & high-value conversions",
    price: "₹24,999",
    icon: Building2,
    gradient: "from-orange-400 to-red-500",
    services: [
      "Google Ads (Property Buyer Keywords)",
      "Meta Ads (Lead Generation Campaigns)",
      "Landing Page Design",
      "WhatsApp Chatbot for Lead Follow-up",
      "CRM Integration + Reporting",
    ],
  },
  {
    id: 3,
    title: "Healthcare",
    subtitle: "Doctors, Clinics, Hospitals",
    description: "Appointment bookings & trust building",
    price: "₹19,999",
    icon: Heart,
    gradient: "from-red-400 to-pink-500",
    services: [
      "Local SEO (Doctor/Clinic keywords)",
      "Google Ads (Treatment & Services)",
      "Website + Booking Form Setup",
      "Reputation Management (Reviews)",
      "Analytics Dashboard",
    ],
  },
  {
    id: 4,
    title: "Education & Coaching",
    subtitle: "Institutes & Training Centers",
    description: "Student leads & enrollments",
    price: "₹29,999",
    icon: GraduationCap,
    gradient: "from-blue-400 to-indigo-500",
    services: [
      "SEO for Course Keywords",
      "Meta & Google Ads (Leads for Courses)",
      "WhatsApp Automation (Inquiries → Follow-up)",
      "Webinar Funnel Setup",
      "Reporting Dashboard",
    ],
  },
  {
    id: 5,
    title: "Service Providers",
    subtitle: "Lawyers, CAs, Consultants",
    description: "Lead generation & credibility",
    price: "₹24,999",
    icon: Scale,
    gradient: "from-purple-400 to-violet-500",
    services: [
      "SEO (Service + Location keywords)",
      "LinkedIn Ads / Google Ads",
      "Landing Page Setup",
      "Email + WhatsApp Automation",
      "Performance Reports",
    ],
  },
  {
    id: 6,
    title: "Local Retail & E-commerce",
    subtitle: "Small Online Stores",
    description: "Driving online sales",
    price: "₹19,999",
    icon: ShoppingBag,
    gradient: "from-green-400 to-emerald-500",
    services: [
      "Shopping Feed Automation",
      "Google Shopping + Meta Ads",
      "SEO for Product Pages",
      "Cart Abandonment Recovery",
      "WhatsApp Order Bot",
    ],
  },
  {
    id: 7,
    title: "Manufacturers & B2B",
    subtitle: "Industrial Companies",
    description: "Dealer/distributor inquiries & bulk orders",
    price: "₹34,999",
    icon: Factory,
    gradient: "from-gray-400 to-slate-500",
    services: [
      "SEO (Industrial Keywords)",
      "LinkedIn Ads + Google Ads",
      "Landing Pages for Products",
      "CRM Integration",
      "Analytics & Lead Nurturing Automation",
    ],
  },
  {
    id: 8,
    title: "IT & SaaS",
    subtitle: "Software Companies",
    description: "Lead generation & global reach",
    price: "₹44,999",
    icon: Code,
    gradient: "from-cyan-400 to-blue-500",
    services: [
      "SEO (Software & Service Keywords)",
      "LinkedIn + Google Ads",
      "Content Marketing (Blogs, Case Studies)",
      "Account-Based Marketing (ABM)",
      "AI-Powered Lead Scoring",
    ],
  },
  {
    id: 9,
    title: "Hospitality",
    subtitle: "Hotels, Travel, Tourism",
    description: "Bookings & travel packages",
    price: "₹24,999",
    icon: Plane,
    gradient: "from-teal-400 to-cyan-500",
    services: [
      "SEO (Tour/Hotel keywords)",
      "Google Hotel Ads / Travel Ads",
      "Social Media Campaigns",
      "WhatsApp Chatbot for Bookings",
      "Reviews & Reputation Management",
    ],
  },
  {
    id: 10,
    title: "Fashion & Lifestyle",
    subtitle: "Clothing & Lifestyle Brands",
    description: "E-commerce growth & branding",
    price: "₹29,999",
    icon: Shirt,
    gradient: "from-pink-400 to-rose-500",
    services: [
      "Instagram + Facebook Ads",
      "Shopping Feed Optimization",
      "Influencer Marketing (Optional)",
      "Cart Recovery Automation",
      "Analytics Dashboard",
    ],
  },
  {
    id: 11,
    title: "Automobile",
    subtitle: "Dealers & Workshops",
    description: "Car/bike leads, bookings, and service reminders",
    price: "₹24,999",
    icon: Car,
    gradient: "from-yellow-400 to-orange-500",
    services: [
      "Local SEO + Google Ads",
      "Meta Ads (Test Drive Leads)",
      "WhatsApp Automation (Service Reminders)",
      "Landing Page with Booking Form",
      "Monthly Reports",
    ],
  },
  {
    id: 12,
    title: "Food & Beverages",
    subtitle: "Cafes, Cloud Kitchens",
    description: "Orders & local branding",
    price: "₹14,999",
    icon: Coffee,
    gradient: "from-amber-400 to-yellow-500",
    services: [
      "Social Media Marketing (Food Visuals)",
      "Local Ads (Google + Meta)",
      "WhatsApp Ordering Bot",
      "Influencer Tie-ups (Optional)",
      "Monthly Analytics",
    ],
  },
  {
    id: 13,
    title: "Beauty & Wellness",
    subtitle: "Salons, Spas, Gyms",
    description: "Appointment bookings & brand awareness",
    price: "₹12,999",
    icon: Scissors,
    gradient: "from-purple-400 to-pink-500",
    services: [
      "Google My Business SEO",
      "Meta Ads (Local Targeting)",
      "WhatsApp Booking Bot",
      "Customer Loyalty Automation",
      "Reporting Dashboard",
    ],
  },
  {
    id: 14,
    title: "Media & Influencers",
    subtitle: "Content Creators",
    description: "Growing followers & brand deals",
    price: "₹19,999",
    icon: Camera,
    gradient: "from-indigo-400 to-purple-500",
    services: [
      "Personal Branding SEO",
      "Social Media Growth Campaigns",
      "YouTube & Instagram Ads",
      "Analytics Dashboard",
      "Email Marketing",
    ],
  },
  {
    id: 15,
    title: "Startups",
    subtitle: "All Industries",
    description: "Early-stage growth & visibility",
    price: "₹34,999",
    icon: Rocket,
    gradient: "from-emerald-400 to-teal-500",
    services: [
      "Website + Landing Pages",
      "SEO + Paid Ads Combo",
      "Marketing Automation Setup",
      "Brand Identity (Logo + Graphics)",
      "Analytics Reporting",
    ],
  },
  {
    id: 16,
    title: "Enterprises",
    subtitle: "Corporate Level",
    description: "National/Global expansion",
    price: "₹99,999",
    icon: Target,
    gradient: "from-slate-400 to-gray-600",
    services: [
      "Full SEO (National + Global)",
      "Google + Meta + LinkedIn Ads",
      "E-commerce Feed Automation",
      "AI-Powered Automation + CRM",
      "End-to-End Analytics & Reporting",
    ],
  },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50/80 to-orange-50/60 pt-24 sm:pt-32">
      <GlassHeader />

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-amber-600" />
            <span className="text-sm font-semibold text-amber-800">Packages & Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Find the Perfect Package for{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Your Business
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Every business is unique. That's why we created tailored packages for local shops, startups, service
            providers, e-commerce brands, corporates, and international enterprises. Choose your category, see what's
            included, and start growing today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Choose Package & Pay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold bg-transparent"
            >
              WhatsApp Us: +91 7017623747
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon
              return (
                <Card
                  key={pkg.id}
                  className="group relative overflow-hidden bg-white/80 backdrop-blur-sm border-amber-200/50 hover:border-amber-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <CardHeader className="relative">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                      {pkg.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-600 font-medium">{pkg.subtitle}</CardDescription>
                    <p className="text-sm text-gray-700 mt-2">{pkg.description}</p>
                  </CardHeader>

                  <CardContent className="relative">
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-3xl font-black text-gray-900">{pkg.price}</span>
                        <span className="text-sm text-gray-600">/ month</span>
                      </div>
                      {pkg.id === 2 && (
                        <Badge variant="secondary" className="text-xs">
                          Ad Budget Extra
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3 mb-6">
                      {pkg.services.map((service, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-full group-hover:shadow-lg transition-all duration-300">
                      Choose & Pay
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Our Packages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100/50 to-orange-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">Why Our Packages?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Tailored by Business Type</h3>
                <p className="text-gray-700">Easy to choose the right fit for your industry</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Complete Coverage</h3>
                <p className="text-gray-700">Local → Regional → National → International</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Clear Inclusions</h3>
                <p className="text-gray-700">No hidden charges, transparent pricing</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-700">Start small, grow bigger with our support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-12">Payment Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50">
              <h3 className="font-bold text-gray-900 mb-4">UPI / Bank Transfer</h3>
              <p className="text-gray-700">Quick and secure payments</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50">
              <h3 className="font-bold text-gray-900 mb-4">Credit & Debit Cards</h3>
              <p className="text-gray-700">All major cards accepted</p>
            </div>

            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-amber-200/50">
              <h3 className="font-bold text-gray-900 mb-4">PayPal / Stripe</h3>
              <p className="text-gray-700">For international clients</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Once payment is done, our onboarding team will start within 24–48 hrs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Choose Package & Pay
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold bg-transparent"
            >
              WhatsApp Us: +91 7017623747
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-full font-semibold"
            >
              Get Custom Quote →
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
